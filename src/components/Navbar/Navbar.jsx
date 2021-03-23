import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from '../../assets/10_(32).jpg';
import useStyles from './styles';

const Navbar = () => {
    
    const classes = useStyles();
    
    return (
        <main>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar >
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Commerce.js" height="25px" className={classes.image}/>
                            Topshelf E-Commerce
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aira-aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </main>
    )
}

export default Navbar;
