import React from 'react';
import { Header, SideNav } from '../index';
import classes from './Layout.module.css';

const Layout = () => {

    return (
        <div className={classes.Layout}>
            <div className={classes.header}>
                <Header/>
            </div>
            <div className={classes.sideNav}>
                <SideNav/>
            </div>
        </div>
    )
};

export default Layout;