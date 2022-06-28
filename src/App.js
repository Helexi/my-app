import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Nav } from './components/Nav/Nav';
import { Profile } from './components/Profile/Profile';
import { Masseges } from './components/Masseges/Masseges';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { TestForm } from './components/TestForm/TestForm';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  let dialogsData = [
    { id: 1, name: 'Ruslan' },
    { id: 2, name: 'Alina' },
    { id: 3, name: 'Ivan' },
    { id: 4, name: 'Artem' },
  ]

  let massegesData = [
    { id: 1, massege: 'Hi' },
    { id: 2, massege: 'How are you?' },
    { id: 3, massege: 'How old are you?' },
  ]

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrap-profile'>
        <Routes>
          <Route path='/' element={<Profile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/masseges/*' element={<Masseges dialogs={dialogsData} masseges={massegesData}/>} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/formTest' element={<TestForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

// https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg
