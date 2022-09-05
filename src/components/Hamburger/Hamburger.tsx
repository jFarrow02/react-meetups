import React from 'react';
import classes from './Hamburger.module.css';

interface IHamburgerProps {
    height: string;
    width: string;
    color: string;
    onClick: () => void;
}
const Hamburger = (props:IHamburgerProps) => {

    const { height, width, color, onClick } = props;

    return (
        <button 
            className={classes.Hamburger} 
            style={{ height, width }}
            type='button'
            onClick={onClick}
        >
           <div className={classes.burgerLayer} style={{ backgroundColor: color }}/>
           <div className={classes.burgerLayer} style={{ backgroundColor: color }}/>
           <div className={classes.burgerLayer} style={{ backgroundColor: color }}/>
        </button>
    )
};

Hamburger.defaultProps = {
    height: '30px',
    width: '30px',
    color: '#FFF',
    onClick: () => {},
};

export default Hamburger;