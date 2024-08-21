import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './Views/Topbar'; 
import  Start  from './Views/Start'; 
import Pitchmark from './Views/Pitchmark'; 
import Variables from './Views/Variables'; 

function App() {
  return (  
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/pitchmark" element={<Pitchmark />} />
          <Route path="/variables" element={<Variables />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
