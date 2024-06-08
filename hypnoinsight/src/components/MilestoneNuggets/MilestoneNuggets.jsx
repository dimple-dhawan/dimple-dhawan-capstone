import "./MilestoneNuggets.scss";

function MilestoneNuggets ({factsCompleted}) {
    return (
        <section className="milestone">
            <div className="milestone__facts">
                <h2 className="milestone__celebrate-title">Congratulations!</h2>
                <div className="milestone__celebrate-text"> 
                    You have completed the mini-course on Understanding Hypnosis.
                </div>
                <div className="milestone__celebrate-text"> 
                    If you are ready for change now to achieve your goals, please setup a consultation with me or send me an <a className="email" href="mailto:jassteena@empowermentVoyage.com">email</a> and mention the code '<span className="completion-code">READYNOW2024</span>'.
                </div>
            </div>
        </section>
    )
}

export default MilestoneNuggets;