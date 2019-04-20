import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

function LoginComponent(props) {
  return (
    <Paper id="form">
      <Avatar>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {props.isRegistering ? 'Sign Up' : 'Sign In'}
      </Typography>
      <form >
      {props.error && (<div className='error'>Username Taken</div>)}

        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Username</InputLabel>
          <Input
            id="email"
            onChange={e => props.handleChanges(e)}
            value={props.user.username}
            name="username"
            autoComplete="email"
            autoFocus
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            onChange={e => props.handleChanges(e)}
            value={props.user.password}
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </FormControl>
        {props.isRegistering && (
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              name="email"
              onChange={e => props.handleChanges(e)}
              value={props.user.email}
              type="email"
              id="email"
            />
          </FormControl>
        )}
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" onClick={(e) => props.formBtnSelected(e, props.user)} fullWidth variant="contained" color="primary">
        {props.isRegistering ? 'Sign Up' : 'Sign In'}
        </Button>
      </form>
    </Paper>
  );
}

export default LoginComponent;
