import React, {useState, useEffect} from 'react';
import './App.css';
import Reports from "./components/Reports";


function App() {
  const [state, setState] = useState({
    loading: true,
    data: []
  })

  useEffect(() => {
    fetch("http://localhost:3001/data").then(resp => resp.json()).then(data =>{
      setState({
        loading: false,
        data
      })
    })
  }, [])

  var toRender;

  if(state.loading){
    // load from backend
    // in the meantime, render a loading animation
    toRender = <img src="loading-png-gif.gif" className="loader" alt="Please wait"></img>
  }else{
    toRender = <Reports data={state.data}/>
  }

  return (
    <div className="App">
        <h1>Sales report</h1>
        <div className="container">{toRender}</div>
    </div>
  );
}

export default App;
