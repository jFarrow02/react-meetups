import { useIsMobileView } from '../../hooks';
import { AppContent, Header } from '../index';
import classes from './Layout.module.css';

const Layout = () => {

    const isMobileView = useIsMobileView();

    return (
        <div className={classes.Layout}>
            <div className={classes.header}>
                <Header/>
            </div>
            
            <div className={classes.appContent}>
                <div className={ isMobileView ? classes.appContentContainerMobile : classes.appContentContainer }>
                    <AppContent/>
                </div>
            </div>
        </div>
    )
};

export default Layout;