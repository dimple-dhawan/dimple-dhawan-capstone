import "./Stars.scss";
import grayStar from "../../assets/icons/icon-gray-star-32.png";
import yellowStar from "../../assets/icons/icon-star-32.png";

function Stars ({factsCompleted, mythsCompleted, nuggetCompleted}) {    
    const progress = (isCompleted) => {
        if (isCompleted) {
            return yellowStar;
        } else {
            return grayStar;
        }
    }

    return (
        <section>
            <div className="stars">
                <img className="stars__star" src={ progress(factsCompleted) } alt="Facts progress"/>
                <img className="stars__star"  src={ progress(mythsCompleted) }  alt=" Myths progress"/>
                <img className="stars__star" src={ progress(nuggetCompleted) } alt="Did You Know progress"/>
            </div>
        </section>
    )
}

export default Stars;