// the basic differnce between useState and useRef is that useState goes through the entire lifecycle of component re-rendering like unmounting and updating the component again and again but useRef will will have a dependency on other components to get its render as it will render the final updated value only once

// this is the reason why useRef does not suffer from infinite loop problem


import './App.css';
import Header from './Components/Header';
import {useRef,useEffect, useState} from 'react';

function App() {
const [click,setClick] = useState(0)
const state = useRef(0);
console.log("inside app")

function clicker(){
  setClick(click+1)
}

function incr(){
  console.log("current state value is",state.current)
  state.current = state.current+1;
}
useEffect(()=>{
  console.log("re-rendered")
  return()=>{
    console.log("clean up code")
    console.log("previous state value was ",state.current)
  }
})
  return (
    <div className="App">
     <>
     <Header/>
     <button onClick={incr}>StateRef{state.current}</button>
     <br />
     <br />
     <button onClick={clicker}>hit{click}</button>
     </>
    </div>
  );
}

export default App;
