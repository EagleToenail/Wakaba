
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // or use fetch
import {jwtDecode} from 'jwt-decode';

const GeneralAccordionItem = ({ messageId, time, title, content, fileUrl, sender, receiver, children, parentMessageId, onSendData, users }) => {

  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.userId;

  const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
  const [isOpen, setIsOpen] = useState(false);

  // const [receivedTime, setReceivedTime] = useState('');
  const [senderName, setSenderName] = useState('');
//   const [receiverName, setReceiverName] = useState('');


  //fetch message data related user
  useEffect(() => {
    users.forEach(user => {
      if (user.id === parseInt(sender)) {
        setSenderName(user.username); // Assuming 'username' is a property in the message object
      }
    });
  }, [users, sender]);


  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
    if (!wakabaBaseUrl) {
      throw new Error('API base URL is not defined');
    }
    axios.post(`${wakabaBaseUrl}/generalchat/removealert`, {userId:userId,messageId:messageId})
      .then(response => {
        console.log(response.data)
    })
    .catch(error => {
      console.error("There was an error fetching the customer data!", error);
    });
  };

  const isImageFile = (filename) => {
    return filename.toLowerCase().endsWith('.png') || filename.toLowerCase().endsWith('.jpg') || filename.toLowerCase().endsWith('.jpeg');
  };

  //send message inforamation to parent 
  const handleSubmit = (Index1, Index2, Index3) => {
    onSendData(Index1, Index2, Index3);
  };

  return (
    <div style={{ margin: '10px 0' ,width:'99%'}}>
      <button onClick={toggleAccordion} style={styles.button}>
        <div className='new-post-receive w-full flex h-13'>
          <div className='new-post-receive-message flex' style={{ width: '90%' }}>
            <div className='flex'>
              <div>
                <div className='w-30'>
                  <label className="text-[black] font-bold block text-center">{time}</label>
                </div>
                <div className='border border-[#70685a] w-30'>
                  <label className="text-[#70685a] font-bold block text-center">ステー夕ス表示</label>
                </div>
              </div>
              {/* <div className='text-[black] text-[18px] ml-5'>
                {title}
              </div> */}
              <div className="text-[black] text-[18px] ml-5" dangerouslySetInnerHTML={{ __html: title }} />
            </div>
          </div>
          <div className='new-post-receive-name flex justify-start ' style={{ width: '10%' }}>
            {/* <div className='flex'>
              <div className='w-7 h-7 rounded-full border border-[#70685a]'></div>
              <div>
                <label className="text-[black] pl-3 block text-center">{receiverName || ''}</label>
              </div>
            </div> */}
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
                <div>
                  {/* <label className="w-full text-[black] pl-3 text-[15px] block text-left">
                    {content}
                  </label> */}
                  <div className="w-full text-[black] pl-3 text-left" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>

            </div>
            <div style={{ width: '20%' }}>
              {/* btn */}
              {/* <div className='mt-5 flex justify-center'>
                < button type="button" style={{visibility:'hidden'}} onClick={toggleAccordion} className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#9bd194] hover:bg-blue-700 focus:outline-none">
                  完了
                </button>
              </div> */}
              {/* btn */}
              <div className='mt-5 flex justify-center'>
                < button onClick={() => handleSubmit(parentMessageId, sender, receiver)} type="button" className="w-20 px-3 py-0.5 font-semiblod rounded-lg justify-center text-[#70685a] text-[15px] bg-[#ebe6e0] hover:bg-blue-700 focus:outline-none">
                  返信
                </button>
              </div>
            </div>
          </div>
          {/* <p>{content}</p> */}
          {fileUrl && isImageFile(fileUrl) ? (<div className='w-full h-[150px] flex justify-center' >
            <div>
              <img src={`${wakabaBaseUrl}/uploads/generalchat/${fileUrl}`} alt="Uploaded" style={styles.imagePreview} />
              <a href={`${wakabaBaseUrl}/uploads/generalchat/${fileUrl}`} target="_blank">
                  Open in Brosewer 
              </a>
            </div>
          </div>
          ) : (<div className='w-full h-10 flex justify-center'>
            <a href={`${wakabaBaseUrl}/uploads/generalchat/${fileUrl}`} download={fileUrl} target="_blank" rel="noopener noreferrer">
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

export default GeneralAccordionItem;
