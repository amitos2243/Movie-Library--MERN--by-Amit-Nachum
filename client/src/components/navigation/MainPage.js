import { Route, Switch, Link, Redirect } from "react-router-dom";
import { AppBar, Toolbar, List, ListItem, ListItemText, makeStyles, Container, Typography } from "@material-ui/core";
import MoviesMainPage from "../movies/MoviesMainPage";
import SubscriptionsMainPage from "../subscriptions/SubscriptionsMainPage";
import AuthService from '../../services/auth.service';


const useStyles = makeStyles({
  navDisplayFlex: { display: `flex` },
  linkText: { textDecoration: `none`, textTransform: `uppercase`, color: `white` },
  navbarDisplayFlex: { display: `flex`, justifyContent: `space-between` },
  btn: {
    background: 'linear-gradient(20deg, #CE8600 30%, #FBA400 75%)',
    borderRadius: 3,
    height: 48,
    '&:hover': {
      color: '#FBA400',
      background: 'black'
    },
  }
});

const navLinks = [
  { title: `movies`, path: `/movies` },
  { title: `subscriptions`, path: `/members` },
  { title: `logout`, path: `/` },
];

const MainPage = () => {
  const classes = useStyles();

  const handleLogout = () => {
    AuthService.logout();
  }

  return (
    <>
      <AppBar position="static" style={{ marginBottom: '15px' }}>
        <Toolbar style={{ background: 'linear-gradient(11deg, #249232 29%, #52D452 65%)' }} >
          <Container className={classes.navbarDisplayFlex}>
            <Typography variant='h5' style={{ padding: '1.5%', color: '#EFEBE0' }}>  Subs & Movies Management</Typography>
            <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
              {navLinks.map(({ title, path }) => (
                <Link style={{ color: '#EFEBE0', padding: '1.2%' }} to={path} key={title} className={classes.linkText}>
                  {title === 'logout' ?
                    <ListItem button className={classes.btn} onClick={handleLogout}><ListItemText primary={title} /></ListItem>
                    : <ListItem button><ListItemText primary={title} /></ListItem>}
                </Link>
              ))}
            </List>
            <Typography variant='h6' style={{ padding: '1.5%' }}>Hello, {sessionStorage["fullName"]}</Typography>
          </Container>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/movies" component={MoviesMainPage} />
        <Route path="/members" component={SubscriptionsMainPage} />
      </Switch>
      <Redirect exact to='/movies' />
    </>
  );
};
export default MainPage;