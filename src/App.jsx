import Header from "./Components/Header";
import Input from "./Components/Input";
import { useState } from "react";
import Output from "./Components/Output";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [employees, setEmployees] = useState([]);

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="container" onClick={handleCloseModal}>
      <header>
        <Header />
      </header>
      <main>
        <Input
          showModal={showModal}
          setShowModal={setShowModal}
          setEmployees={setEmployees}
        />
        <Output employees={employees} />
      </main>
    </div>
  );
};

export default App;
