import "./Home.scss";
import Jassteena from "../../assets/images/profile-photo-small.png";

function Home() {
    return (
        <main>
            <div className="home__headline">
                You want change?
            </div>
            <div className="home__subheadline">
                Transform Your Life, Overcome Challenges and Achieve Your Goals Now.
            </div>
            <div className="welcome">
                {/* <div className="welcome__intro-profile-container"> */}
                    <div className="welcome__introduction">
                        <span className="welcome__greeting">Hi!</span>
                        I'm Jassteena from Empowerment Voyage.   I am a board certified Clinical Hypnotherapist.  I help people feel better fast.  &nbsp;
                    </div>
                    <div className="welcome__profile">
                        <img className="profile__photo" src={Jassteena} alt="Hypnotherapist"></img>
                    </div>
                {/* </div> */}
                <div className="welcome__hypnosis">
                    I help you harness the power of your mind to create lasting, positive change.  Whether you're looking to overcome anxiety, break bad habits, improve your confidence, or achieve personal growth, my services are designed to support you every step of the way.
                </div>
            </div>
            <div className="home__why-title">
                Why choose Hypnotherapy?
            </div> 
            <ul className="home__benefits">
                <li>
                    <span className="home__benefits-title">Effective Solutions:</span> 
                    Hypnotherapy has been proven to help with a wide range of issues, from stress management to habit control.
                </li>
                <li>
                    <span className="home__benefits-title">Personalized Approach:</span>
                    Sessions are tailored to meet your unique needs and goals.
                </li>
                <li>
                    <span className="home__benefits-title">Safe and Natural:</span>
                    Hypnotherapy is a safe, drug-free way to achieve mental and emotional well-being.
                </li>
                <li>
                    <span className="home__benefits-title">Long-lasting Results:</span>
                    Experience profound and enduring changes in your thoughts, behaviors, and overall quality of life.
                </li>
            </ul>

        </main>
    )

}

export default Home;