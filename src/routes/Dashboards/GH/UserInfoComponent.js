import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function UserInfoComponent(props) {
  if (props.user) {
    const { login, avatar_url, email, bio } = props.user;
    return (
      <>
        <Card className="userCard">
          <CardActionArea>
            <CardMedia
              className="userImg"
              image={avatar_url}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {login}
              </Typography>
              <Typography component="p">{bio}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={(e) => {props.handleGHSubmitted(e)}} size="small" color="primary">
              Github
            </Button>
            <Button  disabled={email ? false : true} size="small" color="primary">
              <i className="fas fa-envelope" />
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default UserInfoComponent;
