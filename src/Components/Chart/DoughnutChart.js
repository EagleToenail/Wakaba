import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const DoughnutChart = ({ title ,value}) => {
	const options = {
		animationEnabled: true,
		title: {
			text: ""
		},
		subtitles: [{
			text: "",
			verticalAlign: "center",
			fontSize: 24,
			dockInsidePlotArea: true
		}],
		data: [{
			type: "doughnut",
			showInLegend: false,
			indexLabel: "{name}: {y}",
			yValueFormatString: "#,###'%'",
			dataPoints: [
				{ name: "折込チラシ", y: 31 },
				{ name: "Web", y: 40 },
				{ name: "紹介", y: 22 },
				{ name: "その他", y: 7 }
			]
		}]
	};

	return (
		<div style={{ width: '50%', }}>
			<CanvasJSChart options={options} />
			<div className='text-center text-xl'>
				{title}
			</div>
		</div>
	);
};

export default DoughnutChart;
