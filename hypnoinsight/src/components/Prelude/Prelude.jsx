import "./Prelude.scss";

function Prelude({setStartLearning}) {
    const startLearningNow = () => {
        setStartLearning(true);
    }

    return (
        <section className="welcome-section">
            <h2>Welcome</h2>

            <div className="welcome-module">
                After completing this mini-course, you will feel more confident, having the basic understanding of hypnosis and what's to come after you book a hypnosis session with me.
            </div>
            <div className="welcome">
            The content is divided into easily digestible portions across three categories: facts, myths, and 'Did You Know' 
            </div>
            <div className="welcome-module">
                Enjoy!
            </div>
            <div className="btn">
                <div 
                    className="btn__start-learning"
                    onClick={startLearningNow}
                >
                    Begin
                </div>
                
            </div>
        </section>
    )
}

export default Prelude;