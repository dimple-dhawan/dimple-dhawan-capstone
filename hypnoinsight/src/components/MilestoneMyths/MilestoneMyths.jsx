import "./MilestoneMyths.scss";

function MilestoneMyths ({factsCompleted}) {
    return (
        <section className="milestone">
            <div className="milestone__facts">
                <h2>Bravo!</h2>
                <div className="milestone__completed-text"> 
                    You have completed the Hypnosis Myths module. 
                </div>
                <div className="milestone__continue-text"> 
                    One more module to go!  You are one module away from feeling even more confident that you are ready to achieve your goals through hypnosis and that hypnosis is right for you now.
                </div>
                <div>
                    Now, Next up is Hypnosis `Did You Know`.   Keep learning!
                </div>
            </div>
        </section>
    )
}

export default MilestoneMyths;