import { IMeetup } from '../../interfaces';
import classes from './MeetupCard.module.css';

interface IMeetupCardProps {
    meetup: IMeetup;
}

const MeetupCard = (props:IMeetupCardProps) => {
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
        <div className={classes.MeetupCard}>
            <p className={classes.meetupHeader}>{title}</p>
            <img src={imgUrl} alt={title} className={classes.meetupImg} />
            <p>{description}</p>
        </div>
    )
};

export default MeetupCard;