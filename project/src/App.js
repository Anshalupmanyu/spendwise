import React from 'react';
import Navbar from './components/Navbar'
import Balance from './components/Balance'
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Balance />
      <Dashboard />
    </div>
  );
}

export default App;
