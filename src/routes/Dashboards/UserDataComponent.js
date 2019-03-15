import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

function UserDataComponent(props) {
  if (props.data) {
    return (
      <Card className="userData">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be nev lent
          </Typography>
          <Typography color="textSecondary">adjective</Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Typography variant="h5" component="h2">
            languages
          </Typography>{" "}
        </CardActions>
      </Card>
    );
  } else {
    return null;
  }
}
export default UserDataComponent;
