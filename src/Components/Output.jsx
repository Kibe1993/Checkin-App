import "./Output.css";
import { useState, useEffect } from "react";
const Output = ({ employees }) => {
  const [todaDate, setTodayDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date().toLocaleDateString();
      setTodayDate(newDate);
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {employees.length > 0 && (
        <div className="output-container">
          <h3>Present Employees List</h3>
          <ul>
            {employees.map((employee, index) => (
              <li key={index + 1}>
                <p>{employee.name}</p>
                <p>{employee.date}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Output;
