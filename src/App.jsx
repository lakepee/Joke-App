// import { useState, useEffect } from 'react';
// import { useState } from 'react';
// import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import jokes from "./jokes.js"


function App() {

  const joke = jokes.map(item=>{
    return <MainContent key={item.id} setup={item.setup} punchline={item.punchline} />
  } )
  return (
    <div>
      <Header/>
      {joke}
    </div>
  )
}

export default App
