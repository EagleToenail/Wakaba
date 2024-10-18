
import React, { useState, useEffect } from 'react';

const WithdrawalVariousPurchaseAccordionItem = ({ messageNumber,time, title, content, fileUrl, sender, receiver, children,complete,permission, onSendData, users,onSendData9,onSendData10 }) => {
  const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  const userId = localStorage.getItem('userId');

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

  const isImageFile = (filename) => {
    return filename.toLowerCase().endsWith('.png') || filename.toLowerCase().endsWith('.jpg') || filename.toLowerCase().endsWith('.jpeg');
  };

  //send message inforamation to parent 
  const handleSubmit = (Index1, Index2, Index3) => {
    onSendData(Index1, Index2, Index3);
  };

  const deleteMessage = () => {
      onSendData10(messageNumber);
  }

  const [content1, setContent1] = useState(content);
  const [isEditing, setIsEditing] = useState(true); // true if content is false

const handleEdit = () => {
  setIsEditing(!isEditing);
};

const handleSubmit2 = () => {
    onSendData10(messageNumber,content1);
    setIsEditing(!isEditing);
};

  return (
    <div style={{ margin: '10px 0' ,width:'99%'}}>
      <button onClick={toggleAccordion} className ='w-full p-[10px] text-left cursor-pointer rounded-sm' 
                 style={{ border: permission === '1' ? '1px solid #ccc' : 'none',
                  background: permission === '1' ? '#f9f9f9' : 'transparent',
           }}>
        <div className='new-post-receive w-full flex h-13'>
          <div className='new-post-receive-message flex' style={{ width: '75%' }}>
            <div className='flex'>
              <div>
                <div className='w-30'>
                  <label className="text-[black] font-bold block text-center">{time}</label>
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
                    {userId === sender && 
                      <div>
                        < button type="button" onClick={handleEdit} className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                          編集
                        </button>
                      </div>}
                     {userId === sender && 
                      <div className='mt-2'>
                        < button type="button" onClick={deleteMessage} className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                          削除
                        </button>
                      </div>
                      }
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
                        {!isEditing && 
                          <textarea
                            name='content1'
                            className="py-2 px-3 block w-full text-sm border border-[#70685a] outline-[#70685a] disabled:opacity-50"
                            rows="2"
                            value={content1}
                            onChange={(e) => setContent1(e.target.value)}
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
                complete !== '1' ?
                  < button onClick={() => handleSubmit(messageNumber, sender, receiver)} type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                    返信
                  </button>:
                    < button type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                      返信
                    </button>
                  :
                <button onClick={handleSubmit2} type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                  更新
                </button>
                }
              </div>
            </div>
          </div>
          {/* <p>{content}</p> */}
          {fileUrl && isImageFile(fileUrl) ? (<div className='w-full h-[150px] flex justify-center' >
            <div>
              <img src={`${wakabaBaseUrl}/uploads/withdrawalvariouspurchase/${fileUrl}`} alt="Uploaded" style={styles.imagePreview} />
              <a href={`${wakabaBaseUrl}/uploads/withdrawalvariouspurchase/${fileUrl}`} target="_blank">
                  Open in Brosewer 
              </a>
            </div>
          </div>
          ) : (<div className='w-full h-10 flex justify-center'>
            <a href={`${wakabaBaseUrl}/uploads/withdrawalvariouspurchase/${fileUrl}`} download={fileUrl} target="_blank" rel="noopener noreferrer">
              {fileUrl}
            </a>
          </div>
          )}
          <div className='ml-10'>
            {children}
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

export default WithdrawalVariousPurchaseAccordionItem;
