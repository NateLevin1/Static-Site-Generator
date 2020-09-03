import React from 'react';
import './App.css';
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from './components/Main/Main';

function App() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;