import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListAlt, faEdit, faTrashCan, faSave, faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { useIsMobileView } from '../../../hooks';
import { IMeetup } from '../../../interfaces';
import { Button, MeetupCard } from '../../index';
import Pelci from '../../../images/pelci-panoramio.jpg';
import classes from './AllMeetupsView.module.css';

const FAKE_MEETUP: IMeetup = {
    id: '-1',
    description: 'Lorem ipsum dolor sit amet, aperiam aliquam in nec, dicat eleifend ea his. Nam at alii liber everti, illum similique philosophia vis an. Populo essent nusquam in vix, ut ornatus qualisque deterruisset per, et vel melius evertitur abhorreant. Ut ubique oblique recusabo ius. Qui nonumy bonorum consequat et. Vix ad dolorem consequat, sea eu mediocrem eloquentiam, vel ad numquam fastidii.',
    title: 'Fake Meetup',
    stateProvince: 'CA',
    city: 'Pomona',
    date: '2022-09-05',
    time: '12:00 EST',
    imgUrl: Pelci,
    country: 'United States',
    streetAddress: '1234 Main Street',
}

const AllMeetupsView = () => {

    const isMobileView = useIsMobileView();

    const handleClick = () => {
        console.log('clicked');
    };

    return (
        <div className={classes.meetupsContainer}>
            <section 
                className={
                    isMobileView ? classes.AllMeetupsViewMobile : classes.AllMeetupsView
                }
            >
                { [
                    FAKE_MEETUP,
                    FAKE_MEETUP, 
                    FAKE_MEETUP
                ].map((meetup: IMeetup) => <MeetupCard key={`meetup-${meetup.id}`} meetup={meetup}/>)}
            </section>
        </div>
        
    )
};

export default AllMeetupsView;