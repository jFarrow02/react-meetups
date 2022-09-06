import React from 'react';
import { Button } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faEdit, faTrashCan, faSave, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import classes from './SideNav.module.css';

const SideNav = () => {

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <nav className={classes.SideNav}>
            <div style={{position: 'relative'}}>
                <div 
                    className={classes.navButtonContainer}
                    style={{position: 'fixed', top: '10%'}}
                >
                    <Button
                        buttonClasses={[classes.navButton]}
                        onClickHandler={handleClick}
                    >
                        <FontAwesomeIcon icon={faPlusSquare} size='3x'/>
                    </Button>
                    <Button
                        buttonClasses={[classes.navButton]}
                        onClickHandler={handleClick}
                    >
                        <FontAwesomeIcon icon={faTrashCan} size='3x'/>
                    </Button>
                </div>
            </div>
        </nav>
    )
};

export default SideNav;