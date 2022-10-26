import React from 'react';
import Weather from './components/Weather'
import './App.css';


export default function App() {
  return (
    <div className="App">
<div className='container'>
<Weather defaultCity='New York'></Weather>
</div>
    </div>
  );
}


