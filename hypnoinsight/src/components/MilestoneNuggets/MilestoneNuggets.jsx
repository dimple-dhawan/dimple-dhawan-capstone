import "./MilestoneNuggets.scss";

function MilestoneNuggets ({factsCompleted}) {
    return (
        <section className="milestone">
            <div className="milestone__facts">
                <h2>Congratulations!</h2>
                <div className="milestone__completed-text"> 
                    You have completed the Hypnosis 'Did You "Know' module and that concludes this mini-course on Understanding Hypnosis.
                </div>
                <div className="milestone__continue-text"> 
                    If you are ready and willing for change now through hypnosis to achieve your goals, please setup a consultation with me or send me an <a className="email" href="mailto:jassteena@empowermentVoyage.com">email</a> and mention the code '<span className="completion-code">READYNOW2024</span>'.
                </div>
                <div className="milestone__next-text">
                    
                </div>
            </div>
        </section>
    )
}

export default MilestoneNuggets;