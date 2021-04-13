import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import inventory from './components/showInventory/showInventory.js';
import Create from './components/createInventory/createInventory.js';
import useStyles from './style';

import './App.css';

function App() {

    const classes = useStyles();

    return ( <
        div className = "App" >
        <
        Container maxWidth = "lg" >
        <
        AppBar className = { classes.appBar }
        position = 'static'
        color = 'inherit' >
        <
        Typography className = { classes.heading }
        variant = 'h2'
        align = 'center' > Inventory Show < /Typography>

        <
        /AppBar>

        <
        Grow in >
        <
        Grid container justify = 'space-between'
        alignItems = 'stretch' >
        <
        Grid item xs = { 12 }
        sm = { 7 } >
        <
        AppBar className = { classes.appBar }
        position = 'static'
        color = 'inherit' >
        <
        inventory / >
        <
        /AppBar> 

        <
        /Grid>

        <
        Grid item xs = { 12 }
        sm = { 4 } >
        <
        AppBar className = { classes.appBar }
        position = 'static'
        color = 'inherit' >
        <
        Create / >

        <
        /AppBar>        

        <
        /Grid> 

        <
        /Grid>     

        <
        /Grow>

        <
        /Container> < /
        div >
    );
}

export default App;