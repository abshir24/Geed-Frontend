import React , { useEffect }from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css"
import { getAllHerbs } from './actions/PostAction';
import {Routes, Route, Navigate} from 'react-router-dom'
import RemedySearch from './components/RemedySearch/RemedySearch'

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route
          path="/"
          element={
            <div className="background"> 
              <Hero />
            </div>
          }
        />
        <Route
          path="/remedy"
          element={<RemedySearch />}
        />
      </Routes>   
      

    </div>
  );
}

export default App;
