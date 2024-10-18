
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WithdrawalVariousPurchaseAccordionItem from './WithdrawalVariousPurchaseAccordionItem';
import WithdrawalVariousPurchaseAccordionItem1 from './WithdrawalVariousPurchaseAccordionItem1';
import WithdrawalVariousPurchaseAccordionItem2 from './WithdrawalVariousPurchaseAccordionItem2';

const WithdrawalVariousPurchaseAccordion = ({ onSendIdData, onSendIdData1, onSendIdData2, messages, messages1, messages2, invoiceID, onSendIdData3, onSendIdData4,onSendIdData5,onSendIdData6 ,onSendIdData7,onSendIdData8,onSendIdData9,onSendIdData10}) => {
  const userStoreName = localStorage.getItem('storename');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchStoreSupervisor = async () => {
      const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
      if (!wakabaBaseUrl) {
        throw new Error('API base URL is not defined');
      }

      try {
        const response = await axios.post(`${wakabaBaseUrl}/user/getSuperVisorList`, { storeName: userStoreName });
        setUsers(response.data);
      } catch (error) {
        console.error("There was an error fetching the customer data!", error);
      }
    };

    fetchStoreSupervisor();
  }, [userStoreName]);

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

  const handleDataFromChild3 = (data, question) => {
    onSendIdData3(data, question);
  };

  const handleDataFromChild4 = (data, question) => {
    onSendIdData4(data, question);
  };
  const handleDataFromChild5 = (id) => {
    onSendIdData5(id);
  };
  const handleDataFromChild6 = (id) => {
    onSendIdData6(id);
  };
  const handleDataFromChild7 = (id,contentData) => {
    onSendIdData7(id,contentData);
  };
  const handleDataFromChild8 = (id,contentData) => {
    onSendIdData8(id,contentData);
  };
  const handleDataFromChild9 = (id) => {
    onSendIdData9(id);
  };
  const handleDataFromChild10 = (id,contentData) => {
    onSendIdData10(id,contentData);
  };

  const renderMessages = (messages, Component) => {
    if (!messages || messages.length === 0) return null; // Check for empty messages

    return messages.map(message => (
      <Component
        key={message.id || message.question_id} // Ensure unique keys
        messageNumber={message.id}
        messageId={message.question_id}
        time={message.time}
        title={message.title || 'Message'}
        content={message.content}
        sender={message.senderId}
        receiver={message.receiverId}
        parentMessageId={message.parentMessageId}
        permission={message.permission}
        complete={message.complete}
        onSendData={handleDataFromChild}
        onSendData1={handleDataFromChild1}
        onSendData2={handleDataFromChild2}
        onSendData3={handleDataFromChild3}
        onSendData4={handleDataFromChild4}
        onSendData5={handleDataFromChild5}
        onSendData6={handleDataFromChild6}
        onSendData7={handleDataFromChild7}
        onSendData8={handleDataFromChild8}
        onSendData9={handleDataFromChild9}
        onSendData10={handleDataFromChild10}
        users={users}
        invoiceID={invoiceID}
      >
        {message.replies && message.replies.length > 0 && renderMessages(message.replies, Component)}
      </Component>
    ));
  };

  return (
    <div className='h-full overflow-auto'>
      <h2 className="text-[#70685a] text-center text-2xl font-bold">様々な購入のための引き出し</h2>
      <h2 className="text-[#70685a] text-center text-2xl font-bold">メッセージ</h2>
      {renderMessages(messages1, WithdrawalVariousPurchaseAccordionItem1)}
      {renderMessages(messages2, WithdrawalVariousPurchaseAccordionItem2)}
      {renderMessages(messages, WithdrawalVariousPurchaseAccordionItem)}
    </div>
  );
};

export default WithdrawalVariousPurchaseAccordion;


