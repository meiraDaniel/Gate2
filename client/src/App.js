import React,{useState, useContext} from 'react';
import './App.css';
import { Switch,Route,useHistory} from "react-router-dom";
import LandingPage from './pages/Landing/LandingPage'
import Home from './pages/Home/Home'
import Navegation from './pages/navegation/Navegation'
import {MyContext} from './Context/Context'

function App() {
 const {isSummer,setIsSummer}= useContext(MyContext)
 const history=useHistory()

 const togleSummer = (e)=>{
  setIsSummer({type:'CHOOSE_SEASON',isSummer:e})
  history.push("/home")

 }
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
     </Switch>
    </div>
  );
}

export default App;
