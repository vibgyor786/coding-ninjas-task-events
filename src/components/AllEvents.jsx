import React from "react";
import { Route, Switch,NavLink } from "react-router-dom";

import Data from "./Data";
import './Menu.css'
function AllEvents(props) {
  const click = (e) => {
   
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
    <div className="menu">
      <NavLink  onClick={click} activeClassName="menu-bar" to="/allevents/upcoming">
        Upcoming
      </NavLink>
      <NavLink  onClick={click} activeClassName="menu-bar" to="/allevents/archived">
        Archived
      </NavLink>
      <NavLink  onClick={click} activeClassName="menu-bar" to="/allevents/alltimefav">
        All Time Favorites
      </NavLink>

      <Switch>
        <Route exact
          path="/allevents/upcoming"
          render={() => <Data tag={props.name}  cat='ALL_EVENTS' subcat='Upcoming' isAuthed={true} />}
        />
        <Route  exact
          path="/allevents/archived"
          render={() => <Data tag={props.name} cat='ALL_EVENTS' subcat='Archived' isAuthed={true} />}
        />
        <Route  exact
          path="/allevents/alltimefav"
          render={() => <Data tag={props.name}  cat='ALL_EVENTS' subcat="ALL TIME FAVORITES" isAuthed={true} />}
        />
      </Switch>
    </div>
  );
}

export default AllEvents;
