
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';

const WithdrawalVariousPurchaseAccordionItem2 = ({messageNumber, messageId,time, title, content, sender, receiver, users ,onSendData4 ,onSendData6,onSendData8}) => {
  
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;

  const now = new Date();
  const optionsDate = { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Tokyo' };
  const currentDay = new Intl.DateTimeFormat('ja-JP', optionsDate).format(now).replace(/\//g, '-');
  const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Asia/Tokyo' };
  const currentTime = new Intl.DateTimeFormat('ja-JP', optionsTime).format(now);
  const currentDateTime = `${currentDay} ${currentTime}`;

  // const [receivedTime, setReceivedTime] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');

  useEffect(() => {
    users.forEach(user => {
      if (user.id === parseInt(sender)) {
        setSenderName(user.username);
      }
      if (user.id === parseInt(receiver)) {
        setReceiverName(user.username);
      }
    });
  }, [users, sender, receiver]);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const [content1, setContent1] = useState(content);
  const [content2, setContent2] = useState(content);

  //send message inforamation to parent 
  const handleSubmit1 = () => {
    if(messageId === '1') {
      const questions2 = 'どこのお店?';
      onSendData4(content1,questions2);
    }
    if(messageId === '2') {
      const questions2 = '査定額は?';
      onSendData4(content2,questions2);
    }
  };
  const handleSubmit2 = () => {
    if(messageId === '1' && messageNumber) {
      onSendData8(messageNumber,content1);
    }
    if(messageId === '2' && messageNumber) {
      onSendData8(messageNumber,content2);
    }
  };

  const deleteMessage = () => {
    if (messageId === '1') {
      onSendData6(messageNumber);
    }
    if (messageId === '2') {
      onSendData6(messageNumber);
    }
  }
//---------edit--------
const [isEditing, setIsEditing] = useState(content); // true if content is false

const handleEdit = () => {
  setIsEditing(prev => !prev);
};

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
                  {userId === sender && 
                    < button type="button" onClick={handleEdit} className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                      編集
                    </button>
                  } 
                  {userId === sender &&  
                    < button type="button" onClick={deleteMessage} className="w-20 mt-2 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                      削除
                    </button>
                  }
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
                  <label className="text-[black] ml-10 text-[20px] font-semibold block text-left w-full">
                    {content}
                  </label>
                    <div className="ml-10 w-full flex gap-10">
                        {messageId === '1' && !isEditing && 
                          <textarea
                            name='content1'
                            className="py-2 px-3 block w-full text-sm border border-[#70685a] outline-[#70685a] disabled:opacity-50"
                            rows="2"
                            value={content1}
                            onChange={(e) => setContent1(e.target.value)}
                            required
                          ></textarea>
                      }
                      {messageId === '2'&& !isEditing && 
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
                {isEditing ?
                  < button onClick={() => handleSubmit1()} type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                    送る
                  </button>:
                  < button onClick={() => handleSubmit2()} type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                    更新
                  </button>
                }
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
