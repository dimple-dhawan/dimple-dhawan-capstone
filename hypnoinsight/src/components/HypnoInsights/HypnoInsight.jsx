import "./Hypnoinsights.scss";
import NewUserForm from "../NewUserForm/NewUserForm";
import LearningModule from "../LearningModule/LearningModule";
import { useState } from "react";

function HypnoInsights({ closeModule }) {
  const [startUser, setStartUser] = useState(true)
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
        { startUser && <NewUserForm setStartUser={setStartUser} closeModule={closeModule}/> }
        { !startUser && <LearningModule /> }
      </div>

    </section>
  );
}

export default HypnoInsights;
