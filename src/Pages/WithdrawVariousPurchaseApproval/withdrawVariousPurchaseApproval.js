import React, { useState, useEffect, useRef } from 'react'
import InputComponent from '../../Components/Common/InputComponent';
import LabelComponent from '../../Components/Common/LabelComponent';
import WithdrawVariousPurchaseApprovalAccordion from '../../Components/WithdrawVariousPurchaseApprovalAccordion';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export default function WithdrawVariousPurchaseApproval() {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    const userStoreName = decodedToken.storename;

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
    // const [textMessageColor, setTextMessageColor] = useState('black');
    // Handle button click
    // const handleMessageColorChange = (color) => {
    //     setTextMessageColor(color);
    // };
    // search selectbox================

    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    // const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [filteredOptions, setFilteredOptions] = useState([]);
    const dropdownRef = useRef(null);
    // Fetch user data(supervisor of this shop)
    useEffect(() => {
        const fetchStoreSuperViosr = () => {
            const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
            if (!wakabaBaseUrl) {
                throw new Error('API base URL is not defined');
            }
    
            axios.post(`${wakabaBaseUrl}/user/getSuperVisorList`,{storeName:userStoreName})
                .then(response => {
                    const data = response.data;
                    setUsers(data);
                    setFilteredOptions(data);
                })
                .catch(error => {
                    console.error("There was an error fetching the customer data!", error);
                });
        }
        fetchStoreSuperViosr();

    }, [userStoreName]);
    // Filter the options based on the query
    useEffect(() => {
        setFilteredOptions(
            users.filter(user =>
                user.username.toLowerCase().includes(query.toLowerCase())
            )
        );
    }, [query, users]);
    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (event) => {
        setQuery(event.target.value);
        setIsOpen(true);
    };

    const handleOptionClick = (user) => {
        setQuery(user.username); // Set the input field's value to the selected option's full_name
        setIsOpen(false);
        // setSelectedCustomerId(user.id); // Update state with the selected customer's ID
        setReply({ receiverId: user.id, senderId: userId, time: currentDateTime });
        // console.log('Selected Customer ID:', user.id);
    };

    //==============post function=========
    const [reply, setReply] = useState({
        time: currentDateTime,
        title: '',
        content: '',
        senderId: '',
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

    // file upload
    const [sendFile, setSendFile] = useState(null);
    const sendInputRef = useRef(null);
    const handleFileChange = (event) => {
        // const file = event.target.files[0];
        // if (file) {
        //     // Create a URL for the file to display as a preview
        //     const fileURL = URL.createObjectURL(file);
        // }
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
  
        const userId = localStorage.getItem('userId');
        axios.post(`${wakabaBaseUrl}/withdrawalvariouspurchaseapprovalmessages`,{userId:userId})
          .then(response => {
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
  
      // // Clean up on unmount
      // return () => clearInterval(intervalId);
    }, []);
    
    // send message and file to other user 
    const sendWithdrawalVariousPurchaseMessage = async () => {
        // console.log('sendtododata', reply);
        if (reply.title !== '' && reply.content !== '' && reply.senderId !== '' && reply.receiverId !== '') {
            const formData = new FormData();
            if(messages?.length>0) {
                if(reply.parentMessageId !== '' && messages[0].permission === '1') {
                    formData.append('permission', '1');
                    formData.append('read', '0');
                } else {
                    formData.append('permission', '0');
                    formData.append('read', '0');
                }
            }
            formData.append('invoice_id', Date.now());
            formData.append('store_name', userStoreName);
            formData.append('time', reply.time);
            formData.append('title', reply.title);
            formData.append('content', reply.content);
            formData.append('senderId', reply.senderId);
            formData.append('receiverId', reply.receiverId);
            formData.append('parentMessageId', reply.parentMessageId || '');

            if (sendFile) formData.append('fileUrl', sendFile);


            try {
                const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;

                if (!wakabaBaseUrl) {
                    throw new Error('API base URL is not defined');
                }

                await axios.post(`${wakabaBaseUrl}/withdrawalvariouspurchasemessages/getmessagelist`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then(response => {
                    // console.log('get data',response.data)
                    fetchMessages();
                    setQuery('');
                    setReply({
                        time: currentDateTime,
                        title: '',
                        content: '',
                        senderId: '',
                        receiverId: '',
                        file: null,
                        parentId: null
                    });
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
        const userId = localStorage.getItem('userId');
        if (data3 === userId) {
            users.forEach(user => {
                if (user.id === parseInt(data2)) {
                    setQuery(user.username); // Assuming 'username' is a property in the message object
                    // console.log('ReceiverName')
                }
            });
        } else {
            users.forEach(user => {
                if (user.id === parseInt(data3)) {
                    setQuery(user.username); // Assuming 'username' is a property in the message object
                    // console.log('ReceiverName')
                }
            });
        }

        setReply({ parentMessageId: data1, senderId: data2, receiverId: data3 ,time:currentDateTime})
        console.log('Data received from child++++++++:', data1, data2, data3, userId);
    };
    const handleDataFromChildAccordion1 = (data) => {
        fetchMessages();
        console.log('received data from permission',data)
    };
    const handleDataFromChildAccordion2 = (data) => {
        fetchMessages();
        console.log('received data from complete',data)
    };
    // New post
    const newPost = () => {
        setQuery('');
        setReply({
            time: currentDateTime,
            title: '',
            content: '',
            senderId: '',
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
                            <WithdrawVariousPurchaseApprovalAccordion onSendIdData={handleDataFromChildAccordion}
                                onSendIdData1={handleDataFromChildAccordion1} onSendIdData2={handleDataFromChildAccordion2}
                                messages={messages}/>
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
                            {/* firstline */}
                            <div className='withdrawal-various-purchase w-full flex justify-between'>
                                <div style={{ position: 'relative'}} className='mt-3 w-[250px]' ref={dropdownRef}>
                                    <input
                                        type="text"
                                        placeholder=""
                                        className='border border-[#70685a] outline-[#70685a]'
                                        value={query || ''}
                                        onChange={handleInputChange}
                                        onClick={() => setIsOpen(!isOpen)}
                                        style={{ padding: '10px', width: '100%', boxSizing: 'border-box' }}
                                    />
                                    {isOpen && (
                                        <ul style={{
                                            marginTop: '5px',
                                            padding: '0',
                                            listStyleType: 'none',
                                            border: '1px solid #ddd',
                                            borderRadius: '4px',
                                            maxHeight: '200px',
                                            overflowY: 'auto',
                                            position: 'absolute',
                                            backgroundColor: 'white',
                                            width: '100%',
                                            zIndex: 1
                                        }}>
                                            {filteredOptions.length > 0 ? (
                                                filteredOptions.map((user) => (
                                                    <li
                                                        key={user.id}
                                                        onClick={() => handleOptionClick(user)}
                                                        style={{
                                                            padding: '10px',
                                                            cursor: 'pointer',
                                                            backgroundColor: '#fff'
                                                        }}
                                                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f1f1f1'}
                                                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                                                    >
                                                        {user.username}
                                                    </li>
                                                ))
                                            ) : (
                                                <li style={{ padding: '10px' }}>No results found.</li>
                                            )}
                                        </ul>
                                    )}
                                </div>
                                <div className='flex justify-end mr-10 ml-10 mt-3'>
                                    <LabelComponent value={'様'} style={{ marginTop: '5px', marginLeft: '15px' }} />
                                    <InputComponent style={{ height: '40px' }} className='w-[150px]' />
                                </div>
                                <div className='flex justify-end mt-3'>
                                    <LabelComponent value={'総額'} style={{ marginTop: '5px', marginLeft: '15px' }} />
                                    <InputComponent style={{ height: '40px' }} className='w-40' />
                                    <LabelComponent value={'円'} style={{ marginTop: '5px', marginLeft: '15px' }} />
                                </div>
                            </div>
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
                                        <textarea name='content' value={reply.content || ''} onChange={handleMessageChange} className="py-2 px-3 block w-full text-sm border border-[#70685a] outline-[#70685a] disabled:opacity-50  " rows="2" ></textarea>
                                    </div>

                                </div>
                                <div className='ml-10 flex flex-col justify-center'>
                                    < button type="button" onClick={() => sendWithdrawalVariousPurchaseMessage()} className=" w-max px-10 py-1 font-blod rounded-lg justify-center text-[#70685a] text-[18px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
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


