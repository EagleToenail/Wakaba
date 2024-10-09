
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or use fetch
import WithdrawalBankATMAccordionItem from './WithdrawalBankATMAccordionItem';

const WithdrawalBankATMAccordion = ({ onSendIdData,onSendIdData1,onSendIdData2,messages}) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log(messages, "message contents")
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
  const handleDataFromChild1 = (data) => {
    onSendIdData1(data);
  };
  const handleDataFromChild2 = (data) => {
    onSendIdData2(data);
  };
  const renderMessages = (messages) => {
    return messages.map(message => (
      <WithdrawalBankATMAccordionItem
        key={message.id}
        messageId={message.id}
        time={message.time}
        title={message.title || 'Message'}
        content={message.content}
        fileUrl={message.fileUrl}
        sender={message.senderId}
        receiver={message.receiverId}
        parentMessageId={message.parentMessageId}
        onSendData={handleDataFromChild}
        onSendData1={handleDataFromChild1}
        onSendData2={handleDataFromChild2}
        users={users}
      >
        {message.replies && message.replies.length > 0 && renderMessages(message.replies)}
      </WithdrawalBankATMAccordionItem>
    ));
  };

  return (
    <div className='h-full overflow-auto'>
      <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">銀行のATMから引き出す</h2>
      <h2 className="text-[#70685a] text-center text-2xl font-bold flex justify-center !mt-0">メッセージ</h2>
      {renderMessages(messages)}
    </div>
  );
};

export default WithdrawalBankATMAccordion;

