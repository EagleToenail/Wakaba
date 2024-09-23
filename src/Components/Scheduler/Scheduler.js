import { useEffect, useRef } from "react";
import { Scheduler } from "@dhx/trial-scheduler";
// import {Scheduler} from 'dhtmlx-scheduler';
import "@dhx/trial-scheduler/codebase/dhtmlxscheduler.css";
import axios from "axios";
export default function SchedulerView( {events, timeFormatState, onDataUpdated} ) {
	let container = useRef();
	useEffect(() => {
		const wakabaBaseUrl = process.env.REACT_APP_WAKABA_API_BASE_URL;
		const userId = localStorage.getItem('userId');

		let scheduler = Scheduler.getSchedulerInstance();
		scheduler.i18n.setLocale("jp");

		scheduler.skin = "terrace";
		scheduler.config.header = [
			"day",
			"week",
			"month",
			"date",
			"prev",
			"today",
			"next",
		];
		scheduler.config.hour_date = "%g:%i %A";
		scheduler.xy.scale_width = 70;

		scheduler.init(container.current, new Date());
		scheduler.clearAll();
		
		axios.post(`${wakabaBaseUrl}/scheduler/read`,{userId})
		.then(response=>{
		   const schedulers=response.data.schedulers;
		   scheduler.parse(schedulers	);
		})	 
		scheduler.createDataProcessor((type, action, item, id) => {
			return new Promise((resolve, reject) => {
				onDataUpdated(action, item, id);
				// if onDataUpdated changes returns a permanent id of the created item, you can return it from here so dhtmlxGantt could apply it
				// return resolve({id: databaseId});
				if (action === 'create') {

					axios.post(`${wakabaBaseUrl}/scheduler/create`, {item:item,userId:userId,})
					  .then(response => {
						const eventId = response.data.id;
						// Update the scheduler with the new event ID
						scheduler.updateEvent(eventId, item);
						resolve();
					  })
					  .catch(err => {
						console.error(err);
						reject();
					  });
				  }
				
				});
		});

		function setHoursScaleFormat(state) {
			scheduler.config.hour_date = state ? "%H:%i" : "%g:%i %A";
			scheduler.templates.hour_scale = scheduler.date.date_to_str(
				scheduler.config.hour_date
			);
			scheduler.render();
		}
		setHoursScaleFormat(timeFormatState);
		return () => {
			scheduler.destructor();
			//container.current.innerHTML = "";
		};
	}, [timeFormatState]);

	return (
		<div ref={container} style={{ width: "100%", height: "100%" }}></div>
	);
}
