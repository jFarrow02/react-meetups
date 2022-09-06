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
        }
    } = props;

    return (
        <div className={isMobileView ? classes.MeetupCardMobile : classes.MeetupCard} style={{ backgroundImage: `url("${imgUrl}")`}}>
            <div className={isMobileView ? classes.meetupInfoMobile : classes.meetupInfo}>
                <p className={classes.meetupHeader}>{title}</p>
                <p>{description}</p>
            </div>
            {/* <img src={imgUrl} alt={title} className={classes.meetupImg} /> */}
           
        </div>
    )
};

export default MeetupCard;