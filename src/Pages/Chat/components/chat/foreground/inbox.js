import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as ri from 'react-icons/ri';
import socket from '../../../../../helpers/socket';
import { setChatRoom } from '../../../../../redux/features/room';
import InboxMenu from '../../modals/inboxMenu';
import { setModal } from '../../../../../redux/features/modal';

import {
  touchAndHoldStart,
  touchAndHoldEnd,
} from '../../../../../helpers/touchAndHold';
import notification from '../../../../../helpers/notification';

function Inbox({ inboxes, setInboxes }) {
  const dispatch = useDispatch();
  const {
    user: { master, setting },
    room: { chat: chatRoom },
    modal,
  } = useSelector((state) => state);

  const handleContextMenu = (e, elem) => {
    const inbox = document.querySelector('#inbox');

    const x = e.clientX > inbox.clientWidth / 2 ? e.clientX - 160 : e.clientX;
    const y = e.clientY > inbox.clientHeight / 2 ? e.clientY - 56 : e.clientY;

    dispatch(
      setModal({
        target: 'inboxMenu',
        data: {
          inbox: elem,
          x,
          y,
        },
      })
    );
  };

  useEffect(() => {
    console.log("inbox read")

    socket.on('inbox/read', (payload) => {
      console.log("inbox read")
      console.log(payload);
      setInboxes((prev) => {
        const index = prev.findIndex((elem) => elem.id === payload.id);
        prev.splice(index, 1, payload);

        return [...prev];
      });
    });

    // socket.on('group/create', (payload) =>
    //   setInboxes((prev) => [payload, ...prev])
    // );

    socket.on('inbox/delete', (roomsId) => {
      setInboxes((prev) =>
        prev.filter((elem) => !roomsId.includes(elem.roomId))
      );
    });

    // socket.on('group/exit', (payload) => {
    //   setInboxes((prev) => [
    //     payload.inbox,
    //     ...prev.filter((elem) => elem.roomId !== payload.inbox.roomId),
    //   ]);
    // });

    return () => {
      // socket.off('group/create');
      // socket.off('group/exit');
      socket.off('inbox/read');
      socket.off('inbox/delete');
    };
  }, [setting]);

  useEffect(() => {
    socket.on('inbox/find', async (payload) => {
      console.log("Inbox find start" ,payload)

      // concat old inboxes data with new data
      setInboxes((prev) => {
        const olds = prev.filter((elem) => elem.id !== payload.id);
        return [payload, ...olds];
      });
      const isNotSender = payload.content.from !== master.id;

      if (isNotSender && !setting.mute) {
        // const audio = new Audio('assets/sound/default-ringtone.mp3');
        // audio.volume = 1;

        // audio.play();

        const isGroup = payload.roomType === 'group';
        const sender = payload.owners.find(
          (elem) => elem.userId === payload.content.from
        );

        // browser notification
        notification({
          title: `${isGroup ? payload.group.name : sender.fullname} (@${
            sender.username
          })`,
          body: payload.content.text,
          icon: isGroup ? payload.group.avatar : sender.avatar,
        });
      }
    });

    return () => {
      socket.off('inbox/find');
    };
  }, [setting.mute]);

  return (
    
    <div
      id="inbox"
      className="pb-16 md:pb-0 -z-10 flex flex-col overflow-y-auto dark:bg-spill-900 scrollbar-thin scrollbar-thumb-spill-200 hover:scrollbar-thumb-spill-300 dark:scrollbar-thumb-spill-700 dark:hover:scrollbar-thumb-spill-600"
    >
      {modal.inboxMenu && <InboxMenu />}
      {inboxes &&
        // inboxes
        //   // .filter((elem) => !elem.deletedBy.includes(master.id))
        //   .map((elem) => (
          Object.entries(inboxes[0]).map(([key, elem])=> (

            <div
              key={elem.id}
              className={`
              ${
                (chatRoom.data?.roomId === elem.roomId ||
                  modal.inboxMenu?.inboxId === elem.id) &&
                'bg-spill-100/60 dark:bg-spill-800/60'
              }
              px-4 pt-2 grid grid-cols-[auto_1fr] gap-4 items-center cursor-pointer
              border-0 border-b border-solid border-spill-200 dark:border-spill-800
              hover:bg-spill-100/60 dark:hover:bg-spill-800/60
            `}
              onClick={() => {
                if (chatRoom.data?.roomId !== elem.roomId) {
                  
                  if (elem.roomType === 'private') {
                    
                    const profile = JSON.parse(elem.ownersId).find((x) => x!= master.id);
                    dispatch(
                      setChatRoom({
                        isOpen: true,
                        refreshId: elem.roomId,
                        data: {
                          ...elem,
                          profile: !profile
                            ? {
                                avatar: 'default-avatar.png',
                                fullname: '[inactive]',
                                updatedAt: new Date().toISOString(),
                                active: false,
                              }
                            : {
                                ...profile,
                                active: true,
                              },
                        },
                      })
                    );
                  } else {
                    dispatch(
                      setChatRoom({
                        isOpen: true,
                        refreshId: elem.roomId,
                        data: elem,
                      })
                    );
                  }
                }
              }}
              onContextMenu={(e) => {
                e.stopPropagation();
                e.preventDefault();

                handleContextMenu(e, elem);
              }}
              onTouchStart={(e) => {
                touchAndHoldStart(() => handleContextMenu(e, elem));
              }}
              onTouchMove={() => touchAndHoldEnd()}
              onTouchEnd={() => touchAndHoldEnd()}
            >                        
            
                       
                {/* {console.log("testtest", ((elem.fullname)))} */}
              {/* <img
                src={
                  elem.roomType == 'private'
                    ? JSON.parse(elem.ownersId).find((x) => x!= master.id)
                        ?.avatar || 'default-avatar.png'
                    : elem.group.avatar ||
                      '/default-group-avatar.png'
                }
                alt=""
                className="w-14 h-14 rounded-full"
              /> */}
              <div type="button" className="w-6 h-6 rounded-md text-[#655b4a] bg-[#655b4a] tracking-wider font-medium  outline-none text-[15px]"></div>
              <div className="overflow-hidden grid gap-0.5">
                <div className="grid grid-cols-[1fr_auto] gap-3">
                  <p className="text-[15px] font-bold truncate">
                  {(elem.fullname)}
                    {/* {elem.roomType === 'private'
                      ? elem.content.senderName: elem.group.name} */}
                  </p>
                  <p className="text-sm opacity-60">
                    {moment((elem.content).time).fromNow()}
                  </p>
                </div>
                {/* <div className="grid grid-cols-[1fr_auto] gap-2 items-center">
                  <span className="flex gap-1 items-center overflow-hidden">
                    {JSON.parse(elem.content).from === master.id && (
                      <i>
                        {elem.unreadMessage === 0 ? (
                          <ri.RiCheckDoubleFill
                            size={20}
                            className="text-sky-600 dark:text-sky-400"
                          />
                        ) : (
                          <ri.RiCheckFill size={20} />
                        )}
                      </i>
                    )}
                    <span className="truncate flex gap-1 items-center">
                      {elem.roomType === 'group' && (
                        <p>{JSON.parse(elem.content).senderName}</p>
                      )}

                      {elem.file && elem.file.type === 'image' && (
                        <img src={elem.file.url} alt="" className="h-5" />
                      )}
                      {elem.file && elem.file.type !== 'image' && (
                        <i>
                          <ri.RiFileTextFill size={20} />
                        </i>
                      )}

                      <p className="truncate">{elem.content.text}</p>
                    </span>
                  </span>
                  {JSON.parse(elem.content).from !== master.id &&
                    elem.unreadMessage > 0 && (
                      <span className="w-5 h-5 flex justify-center items-center rounded-full bg-spill-200 dark:bg-spill-700">
                        <p className="text-sm">{elem.unreadMessage}</p>
                      </span>
                    )}
                </div> */}
              </div>
            </div>
          ))}
       
    </div>
  );
}

export default Inbox;

