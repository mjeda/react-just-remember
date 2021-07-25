import { CssBaseline, makeStyles } from '@material-ui/core'

import './App.css';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';
import Users from '../pages/Users';


function App() {
  const classes = styles()
  return (
    <>
      <SideBar/>
      <div className={classes.appMain}>
        <Header/>
        <Users/>
      </div>
      <CssBaseline />
    </>
  );
}

const styles = makeStyles({
  appMain:{
    paddingLeft:"320px",
    width: "100%"
  }
})

export default App;
