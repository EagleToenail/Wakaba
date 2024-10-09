
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or use fetch
import WithdrawalVariousPurchaseAccordionItem from './WithdrawalVariousPurchaseAccordionItem';

const WithdrawalVariousPurchaseAccordion = ({ onSendIdData,onSendIdData1,onSendIdData2,messages}) => {

  const userStoreName = localStorage.getItem('storename');

  const [users, setUsers] = useState([]);
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
            })
            .catch(error => {
                console.error("There was an error fetching the customer data!", error);
            });
    }
    fetchStoreSuperViosr();

}, []);

  const handleDataFromChild = (data1, data2, data3) => {
    onSendIdData(data1, data2, data3);
    console.log('Data received from child:', data1, data2, data3);
  };
  const handleDataFromChild1 = (data) => {
    onSendIdData1(data);
  };
  const handleDataFromChild2 = (data) => {
    onSendIdData2(data);
  };

  const renderMessages = (messages) => {
    return messages.map(message => (
      <WithdrawalVariousPurchaseAccordionItem
        key={message.id}
        messageId={message.id}
        time={message.time}
        title={message.title || 'Message'}
        content={message.content}
        fileUrl={message.fileUrl}
        sender={message.senderId}
        receiver={message.receiverId}
        parentMessageId={message.parentMessageId}
        permission={message.permission}
        complete={message.complete}
        onSendData={handleDataFromChild}
        onSendData1={handleDataFromChild1}
        onSendData2={handleDataFromChild2}
        users={users}
      >
        {message.replies && message.replies.length > 0 && renderMessages(message.replies)}
      </WithdrawalVariousPurchaseAccordionItem>
    ));
  };

  return (
    <div className='h-full overflow-auto'>
      <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">様々な購入のための引き出し</h2>
      <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">メッセージ</h2>
      {renderMessages(messages)}
    </div>
  );
};

export default WithdrawalVariousPurchaseAccordion;

