import React, {Component} from "react";
import CanvasJSReact from '../../../canvasjs-2.3.1/canvasjs.react';
import Typography from "@material-ui/core/Typography";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class UserDataLangComponent extends Component {
  render() {
    console.log(this.props.languages)
    const keys = Object.keys(this.props.languages);
    const values = Object.values(this.props.languages);


    const holder = keys.map((key, index) => {
        let obj = {name: key, y: values[index]}
        return obj 
      }
    )
    const options = {
      animationEnabled: true,
      title: {
        text: "Languages"
      },
      data: [{
        type: 'doughnut',
        showInLegend: true,
        indexLabel: '{name}: {y}',
        dataPoints: holder
      }]
    }
    console.log(options)
    return (
      
      <div className='langComponent'>
        <CanvasJSChart options={options} />
      </div>
    )
  }
}


export default UserDataLangComponent;
