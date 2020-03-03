import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
import './StackedChartBar.scss';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class StackedChartBar extends Component {
	constructor(props) {
		super(props);
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
		let expertAr = [];
		let qualifiedAr = [];
		let beginnerAr = [];
		let noneAr = [];
	
		this.props.categories.map((category) => {
			let row = {label: category.title, y: category.totalValue[3].number};
			return expertAr.push(row);	
		})
		this.props.categories.map((category) => {
			let row = {label: category.title, y: category.totalValue[2].number};
			return qualifiedAr.push(row);	
		})
		this.props.categories.map((category) => {
			let row = {label: category.title, y: category.totalValue[1].number};
			return beginnerAr.push(row);	
		})
		this.props.categories.map((category) => {
			let row = {label: category.title, y: category.totalValue[0].number};
			return noneAr.push(row);	
		})
	
		const data1 = expertAr;
		const data2 = qualifiedAr;
		const data3 = beginnerAr;
		const data4 = noneAr;

		
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
				color: "rgb(169, 227, 129)",
				dataPoints: data1
			},
			{
				type: "stackedColumn100",
				name: "Qualified",
				color: "rgb(253, 227, 42)",
				dataPoints: data2
			},
			{
				type: "stackedColumn100",
				name: "Beginner",
				color: "rgb(225, 106, 129)",
				dataPoints: data3
            },
            {
				type: "stackedColumn100",
				name: "None",
				color: "silver",
				dataPoints: data4
			}
			]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
			/>
		</div>
		);
	}
}

export default StackedChartBar;