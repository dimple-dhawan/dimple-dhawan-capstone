import "./MilestoneFacts.scss";

function MilestoneFacts ({factsCompleted}) {
    return (
        <section className="milestone">
            <div className="milestone__facts">
                <h2>Well done!</h2>
                <div className="milestone__completed-text"> 
                    You have completed the Hypnosis Facts module. 
                </div>
                <div className="milestone__continue-text"> 
                    Next up is Hypnosis Myths.  Keep learning!   
                </div>
            </div>
        </section>
    )
}

export default MilestoneFacts;