import { Routes, Route} from 'react-router-dom';
import './App.css';
import React, {useState} from 'react'
import CalendarHeader from './Calendar/components/CalendarHeader';
import Calendar from './Calendar/Calendar'
import Day from './Calendar/components/Day';
import Month from './Calendar/components/Month'; 
import{getMonth} from './util'


function App() {


  return (
    <div className='App'>
    
      <Routes>
        <Route path="/" element={<Calendar/>} />

      </Routes>
    </ div>
  )
}


export default App;
