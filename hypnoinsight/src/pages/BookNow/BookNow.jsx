import { useState } from "react";
import "./BookNow.scss";
import HypnoInsights from "../../components/HypnoInsights/HypnoInsight";

function Booknow() {
    const [moduleOpen, setModuleOpen] = useState(false);
    const [isOverlayActive, setIsOverlayActive] = useState('overlay hide');

     const startModule = () => {
        setModuleOpen(true);
        setIsOverlayActive('overlay show');
     };

     const closeModule = () => {
        setModuleOpen(false);
        setIsOverlayActive('overlay hide');
     }

    return (
        <main>
            <h1>Book Now</h1>
            <div className="module-intro-container">
                <div>
                Complete this Understanding Hypnosis mini-course to answer your questions, dispell myths and learn interesting facts about hypnosis.   After going through this mini-course, you'll better understand if you are ready for hypnosis now to achieve your goals and if hypnosis is right for you at this time.
                </div>
                <button 
                    className="start-module"
                    onClick={startModule}
                >
                    Understanding Hypnosis
                </button>
                <div className="hypno-insight">
                    {moduleOpen && <HypnoInsights closeModule={closeModule}/> }
                </div>
            </div>

            <div 
                className={ isOverlayActive } >
            </div>
        </main>
    )

}

export default Booknow;