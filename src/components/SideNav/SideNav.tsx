import React from 'react';
import classes from './SideNav.module.css';

const SideNav = () => {

    return (
        <nav className={classes.SideNav}>
            <div style={{position: 'relative'}}>
                <div style={{position: 'fixed', top: '50%'}}>
                    Navigation
                </div>
            </div>
        </nav>
    )
};

export default SideNav;