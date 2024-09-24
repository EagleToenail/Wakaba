import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const LineChart = () => {
	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2",
		title: {
			text: "  "
		},
		axisY: {
			title: "",
			includeZero: true,
			maximum: 100,
			minimum: 0,
			interval: 20,
		},
		axisX: {
			title: "年-月",
			valueFormatString: "YYYY-MM",
			interval: 1,
			intervalType: "month",
		},
		data: [
			{
				type: "line",
				name: "AAA店",
				showInLegend: true,
				toolTipContent: "月 {x}: {y}% (AAA店)",
				dataPoints: [
					{ x: new Date(2023, 0), y: 0 }, // Jan 2023
					{ x: new Date(2023, 1), y: 80 }, // Feb 2023
					{ x: new Date(2023, 2), y: 64 }, // Mar 2023
					{ x: new Date(2023, 3), y: 62 }, // Apr 2023
					{ x: new Date(2023, 4), y: 30 }, // May 2023
					{ x: new Date(2023, 5), y: 60 }, // Jun 2023
					{ x: new Date(2023, 6), y: 58 }, // Jul 2023
					{ x: new Date(2023, 7), y: 20 }, // Aug 2023
					{ x: new Date(2023, 8), y: 53 }, // Sep 2023
					{ x: new Date(2023, 9), y: 54 }, // Oct 2023
					{ x: new Date(2023, 10), y: 61 }, // Nov 2023
					{ x: new Date(2023, 11), y: 60 }, // Dec 2023
				]
			},
			{
				type: "line",
				name: "BBB店",
				showInLegend: true,
				toolTipContent: "月 {x}: {y}% (BBB店)",
				dataPoints: [
					{ x: new Date(2023, 0), y: 10 },
					{ x: new Date(2023, 1), y: 55 },
					{ x: new Date(2023, 2), y: 92 },
					{ x: new Date(2023, 3), y: 58 },
					{ x: new Date(2023, 4), y: 60 },
					{ x: new Date(2023, 5), y: 32 },
					{ x: new Date(2023, 6), y: 59 },
					{ x: new Date(2023, 7), y: 61 },
					{ x: new Date(2023, 8), y: 53 },
					{ x: new Date(2023, 9), y: 45 },
					{ x: new Date(2023, 10), y: 58 },
					{ x: new Date(2023, 11), y: 60 },
				]
			},
			{
				type: "line",
				name: "CCC店",
				showInLegend: true,
				toolTipContent: "月 {x}: {y}% (CCC店)",
				dataPoints: [
					{ x: new Date(2023, 0), y: 70 },
					{ x: new Date(2023, 1), y: 68 },
					{ x: new Date(2023, 2), y: 72 },
					{ x: new Date(2023, 3), y: 74 },
					{ x: new Date(2023, 4), y: 76 },
					{ x: new Date(2023, 5), y: 75 },
					{ x: new Date(2023, 6), y: 77 },
					{ x: new Date(2023, 7), y: 78 },
					{ x: new Date(2023, 8), y: 79 },
					{ x: new Date(2023, 9), y: 80 },
					{ x: new Date(2023, 10), y: 81 },
					{ x: new Date(2023, 11), y: 82 },
				]
			},
			{
				type: "line",
				name: "DDD店",
				showInLegend: true,
				toolTipContent: "月 {x}: {y}% (DDD店)",
				dataPoints: [
					{ x: new Date(2023, 0), y: 25 },
					{ x: new Date(2023, 1), y: 57 },
					{ x: new Date(2023, 2), y: 53 },
					{ x: new Date(2023, 3), y: 52 },
					{ x: new Date(2023, 4), y: 54 },
					{ x: new Date(2023, 5), y: 26 },
					{ x: new Date(2023, 6), y: 58 },
					{ x: new Date(2023, 7), y: 60 },
					{ x: new Date(2023, 8), y: 62 },
					{ x: new Date(2023, 9), y: 64 },
					{ x: new Date(2023, 10), y: 66 },
					{ x: new Date(2023, 11), y: 98 },
				]
			},
			{
				type: "line",
				name: "EEE店",
				showInLegend: true,
				toolTipContent: "月 {x}: {y}% (EEE店)",
				dataPoints: [
					{ x: new Date(2023, 0), y: 30 },
					{ x: new Date(2023, 1), y: 82 },
					{ x: new Date(2023, 2), y: 81 },
					{ x: new Date(2023, 3), y: 33 },
					{ x: new Date(2023, 4), y: 85 },
					{ x: new Date(2023, 5), y: 87 },
					{ x: new Date(2023, 6), y: 90 },
					{ x: new Date(2023, 7), y: 91 },
					{ x: new Date(2023, 8), y: 52 },
					{ x: new Date(2023, 9), y: 93 },
					{ x: new Date(2023, 10), y: 94 },
					{ x: new Date(2023, 11), y: 95 },
				]
			}
		]
	};

    const chartContainerProps = {
		width: "100%", // Set width as desired, e.g., "100%", "600px", etc.
		height: "400px", // Set height as desired
        opacity: 1, 
	};

	return (
		<div>
			<h1>[%]</h1>
			<div style={{ ...chartContainerProps, opacity: 1 }}>
				<CanvasJSChart options={options} />
			</div>
		</div>
	);
};

export default LineChart;
