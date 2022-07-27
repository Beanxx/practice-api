import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/search" exact={true} element={<Search />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

// https://openapi.naver.com/v1/search/movie
