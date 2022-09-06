import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { AllMeetupsView, Button } from '../index';
import classes from './AppContent.module.css';

const AppContent = () => {

    const handleClick = () => {
    };

    return (
        <section className={classes.AppContent}>
            <AllMeetupsView/>
            <div className={classes.buttonContainer}>
                <Button
                    buttonClasses={[classes.newMeetupButton]}
                    onClickHandler={handleClick}
                    style={
                        {
                            border: '3px solid #FFF',
                            backgroundColor: 'deeppink'
                        }
                    }
                >
                    <FontAwesomeIcon icon={faPlusSquare} size='3x'/>
                </Button>
            </div>
        </section>
    )
};

export default AppContent;