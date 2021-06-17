import React from 'react'
import { Route, Switch,NavLink } from "react-router-dom";
import Data from "./Data";
import './Menu.css'
function Coding_event(props) {
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
      <NavLink  onClick={click} activeClassName="menu-bar" to="/codingevents/upcoming">
        Upcoming
      </NavLink>
      <NavLink  onClick={click} activeClassName="menu-bar" to="/codingevents/archived">
        Archived
      </NavLink>
      <NavLink  onClick={click} activeClassName="menu-bar" to="/codingevents/alltimefav">
        All Time Favorites
      </NavLink>

      <Switch>
        <Route exact
          path="/codingevents/upcoming"
          render={() => <Data tag={props.name}  cat='CODING_EVENT' subcat='Upcoming' isAuthed={true} />}
        />
        <Route  exact
          path="/codingevents/archived"
          render={() => <Data tag={props.name} cat='CODING_EVENT' subcat='Archived' isAuthed={true} />}
        />
        <Route  exact
          path="/codingevents/alltimefav"
          render={() => <Data tag={props.name}  cat='CODING_EVENT' subcat="ALL TIME FAVORITES" isAuthed={true} />}
        />
      </Switch>
    </div>
    )
}

export default Coding_event
