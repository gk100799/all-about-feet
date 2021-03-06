import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import {axiosInstance, request} from '../../helpers'
import {withRouter} from 'react-router-dom'
import {message} from 'antd';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
    marginLeft: '20px',    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkTag: {
    '&:hover': {
      cursor: 'pointer',
   },
  }
}));

function SignUp(props) {
  const classes = useStyles();
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    name === "username" ? setUsername(value) : 
    name === "password" ? setPassword(value) : 
    name === "firstName" ? setFirstName(value) :
    setLastName(value)  
  };

  message.config({
    top: 80,
  })

  const handle_signup = (e) => {
    e.preventDefault();
    let data = {
      "first_name" : firstName,
      "last_name" : lastName,
      "username" : username,
      "password" : password,
    }
    request.post('/login/users/', data)
      .then(json => {
        localStorage.setItem('token', json.data.token);
        props.setstate(true,json.data.username)
      })
      .then(res => window.location.href='/')
      .then(res=> message.success("Account created successfully!"))
      .catch(err => message.error("An Account already exists with this username"))
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...firstName}
                onChange={handle_change}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                {...lastName}
                onChange={handle_change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Username"
                name="username"
                autoComplete="username"
                {...username}
                onChange={handle_change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...password}
                onChange={handle_change}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={e => handle_signup(e)}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link className={classes.linkTag} to='login' variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}


SignUp.propTypes = {
  handle_signup: PropTypes.func.isRequired
};

export default withRouter(SignUp);