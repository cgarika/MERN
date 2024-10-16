import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NumberOrWord from "./components/NumberOrWord";
import WordWithColors from "./components/WordWithColors";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:input" element={<NumberOrWord />} />
        <Route path="/:word/:color1/:color2" element={<WordWithColors />} />
      </Routes>
    </Router>
  );
};

export default App;
