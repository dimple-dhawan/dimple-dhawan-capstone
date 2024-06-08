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
                    You are one module away from feeling even more confident that you are ready to achieve your goals through hypnosis now.
                </div>
                <div className="milestone__next-text">
                    Next up is Hypnosis `Did You Know`.   Keep learning!
                </div>
            </div>
        </section>
    )
}

export default MilestoneMyths;