import React, { useState, useEffect, useRef } from 'react'
import {useLocation } from 'react-router-dom';
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import GeneralAccordion from '../../Components/GeneralAccordion';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import styles

export default function GeneralChat() {

    const location = useLocation();

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    
    // Get the full URL
    const pathname = location.pathname; // Just the path
    const parts = pathname.split('/'); // Split the path by "/"
    const destinationURL = parts[2]; // 

    const [generalTitle, setGeneralTitle] = useState('');

    useEffect(() => {
      switch (destinationURL) {
        case 'allgeneral':
          setGeneralTitle('一般');
          break;
        case 'allforall':
          setGeneralTitle('全体周知');
          break;
        case 'wakabapassword':
          setGeneralTitle('WAKABA パスワード');
          break;
        case 'yahooauction':
          setGeneralTitle('ヤフオク');
          break;
        case 'executemeeting':
          setGeneralTitle('幹部会議連絡');
          break;
        case 'standardout':
          setGeneralTitle('基準外');
          break;
        case 'basereport':
          setGeneralTitle('基者卸報告');
          break;
        case 'training':
          setGeneralTitle('研修');
          break;
        case 'storecommunication':
          setGeneralTitle('店舗間連絡');
          break;
        case 'monthlycampaign':
          setGeneralTitle('月毎のキャンペーン');
          break;
        case 'purchaseperformanceblog':
          setGeneralTitle('買取実績ブ口グ');
          break;
        default:
          setGeneralTitle('一般');
      }
    }, [location.pathname]); // Update effect to listen for pathname changes

    const now = new Date();

    // Format the date as YYYY-MM-DD
    const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
    const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');

    // Format the time as HH:mm:ss
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' };
    const currentTime = new Intl.DateTimeFormat('ja-JP', optionsTime).format(now);

    // Combine date and time
    const currentDateTime = `${currentDay} ${currentTime}`;

    //input tag color change function================
    const [textColor, setTextColor] = useState('black');
    // Handle button click
    const handleColorChange = (color) => {
        setTextColor(color);
    };
    //==============post function=========
    // const [messages, setMessages] = useState([]);
    const [reply, setReply] = useState({
        time: currentDateTime,
        title: '',
        content: '',
        senderId: userId,
        receiverId: '',
        fileUrl: null,
        parentMessageId: null
    });

    const handleMessageChange = (e) => {
        setReply({
            ...reply,
            [e.target.name]: e.target.value,
        });
    };
    const handleContentsChange = (value) => {
        setReply({
            ...reply,
            content: value,
        });
    };

    // file upload
    const [sendFile, setSendFile] = useState(null);
    const sendInputRef = useRef(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Create a URL for the file to display as a preview
            const fileURL = URL.createObjectURL(file);
        }
        setSendFile(event.target.files[0]);
    };

    const handleButtonClick = (sendInputRef) => {
        sendInputRef.current.click();
    };

    const [messages, setMessages] = useState([]);
    //fetch message data related user
    const fetchMessages = async () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
          throw new Error('API base URL is not defined');
        }
  
        // console.log(`${wakabaBaseUrl}/customer/getCustomerList`);
        const threadName = destinationURL;
        console.log('destinationURL',threadName);
        await axios.post(`${wakabaBaseUrl}/generalchat`,{threadName:threadName})
          .then(response => {
            // console.log("all message",response.data)
            setMessages(response.data);
          })
          .catch(error => {
            console.error("There was an error fetching the customer data!", error);
          });
    };

    useEffect(() => {
 
      fetchMessages();
      // Set up polling
      // const intervalId = setInterval(() => {
      //   fetchMessages();
      // }, 1000); // Poll every 1 seconds
      // return () => clearInterval(intervalId);
    }, [destinationURL]);
    //get user data
    const [users, setUsers] = useState([]);
    useEffect(() => {
      const fetchMessages = async () => {
        const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
        if (!wakabaBaseUrl) {
          throw new Error('API base URL is not defined');
        }
        axios.get(`${wakabaBaseUrl}/user/getUserList`)
          .then(response => {
            const userData = response.data;
            const Ids = userData.map(obj => obj.id);
            const userIds = Ids.filter((id) => id !== Number(userId));
            setUsers(userIds);
          })
          .catch(error => {
            console.error("There was an error fetching the customer data!", error);
          });
      };
  
      fetchMessages();
    }, []);
    // send message and file to other user 
    const sendGeneralChatMessage = async () => {
        // console.log('sendtododata', reply,users);
        if (reply.title !== '' && reply.content !== '' && reply.senderId !== '' ) {
            const htmlContent = `<span style="color:${textColor}">${reply.title}</span>`;
            const formData = new FormData();
            formData.append('thread_name', destinationURL);
            formData.append('time', reply.time);
            formData.append('title', htmlContent);
            formData.append('content', reply.content);
            formData.append('senderId', reply.senderId);
            // formData.append('receiverId', reply.receiverId);
            formData.append('parentMessageId', reply.parentMessageId || '');
            formData.append('status', users || '');

            if (sendFile) formData.append('fileUrl', sendFile);


            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }

                await axios.post(`${wakabaBaseUrl}/generalchat/getmessagelist`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    console.log(response.data);
                    setReply({
                        time: currentDateTime,
                        title: '',
                        content: '',
                        senderId: userId,
                        receiverId: '',
                        file: null,
                        parentId: null
                    });
                    fetchMessages();
                })
                    .catch(error => {
                        console.error("There was an error fetching the customer data!", error);
                    });
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }
    };

    // Callback function to handle data from child
    const handleDataFromChildAccordion = (data1, data2, data3) => {
        setReply({ parentMessageId: data1, senderId: data2 ,time:currentDateTime})
        // console.log('Data received from child++++++++:', data1, data2, data3, userId);
    };
    // New post
    const newPost = () => {
        setReply({
            time: currentDateTime,
            title: '',
            content: '',
            senderId: userId,
            receiverId: '',
            file: null,
            parentId: null
        });
    }

    return (
        <>
            <div className=" flex flex-col items-center justify-center py-3">
                <div className="w-full">
                    <div className='w-full'>
                        {/* received message */}
                        <div className='w-full h-[400px]'>
                            <GeneralAccordion onSendIdData={handleDataFromChildAccordion} messages={messages} title = {generalTitle}/>
                        </div>
                    </div>
                    {/* new post */}
                    <div className='ml-2 mt-20 flex flex-col justify-center'>
                        < button type="button" onClick={newPost} className=" w-max px-10 py-1 font-blod rounded-lg justify-center text-[#70685a] text-[18px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                            新しい
                        </button>
                    </div>
                    <div className='mt-2'>
                        <hr className="my-1 border-[#70685a]" />
                    </div>

                    {/* operation */}
                    <div className='flex'>
                        <LabelComponent value={'新規投稿'} style={{ marginTop: '5px', width: '10%', marginRight: '15px' }} />
                        <div style={{ width: '90%', height: '50px' }} className='text-center'>
                            {/* secondline */}
                            <div className='new-post-operation-second flex !mt-2' style={{ height: '40px' }}>
                                <div className='w-full flex'>
                                    <div className='w-full flex justify-start'>
                                        <InputComponent name='title' onChange={handleMessageChange} value={reply.title || ''} style={{ height: '40px', color: textColor }} className='w-full' />
                                    </div>
                                    <div >
                                        <div style={{ width: '30%', flexDirection: 'column', }} className='flex align-center justify-around'>
                                            < button type="button" onClick={() => handleButtonClick(sendInputRef)} className="w-max ml-10 px-5 py-1 font-blod rounded-lg justify-center text-[#70685a] text-[18px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                                ファイル
                                            </button>
                                            <input type="file" name="fileUrl" ref={sendInputRef} style={{ display: 'none' }} onChange={(e) => handleFileChange(e)} />
                                            {/* {reply.fileUrl && <p>Selected Image: {reply.fileUrl}</p>} */}
                                        </div>
                                    </div>
                                </div>
                                <div className='new-post-operation-second-color mt-0.5 flex justify-end ml-10 w-max'>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-2.5'>
                                            <button type="button" onClick={() => handleColorChange('#ff0000')} className='w-6 h-6 border border-[#70685a] bg-[#ff0000]'></button>
                                            <button type="button" onClick={() => handleColorChange('#0000ff')} className='w-6 h-6 border border-[#70685a] bg-[#0000ff]'></button>
                                            <button type="button" onClick={() => handleColorChange('#ee82ee')} className='w-6 h-6 border border-[#70685a] bg-[#ee82ee]'></button>
                                            <button type="button" onClick={() => handleColorChange('#3cb371')} className='w-6 h-6 border border-[#70685a] bg-[#3cb371]'></button>
                                            <button type="button" onClick={() => handleColorChange('#ffa500')} className='w-6 h-6 border border-[#70685a] bg-[#ffa500]'></button>
                                            <button type="button" onClick={() => handleColorChange('#6a5acd')} className='w-6 h-6 border border-[#70685a] bg-[#6a5acd]'></button>
                                            <button type="button" onClick={() => handleColorChange('#3c3c3c')} className='w-6 h-6 border border-[#70685a] bg-[#3c3c3c]'></button>
                                            <button type="button" onClick={() => handleColorChange('#616161')} className='w-6 h-6 border border-[#70685a] bg-[#616161]'></button>
                                            <button type="button" onClick={() => handleColorChange('#15bbc6')} className='w-6 h-6 border border-[#70685a] bg-[#15bbc6]'></button>
                                            <button type="button" onClick={() => handleColorChange('#e0bbc6')} className='w-6 h-6 border border-[#70685a] bg-[#e0bbc6]'></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* thirdline */}
                            <div className='flex mt-2' style={{ height: '55px' }}>
                                <div style={{ width: '85%' }}>
                                    {/* <InputComponent style={{ height: '40px',color:textColor}} className="w-full" name='post_content'/> */}
                                    <div className="space-y-3">
                                        {/* <textarea name='content' value={reply.content || ''} onChange={handleMessageChange} className="py-2 px-3 block w-full text-sm border border-[#70685a] outline-[#70685a] disabled:opacity-50  " rows="2" ></textarea> */}
                                        <ReactQuill value={reply.content || ''} onChange={handleContentsChange} modules={GeneralChat.modules} formats={GeneralChat.formats} className='h-[70px]'/>
                                        {/* <CustomQuill ref={quillRef} value={reply.content} onChange={handleContentsChange} modules={GeneralChat.modules} formats={GeneralChat.formats} /> */}
                                    </div>

                                </div>
                                <div className='ml-10 flex flex-col justify-center'>
                                    < button type="button" onClick={() => sendGeneralChatMessage()} className=" w-max px-10 py-1 font-blod rounded-lg justify-center text-[#70685a] text-[18px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                                        送信
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

// Define the modules for the editor
GeneralChat.modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'], // Text decoration options
      // ['link', 'image'],
      ['clean'], // Remove formatting button
    ],
  };
  
  // Define the formats that you want to use in the editor
  GeneralChat.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
  //   'image',
  ];