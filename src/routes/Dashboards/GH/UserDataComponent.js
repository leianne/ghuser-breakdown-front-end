import React from "react";
import './UserDataChartComponent';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import UserDataLangComponent from './UserDataLangComponent';
import Typography from "@material-ui/core/Typography";
import UserDataChartComponent from "./UserDataChartComponent";

function UserDataComponent(props) {
  if (props.data) {
    return (
      <Card className="userData">
        <CardContent>
          <UserDataChartComponent data={props.data} />
          <Typography variant="h5" component="h2">
            Languages
          </Typography>
      
          <Typography color="textSecondary">most commonly used</Typography>
          <hr/>
          {props.langs.length > 0 && <UserDataLangComponent langs={[props.langs]}/>}
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    );
  } else {
    return null;
  }
}
export default UserDataComponent;
