import React from 'react';
import { AppBar, ToolBar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/41_295.jpg';
import classes from '*.module.css';

const Navbar = () => {
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <ToolBar >
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src="" alt="Commerce.js" height="25px" className={classes.image}/>
                            Topshelf E-Commerce
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aira-aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary"></Badge>
                        </IconButton>
                    </div>
                </ToolBar>
            </AppBar>
        </>
    )
}

export default Navbar
