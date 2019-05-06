import React from "react";
// import { LineChart, ScatterplotChart } from "react-easy-chart";
// import ReactChartkick, { LineChart, PieChart } from 'react-chartkick';
// import Chart from 'chart.js';
import CanvasJSReact from '../../../canvasjs-2.3.1/canvasjs.react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios  from 'axios';
const  baseURL = process.env.BACKEND_API || 'http://localhost:5000/api/github/search';

const CanvasJS = CanvasJSReact.CanvasJS
const CanvasJSChart = CanvasJSReact.CanvasJSChart


class UserDataChartComponent extends React.Component {
  state = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  };
  componentDidUpdate() {

  }
  componentDidMount() {
    const Sunday = [];
    const Monday = [];
    const Tuesday = [];
    const Wednesday = [];
    const Thursday = [];
    const Friday = [];
    const Saturday = [];
    console.log(this.props)
    if(this.props.data) {
      console.log(this.props.data)
      Object.entries(this.props.data).forEach(([el, key]) => {
        const { Day, Hour, Commits } = key;
        const chart = { x: parseInt(Hour) + 1, y: parseInt(Commits) };
  
        if (Day === "0") {
          Sunday.push(chart);
        } else if (Day === "1") {
          Monday.push(chart);
        } else if (Day === "2") {
          Tuesday.push(chart);
        } else if (Day === "3") {
          Wednesday.push(chart);
        } else if (Day === "4") {
          Thursday.push(chart);
        } else if (Day === "5") {
          Friday.push(chart);
        } else if (Day === "6") {
          Saturday.push(chart);
        }
        return Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday;
      });
      this.setState({
        ...this.state,
        Sunday: Sunday,
        Monday: Monday,
        Tuesday: Tuesday,
        Wednesday: Wednesday,
        Thursday: Thursday,
        Friday: Friday,
        Saturday: Saturday,
        selected: Tuesday
      });
    }
    
  }
  tabSelected = (e) => {
      e.preventDefault();
          this.setState({
          ...this.state,
          selected: this.state[e.target.textContent]
      })
  }
  render() {
    const options = {
      title: {
        text: "Commit History"
      },
      axisX: {
        title: "hour",
        suffix: "",
        stripLines: [{
          value: 3366500,
          label: "Average"
        }]
      },
      axisY: {
        title: "# of commit(s)",
        suffix: "",
        stripLines: [{
          value: 3366500,
          label: "Average"
        }]
      },
      data: [{
        
        type: "spline",
        dataPoints: this.state.selected
      }]
    }
    
    if (this.state.selected) {
    
      return (
        <div className='chartContainer'>
          <div>
            <Tabs    
>
              <Tab onClick={(e) => this.tabSelected(e)} value={1} style={{ minWidth: 50 }} label="Sunday" />
              <Tab onClick={(e) => this.tabSelected(e)} style={{ minWidth: 50 }}  label="Monday" />
              <Tab onClick={(e) => this.tabSelected(e)} style={{ minWidth: 50 }}  label="Tuesday" />
              <Tab onClick={(e) => this.tabSelected(e)} style={{ minWidth: 50 }}  label="Wednesday" />
              <Tab onClick={(e) => this.tabSelected(e)} style={{ minWidth: 50 }}  label="Thursday" />
              <Tab onClick={(e) => this.tabSelected(e)} style={{ minWidth: 50 }}  label="Friday" />
              <Tab onClick={(e) => this.tabSelected(e)} style={{ minWidth: 50 }} label="Saturday" />
            </Tabs>
          </div>
          
          <CanvasJSChart options = {options} />

          {/* <LineChart data={[[new Date(), 5], ["2017-01-01 00:00:00 UTC", 7], [new Date(), 5], ["2017-01-01 00:10:00 UTC", 7]]}/> */}
        
        </div>
      );
    } else {
      return <h3>Please select a date</h3>;
    }
  }
}

export default UserDataChartComponent;
