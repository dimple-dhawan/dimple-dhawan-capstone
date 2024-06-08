import "./LearningModule.scss";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Stars from "../Stars/Stars";
import MilestoneFacts from "../MilestoneFacts/MilestoneFacts";
import MilestoneMyths from "../MilestoneMyths/MilestoneMyths";
import MilestoneNuggets from "../MilestoneNuggets/MilestoneNuggets";

function LearningModule({close}) {
    const [factPage, setFactPage] = useState(0);
    const [mythPage, setMythPage] = useState(0);
    const [nuggetPage, setNuggetPage] = useState(0);

    const [hypnosisFacts, setHypnosisFacts] = useState([]);
    const [hypnosisMyths, setHypnosisMyths] = useState([]);
    const [hypnosisNuggets, setHypnosisNuggets] = useState([]);

    const [factsCompleted, setFactsCompleted] = useState(false);
    const [mythsCompleted, setMythsCompleted] = useState(false);
    const [nuggetCompleted, setNuggetsCompleted] = useState(false);

    const [showFacts, setShowFacts] = useState(true);
    const [showMyths, setShowMyths] = useState(false);
    const [showNuggets, setShowNuggets] = useState(false);

    const [celebrateFactsMilestone, setCelebrateFactsMilestone] = useState(false);
    const [celebrateMythsMilestone, setCelebrateMythsMilestone] = useState(false);
    const [celebrateNuggetsMilestone, setCelebrateNuggetsMilestone] = useState(false);

    const [category, setCategory] = useState(0);
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
    
    const nextNuggetPage = ()  => {
        setNuggetPage(nuggetPage+1);
    }

    const factsCongrats = ()  => {
        setShowFacts(false);
        setCelebrateFactsMilestone(true);
        setCategory(category+1);
    }

    const mythsCongrats = ()  => {
        setShowMyths(false);
        setCelebrateMythsMilestone(true);
        setCategory(category+1);
    }

    const nuggetCongrats = ()  => {
        setShowNuggets(false);
        setCelebrateNuggetsMilestone(true);
    }

    const startHypnosisMythsModule = () => {
        setCelebrateFactsMilestone(false);
        setShowMyths(true);
    }

    const startHypnosisNuggetsModule = () => {
        setCelebrateMythsMilestone(false);
        setShowMyths(false);
        setShowNuggets(true);
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

    const isLastNugget = () => {
        if (nuggetPage >= (hypnosisNuggets.length-1)) {
            if (!nuggetCompleted) {
                setNuggetsCompleted(true);
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
                startHypnosisNuggetsModule();
            }
        }

        if (!showMyths) {
            if (isLastNugget() && showNuggets) {
                nuggetCongrats();
            } else if (!isLastNugget() && showNuggets ) {
                nextNuggetPage();
            } else if (isLastNugget() && !showNuggets) {
                close();
            }
        }
    }

    const completedModule = () => {
        return !showFacts && !showMyths && !showNuggets;
    }

    useEffect(() => {
        const getFacts = async () => {
            try {
                const response = await axios.get(SERVER_URL + '/facts');
                setHypnosisFacts(response.data);
            } catch (error) {
                console.error("Unable to get facts module data", error)
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
                console.error("Unable to get myths module data", error)
            }
        }
        getMyths();
    }, [SERVER_URL, setHypnosisMyths]);

    useEffect(() => {
        const getNuggets = async () => {
            try {
                const response = await axios.get(SERVER_URL + '/did-you-know');
                setHypnosisNuggets(response.data);
            } catch (error) {
                console.error("Unable to get nuggets module data", error)
            }
        }
        getNuggets();
    }, [SERVER_URL, setHypnosisMyths]);

    if (hypnosisFacts.length === 0 || hypnosisMyths.length === 0 || hypnosisNuggets.length === 0) {
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

            <h1 className={"showCategory" + ((showFacts || showMyths || showNuggets) ? '' : ' hide-category') } >
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

             <div className={"showNuggets" + (showNuggets ? '' : ' hide-nuggets' )} >
                <div className="learn__statement">
                    { hypnosisNuggets[nuggetPage].statement }
                </div>
                <div className="learn__details">
                    { hypnosisNuggets[nuggetPage].details }
                </div>
                <div className="learn__details">
                    { hypnosisNuggets[nuggetPage].details1 }
                </div>
             </div>

             { celebrateFactsMilestone && <MilestoneFacts /> }
             { celebrateMythsMilestone && <MilestoneMyths /> }
             { celebrateNuggetsMilestone && <MilestoneNuggets /> }

            <div className="btn">
                <div 
                    className="btn__next"
                    onClick={ nextStep }
                >
                    {completedModule() ? "Close" : "Next" }
                </div>
            </div>
        </section>
    )
}

export default LearningModule;