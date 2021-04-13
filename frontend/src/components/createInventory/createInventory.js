import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Create() {
    const classes = useStyles();

    const [inventory, setInventory] = useState({
        name: '',
        description: '',
        imageUrl: '',
        mootPoints: 0,
        limit: 0,
        categories: Array,
        vendor: 'Any',
        active: Boolean

    });

    const createInventory = () => {
        axios.post('http://localhost:5000/inventory', inventory)

    }

    return ( <
        >
        <
        h2 > Update Inventory < /h2> <
        form className = { classes.root }
        noValidate autoComplete = "off" >
        <
        TextField id = "outlined-basic"
        label = "Name"
        variant = "outlined"
        value = { inventory.name }
        onChange = {
            (event) => {
                setInventory({...inventory, name: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Description"
        variant = "outlined"
        value = { inventory.description }
        onChange = {
            (event) => {
                setInventory({...inventory, description: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Image"
        variant = "outlined"
        value = { inventory.imageUrl }
        onChange = {
            (event) => {
                setInventory({...inventory, imageUrl: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Points"
        variant = "outlined"
        value = { inventory.mootPoints }
        onChange = {
            (event) => {
                setInventory({...inventory, mootPoints: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Limit"
        variant = "outlined"
        value = { inventory.limit }
        onChange = {
            (event) => {
                setInventory({...inventory, limit: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Category"
        variant = "outlined"
        value = { inventory.categories }
        onChange = {
            (event) => {
                setInventory({...inventory, categories: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Vendor"
        variant = "outlined"
        value = { inventory.vendor }
        onChange = {
            (event) => {
                setInventory({...inventory, vendor: event.target.value })
            }
        }
        / >

        <
        TextField id = "outlined-basic"
        label = "Active"
        variant = "outlined" / >

        <
        Button variant = "contained"
        color = "secondary"
        onClick = { createInventory } >
        Update <
        /Button>


        <
        /form> < / >
    );
}