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
            <h2 className="booknow__subheadline">Welcome to Your Hypnotherapy Journey</h2>
            <div className="module-intro__container">
                <div className="module-intro__text">
                Before we begin our transformative sessions, it's important to understand what hypnosis is and how it works. Our "Understanding Hypnosis" pre-talk module is designed to guide you through the basics, dispel common myths, and prepare you for a successful hypnotherapy experience.
                </div>
                <div 
                    className="start-module"
                    onClick={startModule}
                >
                    UNDERSTANDING HYPNOSIS
                </div>
                <div className="module-intro__subtitle">
                    What You'll Discover:
                </div>
                <div className="module-intro__discover">
                    <ul>
                        <li>The Fundamentals of Hypnosis: Learn what hypnosis truly is and how it can be a powerful tool for change.</li>
                        <li>Common Concerns: Get answers to frequently asked questions and clear up any misconceptions.</li>
                    </ul>
                </div>
                <div className="module-intro__subtitle">
                    Why This Pre-Talk is Essential:
                </div>
                <div>
                    Understanding the principles and process of hypnosis will help you feel more comfortable and confident as we begin our work together. This module aims to empower you with knowledge, ensuring you’re fully prepared to harness the benefits of hypnotherapy.
                </div>
                <div className="module-intro__subtitle">
                    Ready to Get Started?
                </div>
                <div>
                    Click below to begin the Understanding Hypnosis module and embark on the path to a better you.
                </div>
                <div 
                    className="start-module"
                    onClick={startModule}
                >
                    UNDERSTANDING HYPNOSIS
                </div>
                <div className="hypno-insight">
                    {moduleOpen && <HypnoInsights closeModule={closeModule}/> }
                </div>
            </div>
            <div className="consult__text">
                Click below when you are ready to book your consultation
            </div>
            <div className="consult__link">BOOK CONSULTATION</div>
            <div 
                className={ isOverlayActive } >
            </div>
        </main>
    )

}

export default Booknow;