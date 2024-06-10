import "./Prelude.scss";

function Prelude({setStartLearning}) {
    const startLearningNow = () => {
        setStartLearning(true);
    }

    return (
        <section className="welcome-section">
            <h1 className="welcome__title">Welcome</h1>

            <div className="welcome__prelude">
                After completing this mini-course, you will feel more confident, having the basic understanding of hypnosis and what's to come after you book a hypnosis session with me.
            </div>
            <div className="welcome__prelude">
            The content is divided into easily digestible portions across three categories: facts, myths, and 'Did You Know' 
            </div>
            <div className="welcome__prelude">
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