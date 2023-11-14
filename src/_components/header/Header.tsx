import Clock from "./clock/Clock";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="top-container">
        <Clock />
        <h1>Daily Tasks App</h1>
      </div>
      <p className="headline">
        Set up a list of tasks and knock them down before the end of the day!
      </p>
    </header>
  );
};

export default Header;
