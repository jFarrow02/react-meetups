import { NavButtonContainer } from '../..';
import classes from './EditMeetupView.module.css';

const EditMeetupView = () => {

    return (
        <section className={classes.EditMeetupView}>
            Edit Meetup
            <NavButtonContainer containerStyles={
                { 
                    position: 'fixed', 
                    bottom: '15px',
                    right: '15px',
                    zIndex: '6',
                }
            }/>
        </section>
    )
};

export default EditMeetupView;