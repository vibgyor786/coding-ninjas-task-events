import React from 'react'
import { Route, Switch,NavLink } from "react-router-dom";
import Data from "./Data";
import './Menu.css'
function Webinars(props) {
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
        <NavLink  onClick={click} activeClassName="menu-bar" to="/webinars/upcoming">
          Upcoming
        </NavLink>
        <NavLink  onClick={click} activeClassName="menu-bar" to="/webinars/archived">
          Archived
        </NavLink>
        <NavLink  onClick={click} activeClassName="menu-bar" to="/webinars/alltimefav">
          All Time Favorites
        </NavLink>
  
        <Switch>
          <Route exact
            path="/webinars/upcoming"
            render={() => <Data tag={props.name}  cat='WEBINAR' subcat='Upcoming' isAuthed={true} />}
          />
          <Route  exact
            path="/webinars/archived"
            render={() => <Data tag={props.name} cat='WEBINAR' subcat='Archived' isAuthed={true} />}
          />
          <Route  exact
            path="/webinars/alltimefav"
            render={() => <Data tag={props.name}  cat='WEBINAR' subcat="ALL TIME FAVORITES" isAuthed={true} />}
          />
        </Switch>
      </div>
    )
}

export default Webinars
