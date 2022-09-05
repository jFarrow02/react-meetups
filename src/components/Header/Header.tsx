import React from 'react';
import { Hamburger } from '../index';
import classes from './Header.module.css';

const Header = () => {

    return (
        <header className={classes.Header}>
            {/* Meetups */}
            <Hamburger/>
        </header>
    )
};

export default Header;