
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllCourses from './Components/AllCourses';
import DataScience from "./Components/DataScience";
import AIML from "./Components/AIML";
import DataAnalysis from "./Components/DataAnalysis";
import SQL from "./Components/SQL";
import Navbar from "./Components/Nav";
import './App.css'; 

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/ai-ml" element={<AIML />} />
          <Route path="/data-analysis" element={<DataAnalysis />} />
          <Route path="/sql" element={<SQL />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


