import { useRef, useState } from "react";
import "./Modal.css";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ setEmployees, setShowModal }) => {
  const nameRef = useRef();
  const dateRef = useRef();

  function registerEmployees() {
    const employeeName = nameRef.current.value.trim();
    const todaysDate = dateRef.current.value;

    if (!employeeName || !todaysDate) return;

    const employeeData = { id: uuidv4(), name: employeeName, date: todaysDate };

    setEmployees((prevList) => [...prevList, employeeData]);

    nameRef.current.value = "";
    dateRef.current.value = "";

    setShowModal(false);
  }

  function handleModalClick(event) {
    event.stopPropagation();
  }

  return (
    <div className="modal" onClick={handleModalClick}>
      <dialog open className="dialog">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="input-label">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="e.g. Richard"
              id="name"
              ref={nameRef}
            />
          </div>
          <div className="input-label">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" ref={dateRef} />
          </div>
          <button type="submit" onClick={registerEmployees}>
            Submit
          </button>
          <button onClick={() => setShowModal(false)} type="button">
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
