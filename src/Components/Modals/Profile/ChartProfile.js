import React,{useState,Component } from 'react'
import Chart from "react-apexcharts"

class ChartProfile extends Component {
    constructor(props){
        super(props)

        this.state = {
          
          series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100],
          }],
          options: {
            chart: {
              height: 350,
              type: 'radar',
              toolbar: {
                show: false,
              }
            },
            title: {
              text: 'Level: B1'
              
            },
            xaxis: {
              categories: ['Mondeling', 'Schriftelijk', 'Luisteren', 'Vocabulaire', 'Structuur']
            },
            yaxis:{
              showAlways: false,
            }
          },
        
        
        };
      }

    

      render() {
        return (
              <Chart options={this.state.options} series={this.state.series} type="radar"  width={300} height={300} />
  
      )
    }
}
export default ChartProfile