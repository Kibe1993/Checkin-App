import "./Input.css";
import Modal from "./Modal";
const Input = ({ showModal, setShowModal, setEmployees }) => {
  function openModal(e) {
    e.stopPropagation();

    setShowModal(true);
  }
  return (
    <>
      {showModal && (
        <Modal setShowModal={setShowModal} setEmployees={setEmployees} />
      )}
      <div className="input">
        <h3>Click The Button To Enter Your Details </h3>
        <button onClick={openModal}>Add</button>
      </div>
    </>
  );
};

export default Input;
