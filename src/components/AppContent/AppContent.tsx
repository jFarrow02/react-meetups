import {
    BrowserRouter,
    Routes,
    Route
  } from 'react-router-dom';
import CONFIG from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import {
    AddMeetupView,
    AllMeetupsView,
    Button,
    EditMeetupView,
    MeetupDetailsView,
} from '../index';
import classes from './AppContent.module.css';


const { 
    ROUTES: {
        newMeetup,
        allMeetups,
    }
} = CONFIG;

const AppContent = () => {

    const handleClick = () => {
    };

    return (
        <section className={classes.AppContent}>
            <BrowserRouter>
                <Routes>
                    <Route path={allMeetups.path} element={<AllMeetupsView/>} />
                </Routes>
                <Routes>
                    <Route path={'/edit/:id'} element={<EditMeetupView/>} />
                </Routes>
                <Routes>
                    <Route path={'/details/:id'} element={<MeetupDetailsView/>} />
                </Routes>
                <Routes>
                    <Route path={newMeetup.path} element={<AddMeetupView/>} />
                </Routes>
            </BrowserRouter>
            <div className={classes.buttonContainer}>
                <Button
                    buttonClasses={[classes.newMeetupButton]}
                    onClickHandler={handleClick}
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
        </section>
    )
};

export default AppContent;