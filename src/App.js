import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={ <Home /> } />
      <Route path={'/blogDetails'} element={ <Blog /> }/>
      <Route path={'/contacts'} element={ <Contacts /> }/>
    </Routes>
  );
}

export default App;
