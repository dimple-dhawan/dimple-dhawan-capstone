import "./Stars.scss";
import grayStar from "../../assets/icons/icon-gray-star-32.png";
import yellowStar from "../../assets/icons/icon-star-32.png";

function Stars ({factsCompleted, mythsCompleted, nuggetCompleted}) {
    const progress = () => {
        if (factsCompleted || mythsCompleted || nuggetCompleted) {
            return yellowStar;
        } else {
            return grayStar;
        }
    }
    return (
        <section>
            <div className="stars">
                <img className="stars__star" src={ progress() } alt="Facts progress"/>
                <img className="stars__star"  src={ progress() }  alt=" Myths progress"/>
                <img className="stars__star" src={ progress() } alt="Did You Know progress"/>
            </div>
        </section>
    )
}

export default Stars;