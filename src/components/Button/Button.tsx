
import { ReactNode } from 'react';
import './Button.module.css';
import classes from './Button.module.css';

interface IButtonProps {
    onClickHandler: () => void;
    children: string | ReactNode;
    buttonClasses?: string[];
    style?: { [key: string] : any };
}
const Button = (props: IButtonProps) => {

    const {
        buttonClasses,
        children,
        onClickHandler,
        style,
    } = props;

    const parseClasses = () => {
        const classNames = buttonClasses && buttonClasses.length > 0 ? 
        `${buttonClasses.join(' ')} ${classes.Button}` : classes.Button;
        return classNames;
    }
    return (
        <button
            className={parseClasses()}
            type='button'
            role='buton'
            onClick={onClickHandler}
            style={{...style}}
        >
            {children}
        </button>
    )

};

Button.defaultProps = {
    children: '',
    onClickHandler: () => {},
};

export default Button;