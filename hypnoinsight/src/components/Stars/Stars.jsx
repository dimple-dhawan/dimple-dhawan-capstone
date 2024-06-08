import "./Stars.scss";
import grayStar from "../../assets/icons/icon-gray-star-32.png";
import yellowStar from "../../assets/icons/icon-star-32.png";

function Stars ({factsCompleted}) {
    const factsProgress = () => {
        if (factsCompleted) {
            return yellowStar;
        } else {
            return grayStar;
        }
    }
    return (
        <section>
            <div className="stars">
                <img className="stars__star" src={ factsProgress() } alt="Facts progress"/>
                <img className="stars__star"  src={ grayStar }  alt=" Myths progress"/>
                <img className="stars__star" src={ grayStar } alt="Did You Know progress"/>
            </div>
        </section>
    )
}

export default Stars;