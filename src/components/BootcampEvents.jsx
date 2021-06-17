import React from 'react'
import { Route, Switch,NavLink } from "react-router-dom";

import Data from "./Data";
import './Menu.css'
function Bootcamp_events(props) {
  const click = (e) => {
    console.log(e.currentTarget.style.color)
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
      <NavLink  onClick={click} activeClassName="menu-bar" to="/bootcamp/upcoming">
        Upcoming
      </NavLink>
      <NavLink  onClick={click} activeClassName="menu-bar" to="/bootcamp/archived">
        Archived
      </NavLink>
      <NavLink  onClick={click} activeClassName="menu-bar" to="/bootcamp/alltimefav">
        All Time Favorites
      </NavLink>

      <Switch>
        <Route exact
          path="/bootcamp/upcoming"
          render={() => <Data tag={props.name}  cat='BOOTCAMP_EVENT' subcat='Upcoming' isAuthed={true} />}
        />
        <Route  exact
          path="/bootcamp/archived"
          render={() => <Data tag={props.name} cat='BOOTCAMP_EVENT' subcat='Archived' isAuthed={true} />}
        />
        <Route  exact
          path="/bootcamp/alltimefav"
          render={() => <Data tag={props.name}  cat='BOOTCAMP_EVENT' subcat="ALL TIME FAVORITES" isAuthed={true} />}
        />
      </Switch>
    </div>
    )
}

export default Bootcamp_events
