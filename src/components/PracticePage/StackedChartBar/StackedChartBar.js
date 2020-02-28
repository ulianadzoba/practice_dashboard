import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
import './StackedChartBar.scss';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StackedChartBar extends Component {
	constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e){
		if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else{
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const options = {
            animationEnabled: true,
            height: 360,
			title:{
                text: "KNOWLEDGE ITEMS",
                fontWeight: "bolder",
                fontFamily: "arial",
                fontSize: 16,
                padding: 10,
                horizontalAlign: 'left'
			},
			toolTip: {
				shared: true
            },
            dataPointWidth: 70,
            axisY:{
                interval: 20,
                tickLength: 10,
                suffix: "%",
                labelFontColor: "grey",
                gridColor: "silver",
                tickColor: "silver",
                lineThickness: 0
            },
            axisX:{ 
                gridColor: "silver",
                tickColor: "silver",
                lineColor: "silver",
                margin: 10,
                labelFontSize: 14,
                labelFontWeight: "bolder"
            }, 
			data: [
			{
				type: "stackedColumn100",
				name: "Expert",
				color: "rgb(225, 106, 129)",
				dataPoints: [
					{ label: "SQL", y:20},
					{ label: "s3", y:25},
					{ label: "Python", y:30},
					{ label: "PostgreSQL", y:10},
					{ label: "Oracle", y:50},
					{ label: "MySQL", y:15},
					{ label: "Python", y:3},
					{ label: "CloudWatch", y:60},
					{ label: "EC2", y:70},
					{ label: "AW2", y:20}
				]
			},
			{
				type: "stackedColumn100",
				name: "Qualified",
				color: "rgb(169, 227, 129)",
				dataPoints: [
					{ label: "SQL", y:10},
					{ label: "s3", y:5},
					{ label: "Python", y:30},
					{ label: "PostgreSQL", y:20},
					{ label: "Oracle", y:45},
					{ label: "MySQL", y:35},
					{ label: "Python", y:4},
					{ label: "CloudWatch", y:50},
					{ label: "EC2", y:12},
					{ label: "AW2", y:70}
				]
			},
			{
				type: "stackedColumn100",
				name: "Beginner",
				color: "rgb(253, 227, 42)",
				dataPoints: [
					{ label: "SQL", y:40},
					{ label: "s3", y:45},
					{ label: "Python", y:37},
					{ label: "PostgreSQL", y:50},
					{ label: "Oracle", y:75},
					{ label: "MySQL", y:85},
					{ label: "Python", y:30},
					{ label: "CloudWatch", y:40},
					{ label: "EC2", y:12},
					{ label: "AW2", y:20}
				]
            },
            {
				type: "stackedColumn100",
				name: "None",
				color: "silver",
				dataPoints: [
					{ label: "SQL", y:40},
					{ label: "s3", y:45},
					{ label: "Python", y:30},
					{ label: "PostgreSQL", y:70},
					{ label: "Oracle", y:15},
					{ label: "MySQL", y:25},
					{ label: "Python", y:50},
					{ label: "CloudWatch", y:10},
					{ label: "EC2", y:12},
					{ label: "AW2", y:70}
				]
			}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				// onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}

export default StackedChartBar;