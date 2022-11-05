import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
// import firebase from 'firebase'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      
      {/* App body */}
      <div className='app_body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
        </div>
    </div>
  );
}

export default App;
