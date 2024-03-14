import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  const[status,setStatus]=useState("Loading...");
  const[progress,setProgress]=useState(0);

  useEffect(()=>{
    if(progress<100){
      setTimeout(()=>{
        setProgress(prev=>prev+1);
      },500)
    }else{
      setStatus("Completed!!!")
    }
    
  },[progress])
  return (
    <div className="App">
      <h1>Progress Bar</h1>

      <div className='bar'>
        <div className='progress' style={{height:"100%", width:`${progress}%`}}>
        </div>
        <span style={{color: progress >= 60 ? '#fff' : '#000'}}>{progress}%</span>
      </div>

      <span>{status}</span>
    </div>
  );
}

export default App;
