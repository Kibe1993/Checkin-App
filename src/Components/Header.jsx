import { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date().toLocaleDateString();
      setDate(newDate);
    }, 1000 * 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <h1>Checkin Form for {date}</h1>
    </div>
  );
};

export default Header;
