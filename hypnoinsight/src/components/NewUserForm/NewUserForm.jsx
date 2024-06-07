import { useState } from "react";
import "./NewUserForm.scss";
import axios from "axios";

function NewUserForm({setStartUser, closeModule}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isServerError, setIsServerERror] = useState(false);
    const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/users';

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isValid()) {
            saveNewUser();
        }
    }

    const saveNewUser = async () => {
        const newUserObj = {
            first_name: firstName,
            last_name: lastName,
            email: email
        }

        try {
            await axios.post(SERVER_URL, newUserObj)
            .then(() => {
                setStartUser(false);
            });
            
        } catch (error) {
            console.error(`Could not add new user: ${error}`);
            setIsServerERror(true);
        }
    }

    const isValid = () => {
        let valid = true;
        resetErrors();

        if (firstName === '') {
            setFirstNameError(true);
            valid = false;
        }

        if (lastName === '') {
            setLastNameError(true);
            valid = false;
        }

        if (email === '' || !isValidEmail(email)) {
            setEmailError(true);
            valid = false;
        }

        return valid;
    }

    function isValidEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
      }

    const resetErrors = () => {
        setFirstNameError(false);
        setLastNameError(false);
        setEmailError(false);
    }

    return (
        <section>
            <h2>Your details</h2>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__instructions">
                    Please enter the following:
                </div>
                <div className="form__input">
                    <label htmlFor="first-name" className="first-name__label">First Name</label>
                    <input 
                        className={"first-name" + (firstNameError ? ' error' : '')}
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={ event => setFirstName(event.target.value) }
                    />
                </div>
                <div className="form__input">
                    <label htmlFor="first-name" className="last-name__label">Last Name</label>
                    <input 
                        className={"last-name" + (lastNameError ? ' error' : '')}
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={ event => setLastName(event.target.value) }
                    />
                </div>
                <div className="form__input">
                    <label htmlFor="email" className="email__label">Email</label>
                    <input 
                        className={"email" + (emailError ? ' error' : '')}
                        id="email"
                        type="text"
                        value={email}
                        onChange={ event => setEmail(event.target.value) }
                    />
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
            <div className={"server-error" + (isServerError ? ' show-error' : ' hide-error')}>
                Server Error:
                <span className="server-error__details">Unable to save user info.</span>
            </div>
        </section>
    )
}

export default NewUserForm;