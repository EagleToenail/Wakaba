
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WithdrawalVariousPurchaseAccordionItem from './WithdrawalVariousPurchaseAccordionItem';
import WithdrawalVariousPurchaseAccordionItem1 from './WithdrawalVariousPurchaseAccordionItem1';
import WithdrawalVariousPurchaseAccordionItem2 from './WithdrawalVariousPurchaseAccordionItem2';

const WithdrawalVariousPurchaseAccordion = ({ onSendIdData, onSendIdData1, onSendIdData2, messages, messages1, messages2, invoiceID, onSendIdData3, onSendIdData4,onSendIdData5,onSendIdData6 ,onSendIdData7,onSendIdData8,onSendIdData9,onSendIdData10,onSendIdData11}) => {
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
// -------------------------------------------------temp operation--------------------------------------
  const [templateChat, setTemplateChat] = useState({
    temp1: messages1[0].content,
    temp2: messages1[1].content,
    temp3: messages2[0].content,
    temp4: messages2[1].content,
  });

  useEffect(()=> {
    setTemplateChat({
      temp1: messages1[0].content,
      temp2: messages1[1].content,
      temp3: messages2[0].content,
      temp4: messages2[1].content,
    });
  },[messages1,messages1])

  const handleTemplateChange = (e) => {
    const { name, value } = e.target;
    setTemplateChat({ ...templateChat, [name]: value });
    if(name === 'temp1') {
      const id = messages1[0].id;
      const title = '今日全て売るつもり?';
      const contents = value;
      handleDataFromChild11(id,title,contents);
    }
    if(name === 'temp2') {
      const id = messages1[1].id;
      const title = '他店へ持ち込んでいる?';
      const contents = value;
      handleDataFromChild11(id,title,contents);
    }
    if(name === 'temp3' && e.key === 'Enter') {
      const id = messages2[0].id;
      const title = 'どこのお店?';
      const contents = value;
      handleDataFromChild11(id,title,contents);
    }
    if(name === 'temp4' && e.key === 'Enter') {
      const id = messages2[1].id;
      const title = '査定額は?';
      const contents = value;
      handleDataFromChild11(id,title,contents);
    }
  };

  const handleDataFromChild11 = (id,title,contentData) => {
    onSendIdData11(id,title,contentData);
  };
// -----------------------------------------------------------------------------------------------------
  return (
    <div className='h-full overflow-auto'>
      <h2 className="text-[#70685a] text-center text-2xl font-bold">様々な購入のための引き出し</h2>
      <h2 className="text-[#70685a] text-center text-2xl font-bold">メッセージ</h2>
      {/* -------default message-------- */}
      <div className='flex w-[350px] justify-between'>
        <div className='w-max flex flex-col justify-center'>
            <label className='text-[black] text-[18px]'>1. 今日全て売るつもり?</label>
        </div>
        <select name='temp1' value={templateChat.temp1 || ''} onChange={handleTemplateChange} className="w-[100px] h-8 ml-3 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
            <option value=""></option>
            <option value="はい">はい</option>
            <option value="いいえ">いいえ</option>
        </select>
      </div>
      <div className='flex mt-4 w-[350px] justify-between'>
        <div className='w-max flex flex-col justify-center'>
            <label className='text-[black] text-[18px]'>2. 他店へ持ち込んでいる?</label>
        </div>
        <select name='temp2' value={templateChat.temp2 || ''} onChange={handleTemplateChange} className="w-[100px] h-8 ml-3 text-[#70685a] font-bold border border-[#70685a] px-4 py-1 outline-[#70685a]">
            <option value=""></option>
            <option value="はい">はい</option>
            <option value="いいえ">いいえ</option>
        </select>
      </div>
      <div className='flex mt-2 w-[350px] justify-between'>
        <div className='w-max flex flex-col justify-center'>
            <label className='text-[black] text-[18px]'>3. どこのお店?</label>
        </div>
        <input name='temp3' value={templateChat.temp3 || ''} onChange={handleTemplateChange} onKeyDown={handleTemplateChange} className="w-40 ml-3 mt-2 text-[#70685a] block text-left py-1 !h-10" placeholder={''} />
      </div>
      <div className='flex mt-2 w-[350px] justify-between'>
        <div className='w-max flex flex-col justify-center'>
            <label className='text-[black] text-[18px]'>4. 査定額は?</label>
        </div>
        <input name='temp4' value={templateChat.temp4 || ''} onChange={handleTemplateChange} onKeyDown={handleTemplateChange} className="w-40 ml-3 mt-2 text-[#70685a] block text-left py-1 !h-10" placeholder={''} />
      </div>
      {/* ------------------------------ */}
      <div style={{display:'none'}}>
        {renderMessages(messages1, WithdrawalVariousPurchaseAccordionItem1)}
        {renderMessages(messages2, WithdrawalVariousPurchaseAccordionItem2)}
      </div>
      {renderMessages(messages, WithdrawalVariousPurchaseAccordionItem)}
    </div>
  );
};

export default WithdrawalVariousPurchaseAccordion;


