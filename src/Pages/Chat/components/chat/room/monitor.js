import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as ri from 'react-icons/ri';
import * as bi from 'react-icons/bi';
import axios from 'axios';
import Linkify from 'linkify-react';
import socket from '../../../../../helpers/socket';
import {
  touchAndHoldStart,
  touchAndHoldEnd,
} from '../../../../../helpers/touchAndHold';
import { setSelectedChats } from '../../../../../redux/features/chore';
import { setPage } from '../../../../../redux/features/page';
import { setModal } from '../../../../../redux/features/modal';
import room from '../../../../../redux/features/room';

function Monitor({
  newMessage,
  setNewMessage,
  chats,
  setChats,
  control,
  setControl,
  loaded,
}) {
  const dispatch = useDispatch();
  const {
    chore: { selectedChats },
    room: { chat: chatRoom },
    user: { master },
    page,
  } = useSelector((state) => state);

  const isGroup = chatRoom.data.roomType === 'group';
  const isScrolled = useRef(false);
  const [loadingScroll, setLoadingScroll] = useState(false);

  useEffect(() => {
    if (chats) {
      const last = chats[chats.length - 1];

      if (master.id !== last?.userId && !last?.readed) {
        const { roomId, ownersId } = chatRoom.data;

        socket.emit('chat/read', { roomId, ownersId });
      }
    }
  }, [chats ? chats[chats.length - 1] : !!chats]);

  useEffect(() => {

    socket.on('chat/read', () => {

      setChats((prev) => {
        prev
          .filter((elem) => !elem.readed)
          .map((elem) => Object.assign(elem, { readed: true }));
          console.log("prev",prev);
        return [...prev];
      });
    });

    socket.on('chat/delete', ({ userId, chatsId }) => {
      if (chatRoom.isOpen) {
        if (userId === master.id) {
          dispatch(setSelectedChats(null));
          // close confirmDeleteChat modal
          dispatch(
            setModal({
              target: 'confirmDeleteChat',
              data: false,
            })
          );
        }

        setTimeout(() => {
          setChats((prev) =>            
            prev.filter((elem) => !chatsId.includes(elem.id))
          );
        }, 300);
      }
    });

    return () => {
      socket.off('chat/read');
      socket.off('chat/delete');
    };
  }, []);

  const handleInfiniteScroll = async (e) => {
    const { scrollTop } = e.target;
    const { skip, limit } = control;
    if (scrollTop === 0) {
      e.target.scrollTop = 1;
    }

    if (
      scrollTop < 128 &&
      chats?.length >= skip + limit &&
      !isScrolled.current
    ) {
      isScrolled.current = true;
      setLoadingScroll(true);

      const { data } = await axios.get(`/chats/${chatRoom.data.roomId}`, {
        params: {
          skip: skip + limit,
          limit,
        },
      });
      // console.log(data)
      
      setChats((prev) => [...data.payload, ...prev]);
      setControl((prev) => ({
        ...prev,
        skip: prev.skip + prev.limit,
      }));

      setLoadingScroll(false);

      setTimeout(() => {
        isScrolled.current = false;
      }, 1000);
    }
  };

  return (
   
     <div
      id="monitor"
      aria-hidden
      className={`
        ${
          loaded ? 'scrollbar-thin' : 'scrollbar-none'
        } scrollbar-thumb-spill-300 hover:scrollbar-thumb-spill-400 dark:scrollbar-thumb-spill-800 dark:hover:scrollbar-thumb-spill-700
        select-text relative overflow-y-auto bg-spill-100 dark:bg-spill-950
      `}
      onScroll={handleInfiniteScroll}
    >

    {!loaded && (
        <div className="absolute w-full h-full z-10 flex justify-center items-center bg-spill-100 dark:bg-spill-950">
          <span className="flex gap-2 items-center">
            <i className="animate-spin">
              <bi.BiLoaderAlt size={18} />
            </i>
            <p>Loading</p>
          </span>
        </div>
      )}


    <div id="monitor-content" className="relative py-4 flex flex-col">
         {loadingScroll && (
          <div className="mb-2 flex justify-center">
            <i className="animate-spin">
              <bi.BiLoaderAlt size={32} />
            </i>
          </div>
        )}
        {chats &&
          chats
            // .filter((elem) => !elem.deletedBy.includes(master.id))
            .map((elem, i, arr) => (
              <React.Fragment key={elem.id}>
                {
                  // chat header: show datetime every new days
                  moment(elem.createdAt).date() !==
                    (i > 0 && moment(arr[i - 1].createdAt).date()) && (
                    <div className="my-2 flex justify-center">
                      <span className="block py-0.5 px-2 rounded-full bg-white dark:bg-spill-800">
                        <p className="text-sm">
                          {moment(elem.createdAt).format('LL')}
                        </p>
                      </span>
                    </div>
                  )
                }
              <div
                  className={`
                    ${elem.userId !== arr[i + 1]?.userId && 'mb-2'}
                    ${selectedChats ? 'cursor-pointer' : ''}
                    ${
                      selectedChats &&
                      selectedChats.includes(elem.id) &&
                      'bg-spill-200 dark:bg-black/20'
                    }
                    w-full py-0.5 px-4 flex gap-4 justify-center items-center
                  `}
                  aria-hidden
                  onClick={() => {
                    if (selectedChats) {
                      dispatch(setSelectedChats(elem.id));
                    }
                  }}
                ></div>
               {selectedChats && (
                    <span
                      className={`${
                        selectedChats.includes(elem.id)
                          ? 'bg-sky-400 dark:bg-sky-600'
                          : 'transparent'
                      } w-6 h-6 flex flex-none justify-center items-center rounded-full border-2 border-solid border-spill-900/60 dark:border-spill-100/60`}
                    >
                      {selectedChats.includes(elem.id) && (
                        <bi.BiCheck size={18} />
                      )}
                    </span>
                  )}
                   <div
                    className={`${
                      elem.userId == master.id && 'justify-end'
                    } w-[90%] flex`}
                  >
                    {/* chat card */}
                    <div
                      className={`
                        ${
                          elem.userId == master.id
                            ? ' ml-12 rounded-l-xl bg-sky-200 dark:bg-[#ebe6e0]'
                            : 'mr-12 rounded-r-xl bg-[#ebe6e0] dark:bg-bg-[#ebe6e0]'
                        }
                        ${
                          elem.userId == arr[i - 1]?.userId &&
                          moment(elem.createdAt).date() ===
                            moment(arr[i - 1]?.createdAt).date() &&
                          'rounded-xl'
                        }
                        group relative p-2 rounded-b-xl overflow-hidden
                      `}
                      aria-hidden
                      onContextMenu={(e) => {
                        e.preventDefault();
                        dispatch(setSelectedChats(elem.id));
                      }}
                      onTouchStart={() => {
                        touchAndHoldStart(() =>
                          dispatch(setSelectedChats(elem.id))
                        );
                      }}
                      onTouchMove={() => touchAndHoldEnd()}
                      onTouchEnd={() => touchAndHoldEnd()}
                    >
                      {elem.replyTo && (
                        <div className="relative mb-2 rounded-xl grid grid-cols-[auto_1fr] overflow-hidden bg-black/5 dark:bg-black/20">
                          <span className="block w-1 h-full bg-sky-600 dark:bg-sky-200"></span>
                          <span className="py-2 px-3">
                            <span className="text-sm">
                              {elem.reply.fullname}
                            </span>
                            <p className="text-sm opacity-60">
                              {elem.reply.text}
                            </p>
                          </span>
                        </div>
                      )}
                      {elem.file && (
                        <div className="mb-2">
                          {elem.file.type === 'image' && (
                            <img
                              src={elem.file.url}
                              alt=""
                              className="w-full rounded-lg cursor-pointer hover:brightness-75"
                              aria-hidden
                              onClick={(e) => {
                                e.stopPropagation();
                                dispatch(
                                  setModal({
                                    target: 'photoFull',
                                    data: elem.file.url,
                                  })
                                );
                              }}
                            />
                          )}
                          {elem.file.type !== 'image' && (
                            <span
                              className={`
                                  ${
                                    elem.userId === master.id
                                      ? 'bg-sky-100'
                                      : 'bg-spill-100'
                                  }
                                  p-2 grid grid-cols-[auto_1fr_auto] gap-2 rounded-lg dark:bg-black/20
                                `}
                            >
                              <i className="translate-y-0.5">
                                <ri.RiFileTextFill size={20} />
                              </i>
                              <p className="break-all">
                                {elem.file.originalname}
                              </p>
                              <a
                                href={elem.file.url}
                                download={elem.file.originalname}
                                className="block ml-2 translate-y-0.5"
                              >
                                <i className="text-black dark:text-white hover:text-sky-600 dark:hover:text-sky-400">
                                  <bi.BiDownload size={20} />
                                </i>
                              </a>
                            </span>
                          )}
                        </div>
                      )}
                      {/* chat body message */}
                      <div className="px-1">
                        {/* profile avatar in group chat */}
                        {/* {isGroup && (
                          <span
                            className="truncate grid grid-cols-[auto_1fr] gap-2 items-start cursor-pointer"
                            aria-hidden
                            onClick={() => {
                              if (
                                master.id !== elem.userId &&
                                page.friendProfile !== elem.userId &&
                                !selectedChats
                              ) {
                                dispatch(
                                  setPage({
                                    target: 'friendProfile',
                                    data: elem.userId,
                                  })
                                );
                              }
                            }}
                          >
                            <img
                              src={
                                elem.profile?.avatar ??
                                'assets/images/default-avatar.png'
                              }
                              alt=""
                              className="w-5 h-5 rounded-full"
                            />
                            <p className="font-bold truncate text-sky-800 dark:text-sky-200">
                              {elem.profile?.fullname ?? '[inactive]'}
                            </p>
                          </span>
                        )} */}
                        <p
                          className="break-all"
                          aria-hidden
                          onClick={(e) => {
                            if (e.ctrlKey) e.preventDefault();
                          }}
                        >
                          <Linkify as="span">{elem.text}</Linkify>
                          <span
                            className={`${
                              elem.userId == master.id && 'mr-5'
                            } invisible text-xs ml-1`}
                          >
                            {moment(elem.createdAt).format('LT')}
                          </span>
                        </p>
                        <span className="p-2 absolute bottom-0 right-0 flex gap-0.5 items-center">
                          <p className="text-xs opacity-80">
                            {moment(elem.createdAt).format('LT')}
                          </p>
                          {elem.userId == master.id && (
                            <i>
                              {elem.readed ? (
                                <ri.RiCheckDoubleFill
                                  size={18}
                                  className="text-sky-600 dark:text-sky-400"
                                />
                              ) : (
                                <ri.RiCheckFill
                                  size={18}
                                  className="opacity-80"
                                />
                              )}
                            </i>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                 
              </React.Fragment>
            ))}
           
            {console.log("chat log", chats)}
        {newMessage > 0 && (
          <button
            type="button"
            className="group fixed z-10 bottom-0 right-0 w-12 h-12 flex justify-center items-center rounded-full -translate-y-20 -translate-x-4 bg-white dark:bg-spill-800 hover:bg-sky-600 dark:hover:bg-sky-600"
            onClick={() => {
              const monitor = document.querySelector('#monitor');
              monitor.scrollTo({
                top: monitor.scrollHeight,
                behavior: 'smooth',
              });

              setTimeout(() => setNewMessage(0), 150);
            }}
          >
            <span className="font-bold absolute top-0 px-2 -translate-y-2/3 rounded-full text-white bg-sky-600">
              {newMessage}
            </span>
            <i className="group-hover:text-white">
              <bi.BiChevronDown size={28} />
            </i>
          </button>
        )}

      </div>
      </div>
  );
}

export default Monitor;
