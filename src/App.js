import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { action,originals } from "./urls";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Netflix Originals'/>
     <RowPost url={action} title= 'Action' isSmall/>
    </div>
  );
}

export default App;
