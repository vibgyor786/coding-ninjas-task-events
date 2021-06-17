import React, {  useState } from "react";
import "./nabvar.css";
function Navbar() {
  const [activeclass, setActiveclass] = useState("");
  const [downnav, setDownnav] = useState("");
  const [style, setStyle] = useState({ display: "none" });
  const [bartrue, setBartrue] = useState(false);

  const click = () => {
    if (bartrue === false) {
      setActiveclass("bar");
      setDownnav("downnav");
      setStyle({ display: "flex" });
      setBartrue(true);
    } else {
      setDownnav("");
      setStyle({ display: "none" });
      setBartrue(false);
    }
  };

  return (
    <>
      <div className="nav">
        <img
          className="camp"
          src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg"
          alt="logo1"
        />
      <a href="/" className="sub_nav">
          Home
        </a>
        <a href="/" className="sub_nav">
          Courses
        </a>
        <a href="/" className="sub_nav">
          Practice
        </a>
        <a href="/" className="sub_nav">
          Events
        </a>
        <a href="/" className="sub_nav">
          Campus Ninjas
        </a>
        <a href="/" className="sub_nav">
          blog
        </a>

        <img
          src="https://files.codingninjas.in/cc-desktop-2-5363.svg"
          alt="logo2"
        />
        <div className="right">
          <a href="/" className="sub_nav">
            My classroom
          </a>
          <button className="login"> Login</button>
        </div>
        <div id="bar" className={activeclass} onClick={click}>
          <hr />
          <hr />
          <hr />
        </div>
      </div>
      <div className={downnav} style={style}>
        <a href="/" className="sub_nav">
          Home
        </a>
        <a href="/" className="sub_nav">
          Courses
        </a>
        <a href="/" className="sub_nav">
          Practice
        </a>
        <a href="/" className="sub_nav">
          Events
        </a>
        <a href="/" className="sub_nav">
          Campus Ninjas
        </a>
        <a href="/" className="sub_nav">
          blog
        </a>
        <a href="/" className="sub_nav">
          My classroom
        </a>
      </div>
    </>
  );
}

export default Navbar;
