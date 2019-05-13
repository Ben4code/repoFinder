import React from 'react';
import Search from './components/Search';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Users/>
    </div>
  );
}
export default App;
