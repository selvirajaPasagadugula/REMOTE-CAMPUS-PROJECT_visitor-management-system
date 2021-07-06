import React, { useState } from "react";
import Modal from "react-modal";

import VisitorForm from "./../components/VisitorForm";
import "./EnterVisitorPage.css";

Modal.setAppElement("#root");

const EnterVisitorPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="enter-visitor">
      <div className="button-container">
        <button
          onClick={() => setModalIsOpen(true)}
          className="btn btn-black btn-large btn-enter-visitor">
          ENTER VISITOR DETAILS
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: { backgroundColor: "grey" },
          content: {
            textAlign: "center",
            backgroundColor: "var(--color-grey)",
            border: "none",
            padding: "10vh",
          },
        }}>
        <VisitorForm />
        <button className="btn btn-small btn-success btn-form">Submit</button>
        <button className="btn btn-small btn-yellow btn-form">Download</button>
        <button
          className="btn btn-small btn-caution btn-form"
          onClick={() => setModalIsOpen(false)}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default EnterVisitorPage;
