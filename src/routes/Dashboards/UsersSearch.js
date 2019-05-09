import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function UsersSearch(props) {
    if(props.users.length > 0) {
        return props.users.map(user => {
            return (
                <Card key={user.id} className='userCardSearch'>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={`${user.login} photo`}
                    height="240"
                    src={user.avatar_url}
                    title={user.login}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {user.login}
                    </Typography>
                    <Typography  color="textSecondary">
                       GitHub Score: {user.score}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={`/ghdashboard/search=${user.login}`} >
                    View  More
                  </Button>
                </CardActions>
              </Card>
            )
        })
    } else {
       return <h1>Please enter Github Username</h1>
    }  
}

export default UsersSearch;