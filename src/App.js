import './App.css';
import Paper from '@material-ui/core/Paper';
import Image from './resources/universities_img.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import MaterialTable from 'material-table';
const useStyles = makeStyles({
  root: {
    padding: '8px',
    height: '100vh',
  },
  paper: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${Image})`,
  }
});

function App() {
  const classes = useStyles();
  const [ListUniv,setListUniv]= useState([]);
  const handlebuttonclick=()=>{
    fetch('http://universities.hipolabs.com/search?country=India').then(res=>res.json()).then((result)=>
    {
      setListUniv(result);
  });
   
  }
  return (
    <div className={classes.root}>
    <CssBaseline />
    <Paper className={classes.paper}>
    <Typography variant="h1" component="h2" style={{color:"white"}}>
        Find the list of universities across the world
      </Typography>
     
    
    <TextField id="standard-basic" label="Standard" style={{color:"white"}}/>
    <Button variant="contained" color="primary" onClick={handlebuttonclick}>
  Find universities
</Button>
{ListUniv}

    </Paper>
  </div>
  );
}

export default App;
