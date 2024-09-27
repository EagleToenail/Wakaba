// import { useState,useEffect } from "react";
// import { getData } from "../../data.js";
// import Scheduler from "../../Components/Scheduler";
// // import Toolbar from "../../Components/Toolbar";
// import MessageArea from "../../Components/MessageArea";
// import axios from "axios";
// function Calender() {
// 	const [currentTimeFormatState, setTimeFormat] = useState(true);
// 	const [messages, setMessages] = useState([]);
// 	const [users, setUsers] = useState([]);
// 	const [data,setData]=useState([]);

// 	function addMessage(message) {
// 		setMessages((arr) => [...arr, message]);
// 	}

// 	function logDataUpdate(action, ev, id) {
// 		const text = ev && ev.text ? ` (${ev.text})` : "";
// 		const message = `event ${action}: ${id} ${text}`;		
// 		addMessage(message);
// 	}

// 	const userId = localStorage.getItem('userId');
// 	const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
// 	useEffect(() => {
// 		 if (!wakabaBaseUrl) {
// 			 throw new Error('API base URL is not defined');
// 		 } 
// 		 axios.post(`${wakabaBaseUrl}/users`,{ userId })
// 			 .then(response => {
// 				 const user = response.data;
// 				 console.log(user.payload.store_name, "user information")
				 
// 				 setUsers(user);

// 			 })
// 			 .catch(error => {
// 				 console.error("There was an error fetching the customer data!", error);
// 			 });

// 		 axios.post(`${wakabaBaseUrl}/scheduler/read`,{userId})
// 			 .then(response=>{
// 				const schedulers=response.data.schedulers;
// 				setData(schedulers);
// 				console.log(schedulers);
// 			 })	 
// 	 }, []);

// 	return (
// 		<div>
// 			<div className="tool-bar">			
// 				{users && users.payload ? (
// 				<span className="ml-5 text-[24px] text-bold">{users.payload.store_name}</span>
// 				) : (
// 				<span  className="ml-5 text-[24px] text-bold">Loading</span> // or some other default value
// 				)}
// 			</div>
// 			<div className="scheduler-container">				
// 				<Scheduler
// 					events={data}
// 					timeFormatState={currentTimeFormatState}
// 					onDataUpdated={logDataUpdate}
// 				/>				 
// 			</div>
// 			<MessageArea messages={messages} />
// 		</div>
// 	);
// }
// export default Calender;
