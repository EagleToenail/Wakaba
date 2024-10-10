
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or use fetch
import GeneralAccordionItem from './GeneralAccordionItem';

const GeneralAccordion = ({ onSendIdData ,messages,title}) => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    // console.log(messages, "message contents")
    const fetchMessages = async () => {
      const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
      if (!wakabaBaseUrl) {
        throw new Error('API base URL is not defined');
      }
      axios.get(`${wakabaBaseUrl}/user/getUserList`)
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the customer data!", error);
        });
    };

    fetchMessages();
  }, []);

  const handleDataFromChild = (data1, data2, data3) => {
    onSendIdData(data1, data2, data3);
    console.log('Data received from child:', data1, data2, data3);
  };

  const renderMessages = (messages) => {
    return messages.map(message => (
      <GeneralAccordionItem
        key={message.id}
        messageId = {message.id}
        time={message.time}
        title={message.title || 'Message'}
        content={message.content}
        fileUrl={message.fileUrl}
        sender={message.senderId}
        receiver={message.receiverId}
        parentMessageId={message.parentMessageId}
        onSendData={handleDataFromChild}
        users={users}
      >
        {message.replies && message.replies.length > 0 && renderMessages(message.replies)}
      </GeneralAccordionItem>
    ));
  };

  return (
    <div className='h-full overflow-auto'>
      <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">{title}&nbsp;メッセージ</h2>
      {renderMessages(messages)}
    </div>
  );
};

export default GeneralAccordion;

