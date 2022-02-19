import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import Playlist from './pages/Playlist/Playlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/playlist" element={<Playlist />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
