import { AppBar, Toolbar, makeStyles, Container, Typography } from "@material-ui/core";


const useStyles = makeStyles({
  navDisplayFlex: { display: `flex`, justifyContent: `space-between` }
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" style={{ marginBottom: '15px' }}>
      <Toolbar style={{ background: 'linear-gradient(45deg, #249232 5%, #52D452 65%)' }}>
        <Container className={classes.navbarDisplayFlex}>
          <Typography variant='h4' style={{ textAlign: 'center', padding: '3%' }}>Welcome dear employee </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
