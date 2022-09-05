import React from 'react';
import { useIsMobileView } from '../../hooks';
import { AppContent, Header, SideNav } from '../index';
import classes from './Layout.module.css';

const Layout = () => {

    const isMobileView = useIsMobileView();

    return (
        <div className={classes.Layout}>
            <div className={classes.header}>
                <Header/>
            </div>
            { !isMobileView && (
                <div className={classes.sideNav}>
                    <SideNav/>
                </div>
                )
            }
            <div className={isMobileView ? classes.appContentMobile : classes.appContent}>
                <AppContent/>
            </div>
        </div>
    )
};

export default Layout;