
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // or use fetch

const WithdrawalVariousPurchaseAccordionItem2 = ({ messageId,time, title, content, sender, receiver, users,invoiceID }) => {
  const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  const userId = localStorage.getItem('userId');
  
  const now = new Date();
  const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
  const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');
  const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' };
  const currentTime = new Intl.DateTimeFormat('ja-JP', optionsTime).format(now);
  const currentDateTime = `${currentDay} ${currentTime}`;

  const [isOpen, setIsOpen] = useState(false);

  // const [receivedTime, setReceivedTime] = useState('');
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');

  //fetch message data related user
  useEffect(() => {
    users.forEach(user => {
        console.log('sender',sender)
      if (user.id === parseInt(sender)) {
        setSenderName(user.username); // Assuming 'username' is a property in the message object
        // console.log('SenderName')
      }
      if (user.id === parseInt(receiver)) {
        setReceiverName(user.username); // Assuming 'username' is a property in the message object
        // console.log('ReceiverName')
      }
    });
  }, []);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [content1, setContent1] = useState(content);
  const [content2, setContent2] = useState(content);

  //send message inforamation to parent 
  const handleSubmit = () => {
    if(messageId === '1') {
      const invoiceid = invoiceID;
      const time = currentDateTime;
      const templateTitle = title;
      const invoicecontent = content;
      const senderId = userId;
      
      console.log('result data',invoiceid,time,templateTitle,invoicecontent,senderId);
      const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
      if (!wakabaBaseUrl) {
          throw new Error('API base URL is not defined');
      }

      axios.post(`${wakabaBaseUrl}/withdrawalvariouspurchasemessages/create`,{invoiceid:invoiceid,time:time,templateTitle:templateTitle,content:invoicecontent,senderId:senderId})
          .then(response => {
              const data = response.data;
          })
          .catch(error => {
              console.error("There was an error fetching the customer data!", error);
          });
    }
    if(messageId === '2') {
      const invoiceid = invoiceID;
      const time = currentDateTime;
      const templateTitle = title;
      const invoicecontent = content;
      const senderId = userId;
      
      console.log('result data',invoiceid,time,templateTitle,invoicecontent,senderId);
      const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
      if (!wakabaBaseUrl) {
          throw new Error('API base URL is not defined');
      }

      axios.post(`${wakabaBaseUrl}/withdrawalvariouspurchasemessages/create`,{invoiceid:invoiceid,time:time,templateTitle:templateTitle,content:invoicecontent,senderId:senderId})
          .then(response => {
              const data = response.data;
          })
          .catch(error => {
              console.error("There was an error fetching the customer data!", error);
          });
    }
  };

  //-------------------textarea-----

  return (
    <div style={{ margin: '10px 0' ,width:'99%'}}>
      <button onClick={toggleAccordion} className ='w-full p-[10px] text-left cursor-pointer rounded-sm' 
                 style={{ border: '1px solid #ccc', background:'#f9f9f9'}}>
        <div className='new-post-receive w-full flex h-13'>
          <div className='new-post-receive-message flex' style={{ width: '75%' }}>
            <div className='flex'>
              <div>
                <div className='w-30'>
                  <label className="text-[black] font-bold block text-center">{time || currentDateTime}</label>
                </div>
                <div className='border border-[#70685a] w-30'>
                  <label className="text-[#70685a] font-bold block text-center">ステー夕ス表示</label>
                </div>
              </div>
              <div className='text-[black] text-[18px] ml-5'>
                {title}
              </div>
            </div>
          </div>
          <div className='new-post-receive-name flex justify-between ' style={{ width: '25%' }}>
            <div className='flex'>
              <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
              <div>
                <label className="text-[black] pl-3 block text-center">{receiverName || ''}</label>
              </div>
            </div>
            <div className='flex'>
              <div className='w-7 h-7 rounded-full border border-[#70685a] bg-[#70685a]'></div>
              <div>
                <label className="text-[black] pl-3 block text-center">{senderName || ''}</label>
              </div>
            </div>
          </div>
        </div>
      </button>
      {isOpen && (
        <div style={styles.content}>
          <div className='flex w-full' style={{ marginLeft: '20px' }}>
            <div style={{ width: '80%' }}>
              <div className='flex mt-5 mb-5'>
                {/* rect btn */}
                <div>
                  <div>
                    < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                      編集
                    </button>
                  </div>
                  {/* rect-btn-gurope 8 */}
                  <div className='flex mt-2'>
                    <div className='mr-1'>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#ff0000]'></button>
                      </div>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#0000ff]'></button>
                      </div>
                    </div>
                    <div className='mr-1'>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#ee82ee]'></button>
                      </div>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#3cb371]'></button>
                      </div>
                    </div>
                    <div className='mr-1'>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#ffa500]'></button>
                      </div>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#6a5acd]'></button>
                      </div>
                    </div>
                    <div className='mr-1'>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#3c3c3c]'></button>
                      </div>
                      <div>
                        <button type="button" className='w-5 h-5 border border-[#70685a] bg-[#616161]'></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full'>
                  <label className="text-[black] ml-10 text-[15px] block text-left w-full">
                    {content}
                  </label>
                    <div className="ml-10 w-full flex gap-10">
                        {messageId === '1' && 
                          <textarea
                            name='content1'
                            className="py-2 px-3 block w-full text-sm border border-[#70685a] outline-[#70685a] disabled:opacity-50"
                            rows="2"
                            value={content1}
                            onChange={(e) => setContent1(e.target.value)}
                            required
                          ></textarea>
                      }
                      {messageId === '2' && 
                        <textarea
                          name='content2'
                          className="py-2 px-3 block w-full text-sm border border-[#70685a] outline-[#70685a] disabled:opacity-50"
                          rows="2"
                          value={content2}
                          onChange={(e) => setContent2(e.target.value)}
                          required
                        ></textarea>
                      }
                    </div>
                </div>
              </div>

            </div>
            <div style={{ width: '20%' }}>
              {/* btn */}
              {/* <div className='mt-5 flex justify-center'>
                < button type="button" onClick={toggleAccordion} className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                  完了
                </button>
              </div> */}
              {/* btn */}
              <div className='mt-5 flex justify-center'>
                  < button onClick={() => handleSubmit()} type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                    送る
                  </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    width: '100%',
    padding: '10px',
    textAlign: 'left',
    // border: '1px solid #ccc',
    // background: '#f9f9f9',
    background: 'transparent',
    cursor: 'pointer',
    borderRadius: '4px',
  },
  content: {
    padding: '10px',
    // border: '1px solid #ccc',
    borderTop: 'none',
    // background: '#fafafa',
    background: 'transparent',
  },
  imagePreview: {
    marginTop: '10px',
    maxWidth: '100%',
    maxHeight: '150px',
  },
};

export default WithdrawalVariousPurchaseAccordionItem2;
