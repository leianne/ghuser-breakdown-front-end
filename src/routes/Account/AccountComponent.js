import React from 'react';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function AccountComponent(props) {
    const accInfo = props.accInfo;
    if(accInfo) {
        if (accInfo.username) {
            return (
              <>
                <Card className="userCard">
                  <CardActionArea>
                   
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {accInfo.username}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="h2">
                        {accInfo.password}
                      </Typography>
                    <button
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                  </CardActions>
                </Card>
              </>
            );
          } 
    }
        else {
            return <h3>Loading</h3>;
          }
}

export default AccountComponent;