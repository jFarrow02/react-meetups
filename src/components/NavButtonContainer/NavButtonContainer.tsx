import { useNavigate } from 'react-router-dom';
import { Button } from '../index';
import CONFIG from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import classes from './NavButtonContainer.module.css';

const { ROUTES: { allMeetups, newMeetup } } = CONFIG;

interface INavButtonContainerProps {
    containerStyles?: { [key: string ] : any };
}

const NavButtonContainer = (props: INavButtonContainerProps) => {

    const navigate = useNavigate();

    return (
        <div className={classes.NavButtonContainer} style={{...props.containerStyles}}>
             <Button
                onClickHandler={() => { navigate(allMeetups.path)}}
             >
                <FontAwesomeIcon icon={faHouse} size='1x'/>
            </Button>
            <Button
                buttonClasses={[classes.newMeetupButton]}
                onClickHandler={() => { navigate(newMeetup.path)}}
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
    );
};

NavButtonContainer.defaultProps = {
    containerStyles: {},
};

export default NavButtonContainer;