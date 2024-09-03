import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { setModal } from '../../../redux/features/modal';
import Foreground from '../containers/chat/foreground';
import Room from '../containers/chat/room';
// import * as modal from '../components/modals';
import NewContactModal from '../components/modals/newContact';
import config from '../../../config';

function Chat() {
  const dispatch = useDispatch();
  // const imageCropper = useSelector((state) => state.modal.imageCropper);
  const master = useSelector((state) => state.user.master);
  console.log('chatmaste',master)

  const requestNotification = async () => {
    if (Notification.permission !== 'granted') {
      // ask the user for permission
      await Notification.requestPermission();
    }
  };

  useEffect(() => {
    requestNotification();

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', () => {
      window.history.pushState(null, '', window.location.href);
    });
  }, []);

  return (
    <div
      
      className="absolute w-full h-full overflow-hidden grid md:grid-cols-[380px_1fr] dark:text-white/90"
      onClick={() => {
        // close all modals
        dispatch(setModal({ target: '*' }));
      }}
    >
      <Helmet>
        <title>{`@${master.username} - ${config.brandName}`}</title>
      </Helmet>

      {/* <modal.signout />
      <modal.changePass />
      <modal.deleteAcc />
      <modal.qr />
      <modal.newContact />
      <modal.webcam />
      {imageCropper && <modal.imageCropper />}
      <modal.photoFull />
      <modal.confirmDeleteChat />
      <modal.sendFile />
      <modal.confirmAddParticipant />
      <modal.editGroup />
      <modal.confirmExitGroup />
      <modal.confirmDeleteContact />
      <modal.confirmDeleteChatAndInbox /> */}
      <NewContactModal />

      <div style={{visibility:'hidden'}}>
        <Foreground/>
      </div>
      
      <Room/>
    </div>
  );
}

export default Chat;
