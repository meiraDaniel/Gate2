import React,{useContext,useEffect,useState} from 'react';
import './App.scss';
import axios from 'axios'
import { Switch,Route,useHistory} from "react-router-dom";

import LandingPage from './pages/Landing/LandingPage'
import Home from './pages/Home/Home'
import Navegation from './pages/navegation/Navegation'
import Destinations from './pages/Destinations/Destinations'

import {MyContext} from './Context/Context'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'

function App() {
 const {isSummer, setIsSummer,setTours,tours}= useContext(MyContext)
 const history=useHistory()

/**
 * @function togleSummer
 * @param {boolean} e  - the value selected by the user 
 * @returns dispatch true or false( true if the user select summer false if select winter)
 */
 const togleSummer = (e)=>{
  setIsSummer({type:'CHOOSE_SEASON',isSummer:e})
  history.push("/home")

 }

 useEffect(() => {
  axios.get('/places', {params: {isSummer}}).then(res=>   setTours({type:'GET_DATA',tours:res.data.tours}))
}, [isSummer])

  return (
    <div className="App--main">
    
     <Switch>
       <Route exact path="/">
         <LandingPage  togleSummer={togleSummer} />
       </Route>
       <Route path="/home">
        <Navegation/>
        <Home/>
       </Route>
       <Route path='/destinations'>
          <Navegation/>
          <Destinations />         
       </Route>
       <Route path="/about">
       <Navegation/>
      <About/>
       </Route>
       <Route path="/contact">
       <Navegation/>
      <Contact/>
       </Route>
     
     </Switch>
    </div>
  );
}

export default App;
