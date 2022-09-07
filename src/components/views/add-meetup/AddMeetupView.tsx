import { NavButtonContainer } from '../../index';
import classes from './AddMeetupView.module.css';

const AddMeetupView = () => {

    return (
        <section className={classes.AddMeetupView}>
            Add Meetup
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

export default AddMeetupView;