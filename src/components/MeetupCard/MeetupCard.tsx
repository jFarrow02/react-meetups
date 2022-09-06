import { Button } from '../index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faListAlt,
    faEdit,
    faTrashCan,
    faSave,
    faPlusSquare
} from '@fortawesome/free-regular-svg-icons';
import { useIsMobileView } from '../../hooks';
import { IMeetup } from '../../interfaces';
import classes from './MeetupCard.module.css';

interface IMeetupCardProps {
    meetup: IMeetup;
}

const MeetupCard = (props:IMeetupCardProps) => {
    const isMobileView = useIsMobileView();

    const handleClick = () => {
        console.log('clicked');
    };

    const { 
        meetup: {
            description,
            title,
            date,
            time,
            city,
            stateProvince,
            country,
            id,
            imgUrl,
            streetAddress,
        }
    } = props;

    const buttons = (
        <>
            <div>
                <Button
                    buttonClasses={[classes.meetupButton]}
                    onClickHandler={handleClick}
                >
                    <FontAwesomeIcon icon={faListAlt} size='2x'/>
                </Button>
            </div>
            <div>
                <Button
                    buttonClasses={[classes.meetupButton]}
                    onClickHandler={handleClick}
                >
                    <FontAwesomeIcon icon={faEdit} size='2x'/>
                </Button>
            </div>
            <div>
                <Button
                    buttonClasses={[classes.meetupButton]}
                    onClickHandler={handleClick}
                >
                    <FontAwesomeIcon icon={faTrashCan} size='2x'/>
                </Button>
            </div>
        </>
    );

    return (
        <div className={isMobileView ? classes.MeetupCardMobile : classes.MeetupCard} style={{ backgroundImage: `url("${imgUrl}")`}}>
            <div className={isMobileView ? classes.meetupInfoMobile : classes.meetupInfo}>
                <div className={isMobileView ? classes.meetupDetailsMobile : classes.meetupDetails}>
                    <div>
                        <p className={classes.meetupHeader}>{title}</p>
                        { isMobileView && (
                            <div className={classes.buttonContainerMobile}>
                                {buttons}
                            </div>
                        )}
                    </div>
                    <div className={
                            isMobileView ? classes.detailsContainerMobile : 
                            classes.detailsContainer
                        }
                    >
                        <div>
                            <p>{date} {time}</p>
                            <p>{streetAddress}</p>
                            <p>{city}, {stateProvince}</p>
                            <p>{country}</p>
                        </div>
                        { !isMobileView && (
                            <div className={classes.buttonContainer}>
                                {buttons}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MeetupCard;