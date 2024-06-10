import "./Hypnoinsights.scss";
import NewUserForm from "../NewUserForm/NewUserForm";
import Prelude from "../Prelude/Prelude";
import InterestsForm from "../InterestsForm/InterestsForm";
import { useState } from "react";
import LearningModule from "../LearningModule/LearningModule";

function HypnoInsights({ closeModule }) {
  const [startUser, setStartUser] = useState(true); 
  const [startLearning, setStartLearning] = useState(false); 
  const [showUserForm, setShowUserForm] = useState(true); 
  const [showPrelude, setShowPrelude] = useState(false); 
  const [showInterests, setShowInterests] = useState(false);
  const close = () => {
    closeModule();
  };

  return (
    <section className="hypno-section">
      <div className="hypno__header">
        <h3 className="hypno__product">HypnoInsight</h3>
        <div className="close-button" onClick={close}>
          X
        </div>
      </div>
      <div className="hypno__content">
        { startUser && showUserForm && <NewUserForm 
            setShowUserForm={setShowUserForm}
            setShowInterests={setShowInterests} 
            closeModule={closeModule} /> 
        }
        {
          showInterests  && <InterestsForm 
            setStartUser={setStartUser} 
            setShowInterests={setShowInterests} 
            setShowPrelude={setShowPrelude}
            close={close} />
        }
        { !startUser && !startLearning && showPrelude && <Prelude 
          setStartLearning={setStartLearning}/> 
        }
        { !startUser && startLearning && <LearningModule close={close} /> }
      </div>
    </section>
  );
}

export default HypnoInsights;
