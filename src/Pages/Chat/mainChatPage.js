import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import * as bi from 'react-icons/bi';
import '../../Assets/css/chat.css';
import Chat from './router/chat';
import {jwtDecode} from 'jwt-decode';

import { setMaster, setSetting } from '../../redux/features/user';
import socket from '../../helpers/socket';
import config from '../../config';
import { getSetting } from '../../api/services/setting.api';

function MainChatPage() {
  const dispatch = useDispatch();
  const master = useSelector((state) => state.user.master);

  const [inactive, setInactive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  
  const handleGetMaster = async (signal) => {
    try {
      // get access token from localStorage
      const token = localStorage.getItem('token');
      if (token) 
        {
      
        axios.defaults.headers.Authorization = `Bearer ${token}`;
        // get account setting
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;
       
        const setting = await getSetting({ signal });
        if (setting) {
          dispatch(setSetting(setting));
          const { data } = await axios.post('/users', { userId });
          // console.log("===================")
          // console.log(data.payload)
          // set master
          dispatch(setMaster(data.payload));

          socket.emit('user/connect', data.payload.id);
        }
        setLoaded(true);
      }else {
        setTimeout(() => setLoaded(true), 1000);
      }
    } catch (error0) {
      console.error(error0.message);
    }
  };

  // const { setting } = useSelector((state) => state.user);

  useEffect(() => {
    const abortCtrl = new AbortController();
    // set default base url
    axios.defaults.baseURL = config.isDev
      ? process.env.REACT_APP_WAKABA_API_BASE_URL
      : '/api';
      // console.log("baseURL===================",axios.defaults.baseURL);
      // console.log(token, "token:123")
      handleGetMaster(abortCtrl.signal);

     socket.on('user/inactivate', () => {
        setInactive(true);
       dispatch(setMaster(null));
     });
    console.log("inactive",inactive)
    return () => {
      abortCtrl.abort();
      socket.off('user/inactivate');
    };
  }, [dispatch, handleGetMaster, inactive]);

  useEffect(() => {
    document.onvisibilitychange = (e) => {
      if (master) {
        const active = e.target.visibilityState === 'visible';
        socket.emit(active ? 'user/connect' : 'user/disconnect', master.id);
      }
    };
  }, [!!master]);

  return (

    <>
      {loaded ?
          !inactive && master ?
          <Chat/>:"ccc"        
      :
        <div className="absolute w-full h-full flex justify-center items-center bg-white dark:text-white/90 dark:bg-spill-900">
          <div className="flex gap-2 items-center">
            <i className="animate-spin">
              <bi.BiLoaderAlt />
            </i>
            <p>Loading</p>
          </div>
        </div>
      }
        {/* <Chat/> */}
    </>

  );
}

export default MainChatPage;
