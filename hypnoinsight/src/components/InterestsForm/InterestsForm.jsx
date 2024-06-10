import "./InterestsForm.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function InterestsForm () {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/interests';
    const [interests, setInterests] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log ("in handleSubmit");
    }

    useEffect(() => {
        const getInterests = async () => {
            try {
                const response = await axios.get(SERVER_URL)
                    setInterests(response.data);
            } catch (error) {
                console.error("Unable to get interests", error)
            }
        }
        getInterests();
    }, [SERVER_URL]);

    if (interests.length === 0 ) {
        return "Loading...";
    }

    return (
        <section>
            <h2>Interests</h2>
            <form className="interests-form" onSubmit={handleSubmit}>
                <div className="form__instructions">
                    What are you interested in getting help with?
                </div>
                    {
                        interests.map(({interest, id}) => (
                             <div key={id}>
                                <input 
                                    type="checkbox" 
                                    id={`interest-${id}`}
                                    name={interest}
                                    value={interest}
                                />
                                <label htmlFor={interest}>{interest}</label>
                            </div>
                        ))
                                



                    }

            </form>

        </section>
    )
}

export default InterestsForm;