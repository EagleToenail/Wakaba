import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
	render() {
		const options = {
			title: {
				text: ""
			},
			axisY: {
				lineThickness: 0,      // Hide the Y-axis line
				tickLength: 0,        // Hide the ticks on the Y-axis
				labelFormatter: () => "" // Hide Y-axis labels
			},
			animationEnabled: true,
			data: [
				{
					type: "column",
					dataPoints: [
						{ label: "貴金属",  y: 100 },
						{ label: "時計", y: 90 },
						{ label: "アクセサリ", y: 80 },
						{ label: "プランド",  y: 70 },
						{ label: "切手",  y: 60 },
						{ label: "テレカ", y: 50 },
						{ label: "古銭", y: 40 },
						{ label: "骨董品", y: 30 }
					]
				}
			]
		}
		
		return (
			<div style={{width:'100%'}}>
				<CanvasJSChart options={options} 
					/* onRef={ref => this.chart = ref} */
				/>
			</div>
		);
	}
}

export default ColumnChart;
