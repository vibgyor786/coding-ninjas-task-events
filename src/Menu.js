import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

function Menu() {
  const click = (e) => {
      console.log(e.currentTarget.parentNode.childNodes[0])
      if(e.currentTarget.style.color===`orange`){
        e.currentTarget.style.color=''
      }else{
        
        e.currentTarget.parentNode.childNodes.forEach(e => {
          e.style=''
        });
        e.currentTarget.style.color='orange'
      }
     
  };
  return (
    <div className="main_navbar">
      <NavLink exact className="menu-bar" onClick={click} to="/allevents">
        <i className="fa fa-calendar"> </i> <h3> All EVENTS</h3>
      </NavLink>
      <NavLink exact className="menu-bar" onClick={click} to="/webinars">
        <i className="fa fa-television"></i> <h3> Webinars</h3>
      </NavLink>
      <NavLink exact className="menu-bar" onClick={click} to="/codingevents">
        <i className="fa fa-calendar-check-o"></i> <h3> Coding Events</h3>
      </NavLink>
      <NavLink exact className="menu-bar" onClick={click} to="/bootcamp">
        <i className="fa fa-youtube-play"></i> <h3> Bootcamp Events</h3>
      </NavLink>
      <NavLink exact className="menu-bar" onClick={click} to="/workshop">
        <i className="fa fa-code"> </i> <h3> Workshop</h3>
      </NavLink>
    </div>
  );
}

export default Menu;
