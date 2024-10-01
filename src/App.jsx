import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import ChingriBalachao from "./pages/ChingriBalachao";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChingriBalachao />} />
      </Routes>
    </Router>
  );
};

export default App;
