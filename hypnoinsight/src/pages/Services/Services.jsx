import "./Services.scss";
import Lotus from "../../assets/images/lotus.jpg";

function Services() {
    return (
        <main>            
            <div className="services__headline">
                Ready for a Better You?
            </div>
            <div className="services__subheadline">
                Transform your life with our expert hypnosis services.
            </div>
            <div services_introduction>
                We provide customized hypnosis programs to help you achieve a variety of personal goals, from quitting smoking and losing weight to managing stress and improving sleep. Start your journey to a better you with us today.
            </div>

            <div className="services__subtitle">
                What can hypnotherapy help me with?
            </div>

            <div className="services-list__container">
                <div className="services-list__image-container">
                    <img className="services-list__image" src={Lotus} alt="lotus, mental clarity" />
                </div>
                <div className="services-list">

                    <div className="services-list__overview">
                        Some common areas of focus include: 
                    </div>
                    <ul className="services-list__items">
                        <li>Fear and anxiety</li>
                        <li>Smoking Cessation</li>
                        <li>Weight Release</li>
                        <li>Limiting beliefs</li>
                        <li>Stress reduction</li>
                        <li>Confidence and self-esteem</li>
                        <li>Chronic pain</li>
                        <li>Changing habits</li>
                        <li>Transforming core beliefs</li>
                        <li>Forgiveness and letting go</li>
                        <li>Exploring and accessing insight and inner wisdom </li>
                        <li>Moving through sticky thoughts or feelings</li>
                        <li>Decision Making</li>
                    </ul>
                </div>
            </div>
        </main>
    )

}

export default Services;