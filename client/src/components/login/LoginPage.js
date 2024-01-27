
import { useState } from 'react';
import AuthService from '../../services/auth.service';
import Header from '../common/Header';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import { withStyles } from '@material-ui/core/styles';



const LoginPage = (props) => {
  const [details, setDetails] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const paperStyle = {
    padding: 40, height: '45vh', width: 400,
    margin: "40px auto"
  }
  //Icon
  const avatarStyle = { backgroundColor: '#147a14e0' }

  // Checkbox
  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = await AuthService.login(details);

    sessionStorage.setItem('token', data.accessToken);
    sessionStorage.setItem('fullName', data.fullname);
    sessionStorage.setItem('username', data.username);
    if (!data.accessToken)
      setErrorMessage('Your Details are wrong, try again');
    else {
      setErrorMessage('');
      window.location.reload();

    }

  }

  return (
    <>

      <Header />
      <Grid>
        <Paper elevation={15} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle} ><LockTwoToneIcon /></Avatar>
            <h2 style={{ color: '#032404e0' }}>Sign in</h2>
          </Grid>
          <form onSubmit={handleLogin}>
            <TextField label='Username' placeholder='Enter username'
              fullWidth required value={details.username} onChange={e => setDetails({ ...details, username: e.target.value })}>
            </TextField>

            <TextField label='Password' placeholder='Enter password' type='password'
              fullWidth required value={details.password} onChange={e => setDetails({ ...details, password: e.target.value })}>
            </TextField>

            <FormControlLabel
              control={<GreenCheckbox name="checkedG" />}
              label="Remember Me"
            />

            <br /><br />
            <Button size='large' style={{ color: 'green' }} type="submit" fullWidth  >Login</Button> <br />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}


          </form >
        </Paper >
      </Grid >
    </>
  );
}

export default LoginPage;