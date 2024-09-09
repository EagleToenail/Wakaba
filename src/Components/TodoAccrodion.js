
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // or use fetch
import TodoAccordionItem from './TodoAccordionItem';

  const TodoMessageAccordion = ({onSendIdData}) => {
    const [messages, setMessages] = useState([]);
  
    //fetch message data related user
    useEffect(() => {
      const fetchMessages = async () => {
          const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
          if (!wakabaBaseUrl) {
              throw new Error('API base URL is not defined');
          }

          // console.log(`${wakabaBaseUrl}/customer/getCustomerList`);
          const userId = localStorage.getItem('userId');
          axios.get(`${wakabaBaseUrl}/todomessages/${userId}`)
          .then(response => {
              // console.log("all message",response.data)
              setMessages(response.data);
          })
          .catch(error => {
              console.error("There was an error fetching the customer data!", error);
          });
      };

      fetchMessages();
            // Set up polling
            const intervalId = setInterval(() => {
                fetchMessages();
            }, 500); // Poll every 1 seconds
        
            // Clean up on unmount
            return () => clearInterval(intervalId);
  }, []);
  
  const [childData1, setChildData1] = useState(null);
  const [childData2, setChildData2] = useState(null);
  const [childData3, setChildData3] = useState(null);
  const handleDataFromChild = (data1,data2,data3) => {
    setChildData1(data1);
    setChildData2(data2);
    setChildData3(data3);
    onSendIdData(data1,data2,data3);
    console.log('Data received from child:', data1,data2,data3);
  }; 

    const renderMessages = (messages) => {
      return messages.map(message => (
        <TodoAccordionItem
          key={message.id}
          time={message.time}
          title={message.title || 'Message'}
          content={message.content}
          fileUrl={message.fileUrl}
          sender={message.senderId}
          receiver={message.receiverId}
          parentMessageId={message.parentMessageId}
          onSendData={handleDataFromChild}
        >
          {message.replies && message.replies.length > 0 && renderMessages(message.replies)}
        </TodoAccordionItem>
      ));
    };
  
    return (
      <div>
        <h2>Messages</h2>
        {renderMessages(messages)}
      </div>
    );
  };

export default TodoMessageAccordion;

