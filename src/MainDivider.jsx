import Advantage from './advantage/Advantage';
import StarBackgound from './background/StarBackground';
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
                </div>
            </div>
        </div>
    );
}

export default MainDivider;
