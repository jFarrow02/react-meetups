import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
  } from 'react-router-dom';
import CONFIG from '../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
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

    // const navigate = useNavigate();

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
        </section>
    )
};

export default AppContent;