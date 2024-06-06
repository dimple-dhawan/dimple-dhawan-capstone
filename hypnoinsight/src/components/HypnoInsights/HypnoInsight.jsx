import "./Hypnoinsights.scss";
import LearningModule from "../LearningModule/LearningModule";

function HypnoInsights({closeModule}) {
    const close = () => {
        closeModule();
    }

    return (
        <section className="container">
            <div 
                className="close-button"
                onClick={close}>
                X
            </div>
            <LearningModule />
        </section>
    )
}

export default HypnoInsights;