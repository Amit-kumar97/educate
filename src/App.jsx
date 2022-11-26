import React from 'react';
import './App.css';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import ChatRoom from './Components/ChatRoom';
function App() {
    return (

    <div className="app">
      <Header />
      <Sidebar />
      <ChatRoom />
    </div>
    );
}

export default App;
