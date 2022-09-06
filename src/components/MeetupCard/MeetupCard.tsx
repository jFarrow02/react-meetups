import { useIsMobileView } from '../../hooks';
import { IMeetup } from '../../interfaces';
import classes from './MeetupCard.module.css';

interface IMeetupCardProps {
    meetup: IMeetup;
}

const MeetupCard = (props:IMeetupCardProps) => {
    const isMobileView = useIsMobileView();

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

    return (
        <div className={isMobileView ? classes.MeetupCardMobile : classes.MeetupCard} style={{ backgroundImage: `url("${imgUrl}")`}}>
            <div className={isMobileView ? classes.meetupInfoMobile : classes.meetupInfo}>
                <div className={isMobileView ? classes.meetupDetailsMobile : classes.meetupDetails}>
                    <div><p className={classes.meetupHeader}>{title}</p></div>
                    <div>
                        <p>{date} {time}</p>
                        <p>{streetAddress}</p>
                        <p>{city}, {stateProvince}</p>
                        <p>{country}</p>  
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MeetupCard;