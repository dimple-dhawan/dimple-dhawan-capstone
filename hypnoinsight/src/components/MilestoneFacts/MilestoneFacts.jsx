import "./MilestoneFacts.scss";

function MilestoneFacts ({factsCompleted}) {
    return (
        <section className="milestone">
            <div className="milestone__facts">
                <h1 className="milestone__celebrate-title">Well done!</h1>
                <div className="milestone__celebrate-text"> 
                    You have completed the Hypnosis Facts module. 
                </div>
                <div className="milestone__celebrate-text"> 
                    Next up is Hypnosis Myths.  Keep learning!   
                </div>
            </div>
        </section>
    )
}

export default MilestoneFacts;