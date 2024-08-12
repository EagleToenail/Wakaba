import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainHome from './Pages/Dashboard/MainHome';
function App() {
  return (
    <Router>
       <Routes>
            <Route path='/home' element={<MainHome/>}/>
       </Routes>
    </Router>
  );
}

export default App;
