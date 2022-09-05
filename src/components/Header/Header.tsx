import React, { useEffect, useState } from 'react';
import { useIsMobileView } from '../../hooks';
import { Hamburger } from '../index';
import classes from './Header.module.css';

const Header = () => {

    const isMobileView = useIsMobileView();

    return (
        <header className={classes.Header}>
            <div className={classes.desktopHeader}>
                Meetups
            </div>
            { isMobileView && <div className={classes.mobileHeader}><Hamburger/></div> }
        </header>
    )
};

export default Header;