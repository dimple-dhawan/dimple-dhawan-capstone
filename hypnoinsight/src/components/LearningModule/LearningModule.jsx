import "./LearningModule.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from "../Stars/Stars";
import MilestoneFacts from "../MilestoneFacts/MilestoneFacts";
import MilestoneMyths from "../MilestoneMyths/MilestoneMyths";

function LearningModule() {
    const [factPage, setFactPage] = useState(0);
    const [mythPage, setMythPage] = useState(0);
    const [hypnosisFacts, setHypnosisFacts] = useState([]);
    const [hypnosisMyths, setHypnosisMyths] = useState([]);
    const [category, setCategory] = useState(0);
    const [progress, setProgress] = useState(0);
    const [factsCompleted, setFactsCompleted] = useState(false);
    const [mythsCompleted, setMythsCompleted] = useState(false);
    const [nuggetCompleted, setNuggetCompleted] = useState(false);

    const [showFacts, setShowFacts] = useState(true);
    const [showMyths, setShowMyths] = useState(false);

    const [celebrateFactsMilestone, setCelebrateFactsMilestone] = useState(false);
    const [celebrateMythsMilestone, setCelebrateMythsMilestone] = useState(false);
 
    const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/hypno-insight';

    const categories = [
        'Facts',
        'Myths',
        'Did you know'
    ]

    const nextFactPage = ()  => {
        setFactPage(factPage+1);
    }

    const nextMythPage = ()  => {
        setMythPage(mythPage+1);
    }
    
    const factsCongrats = ()  => {
        setShowFacts(false);
        setCelebrateFactsMilestone(true);
        setCategory(category+1);
    }

    const startHypnosisMythsModule = () => {
        setCelebrateFactsMilestone(false);
        setShowMyths(true);
    }

    const mythsCongrats = ()  => {
        setShowMyths(false);
        setCelebrateMythsMilestone(true);
        setCategory(category+1);
    }

    const isLastFact = () => {
        if (factPage >= (hypnosisFacts.length-1)) {
            if (!factsCompleted) {
                setFactsCompleted(true);
            }
            return true;
        } else {
            return false;
        }
    };

    const isLastMyth = () => {
        if (mythPage >= (hypnosisMyths.length-1)) {
            if (!mythsCompleted) {
                setMythsCompleted(true);
            }
            return true;
        } else {
            return false;
        }
    };

    const nextStep = () => {
        if (isLastFact() && showFacts) {
            factsCongrats();
        } else if (!isLastFact() && showFacts ) {
            nextFactPage(); 
        } else if (isLastFact && !showFacts) {
            startHypnosisMythsModule();
        }

        if (!showFacts) {
            if (isLastMyth() && showMyths) {
                mythsCongrats();
            } else if (!isLastMyth() && showMyths ) {
                nextMythPage();
            } else if (isLastMyth() && !showMyths) {
                console.log ("myths 3");
            }
        }
    }

    useEffect(() => {
        const getFacts = async () => {
            try {
                const response = await axios.get(SERVER_URL + '/facts');
                setHypnosisFacts(response.data);
            } catch (error) {
                console.error("Unable to get module data", error)
            }
        }
        getFacts();
    }, [SERVER_URL, hypnosisFacts]);

    useEffect(() => {
        const getMyths = async () => {
            try {
                const response = await axios.get(SERVER_URL + '/myths');
                setHypnosisMyths(response.data);
            } catch (error) {
                console.error("Unable to get module data", error)
            }
        }
        getMyths();
    }, [SERVER_URL, setHypnosisMyths]);


    if (hypnosisFacts.length === 0 || hypnosisMyths.length === 0) {
        return "Loading...";
    }

    return (
        <section className="learn">
            <div className="star-progress">
                <Stars 
                    factsCompleted={factsCompleted} 
                    mythsCompleted={mythsCompleted} 
                    nuggetCompleted={nuggetCompleted} 
                />
            </div>

            <h1 className={"showCategory" + ((showFacts || showMyths) ? '' : ' hide-category') } >
                { categories[category] }
            </h1>

            <div className={"showFacts" + (showFacts ? '' : ' hide-facts' )} >
                <div className="learn__statement">
                    { hypnosisFacts[factPage].statement }
                </div>
                <div className="learn__details">
                    { hypnosisFacts[factPage].details }
                </div>
                <div className="learn__details">
                    { hypnosisFacts[factPage].details1 }
                </div>
             </div>

             <div className={"showMyths" + (showMyths ? '' : ' hide-myths' )} >
                <div className="learn__statement">
                    { hypnosisMyths[mythPage].statement }
                </div>
                <div className="learn__details">
                    { hypnosisMyths[mythPage].details }
                </div>
                <div className="learn__details">
                    { hypnosisMyths[mythPage].details1 }
                </div>
             </div>

             { celebrateFactsMilestone && <MilestoneFacts /> }
             { celebrateMythsMilestone && <MilestoneMyths /> }

            <div className="btn">
                <div 
                    className="btn__next"
                    onClick={ nextStep }
                >
                    Next
                </div>
            </div>





        </section>
    )
}

export default LearningModule;