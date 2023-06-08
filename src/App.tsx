import { useState } from "react";
import "./App.css";
import Layout_01 from "./components/layout/Layout_01";
import { Route, Routes } from "react-router-dom";
import Home from "./components/features/Home"; 
import ProcessDefinitionList from "./components/features/ProcessDefinitionList";
import ProcessDefinition from "./components/features/ProcessDefinition";
import Login from "./components/features/Login";
import Register from "./components/features/Register";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout_01 />}>
          {/* <Route path="/" element={<Home />}/>  */}
          <Route path="/Home" element={<Home />}/>   
          <Route path="/ProcessDefinitionList" element={<ProcessDefinitionList />}/>    
          <Route path="/ProcessDefinition/:id" element={<ProcessDefinition />}/> 
        </Route>
        <Route path="/login" element={<Login />}/> 
        <Route path="/register" element={<Register />}/> 
      </Routes>      
    </>
  );
}

export default App;
