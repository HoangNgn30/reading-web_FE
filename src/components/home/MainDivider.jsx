import Activity from '../activity/Activity';
import StarBackgound from '../background/StarBackground';
import Contact from '../contact/Contact';
import Introduce from '../introduce/Introduce';
import MainContent from '../main-content/MainContent';

function MainDivider() {
    return (
        <div className="w-full">
            <div className="felx flex-col">
                <MainContent></MainContent>
                <div className="absolute w-full">
                    <Introduce />
                    <StarBackgound />
                    <Activity />
                    <Contact />
                </div>
            </div>
        </div>
    );
}

export default MainDivider;
