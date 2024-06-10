import "./InterestsForm.scss";
import axios from "axios";
import { useState, useEffect } from "react";

function InterestsForm ({ setStartUser, setShowInterests, setShowPrelude, closeModule }) {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [interests, setInterests] = useState([]);
    const [checkedInterests, setCheckedInterests] = useState([]);
    const [interestError, setInterestError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (checkedInterests.length === 0) {
            setInterestError(true);
        } else {
            setInterestError(false);
            prepInterests();
            setStartUser(false);
            setShowInterests(false);
            setShowPrelude(true)
        }
    }

    const handleOnChange = (e) => {
        if (e.target.checked) {
            setCheckedInterests([...checkedInterests, e.target.value]);
         } else {
            setCheckedInterests(checkedInterests.filter((item) => item !== e.target.value));
         }
    }

    const prepInterests = async () => {
        let newInterestObj = {};

        /********
         *  Need to update to get user_id
         ******/
        for (const interest in checkedInterests) {
            newInterestObj = {
                user_id: 1,
                interest_id: checkedInterests[interest]
            }
            saveInterests(newInterestObj);
        }
    }

    const saveInterests = async (obj) => {
          try {
            await axios.post(SERVER_URL + '/user-interests', obj);
            
        } catch (error) {
            console.error(`Could not add user interest: ${error}`);
         }
    }

    useEffect(() => {
        const getInterests = async () => {
            try {
                const response = await axios.get(SERVER_URL + "/interests")
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
            <form className="interests__form" onSubmit={handleSubmit}>
                <div className="form__instructions">
                    What are you interested in getting help with?
                </div>
                <div className={(interestError ? ' interests__error' : 'interests__message')}>
                    Please select at least one interest.
                </div>
                <div className="interests__list">
                {
                    interests.map(({interest, id}) => (
                        <div className="interests__interest-container" key={id}>
                            <input 
                                type="checkbox" 
                                id={`interest-${id}`}
                                className="interests__interest"
                                name={interest}
                                value={id}
                                onChange={handleOnChange}
                            />
                            <label htmlFor={interest}>{interest}</label>
                        </div>
                    ))
                }
                </div>
                <div className="form__buttons">
                    <button 
                        className="form__cancel"
                        onClick={closeModule}>
                        Cancel
                    </button>
                    <button 
                        className="form__begin">
                        Next
                    </button>
                </div>
            </form>
        </section>
    )
}

export default InterestsForm;