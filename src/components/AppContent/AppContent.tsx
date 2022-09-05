import React from 'react';
import { AllMeetupsView } from '../index';
import classes from './AppContent.module.css';

const AppContent = () => {
    return (
        <section className={classes.AppContent}>
            <AllMeetupsView/>
        </section>
    )
};

export default AppContent;