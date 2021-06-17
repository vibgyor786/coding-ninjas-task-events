import React,{useContext} from "react";
import { Route,Switch } from 'react-router-dom';
import Menu from './Menu'
import AllEvents from "./components/AllEvents.jsx";
import BootcampEvents from "./components/BootcampEvents.jsx";
import CodingEvent from "./components/CodingEvent.jsx";
import Webinars from './components/Webinars.jsx'
import Workshop from "./components/Workshop.jsx";
import {pass} from './Tag'
import './mainmenu.css'
function Main_menu() {
  const name=useContext(pass);
  // console.log(name)
  return (
    <div className='maimenu'>
    
      <Menu />
      
      <Switch>
        <Route path="/allevents"  render={() => (<AllEvents name={name} isAuthed={true} />)} />
        <Route  path="/webinars" render={() => (<Webinars name={name} isAuthed={true} />)} />
        <Route  path="/codingevents" render={() => (<CodingEvent name={name} isAuthed={true} />)} />
        <Route  path="/bootcamp" render={() => (<BootcampEvents name={name} isAuthed={true} />)} />
        <Route  path="/workshop"  render={() => (<Workshop name={name} isAuthed={true} />)} />
      </Switch>
    </div>
  );
}

export default Main_menu;
