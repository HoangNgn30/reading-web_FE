import Advantage from './advantage/Advantage';
import StarBackgound from './background/StarBackground';
import Contact from './contact/Contact';
import Department from './department/Department';
import Introduce from './introduce/Introduce';
import MainContent from './main-content/MainContent';

function MainDivider() {
    return (
        <div className="w-full">
            <div className="felx flex-col">
                <MainContent></MainContent>
                <div className="absolute">
                    <Introduce />
                    <StarBackgound />
                    <Advantage />
                    <Department/>
                    <Contact/>
                </div>
            </div>
        </div>
    );
}

export default MainDivider;
