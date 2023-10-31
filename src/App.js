import { Routes, Route,} from "react-router-dom";
import Home from "./Pages/Home"
import Genre from "./Pages/Genre"
import Browse from "./Pages/Browse"
import Movies from "./Pages/Movies"
import React from "react";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/genre" element={<Genre />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </>
  )
}

export default App;
