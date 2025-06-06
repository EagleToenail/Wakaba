import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import * as bi from 'react-icons/bi';
import ForegroundHeader from '../../components/chat/foreground/header'
import ForegroundInbox from '../../components/chat/foreground/inbox'
import ForegroundMinibox from '../../components/chat/foreground/minibox'
import ContactPage from '../../pages/contact';



function ForeGround() {
  const chatRoom = useSelector((state) => state.room.chat);
  const refreshInbox = useSelector((state) => state.chore.refreshInbox);

  const [inboxes, setInboxes] = useState(null);
  const [search, setSearch] = useState('');

  const handleGetInboxes = async (signal) => {
    try {
      setInboxes(null);

      const userId = localStorage.getItem('userId');
      const { data } = await axios.post('/inboxes', {userId,search});
      // console.log( Object.values(data.payload), "datatatatatat")
      setInboxes(data.payload);
    } catch (error0) {
      console.error(error0.response.data.message);
    }
  };

  useEffect(() => {
    const abortCtrl = new AbortController();
    handleGetInboxes(abortCtrl.signal);

    return () => {
      abortCtrl.abort();
    };
  }, [refreshInbox, search]);

  return (
    <div
      className={`${
        chatRoom.isOpen && '-translate-x-full md:translate-x-0'
      } transition w-full h-full relative z-10 grid grid-rows-[auto_1fr] overflow-hidden`}
    >
      {
        // loading animation
        !inboxes && (
          <div className="absolute w-full h-full z-0 flex justify-center items-center bg-white dark:bg-spill-900">
            <span className="flex gap-2 items-center">
              <i className="animate-spin">
                <bi.BiLoaderAlt size={18} />
              </i>
              <p>Loading</p>
            </span>
          </div>
        )
      }
      <ContactPage />
      <ForegroundMinibox />
      <ForegroundHeader setSearch={setSearch} />
      <ForegroundInbox inboxes={inboxes} setInboxes={setInboxes} />
      {/* <ForegroundInbox setInboxes={setInboxes} /> */}
      
    </div>
  );
}

export default ForeGround;
