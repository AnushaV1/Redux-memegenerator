import React from 'react';
import { useSelector, useDispatch,shallowEqual } from "react-redux";
import AddMemeForm from "./AddMemeForm";
import Meme from "./Meme";
import './App.css';

function App() {
  const memes = useSelector(state => state.memes, shallowEqual);
  const dispatch = useDispatch();

  const addMeme = (newMeme) => {
    dispatch({ type: "ADD_MEME", meme: newMeme });
  }

  const deleteMeme = (id) =>{
    console.log(id)
    dispatch({type: "REMOVE_MEME", id });
  }

  const showMemes = memes.map(m => (
      <Meme
        key={m.id}
        topText={m.topText}
        bottomText={m.bottomText}
        url = {m.url}
        deleteMeme ={()=>deleteMeme(m.id)} /> 
  ))

  return (
    <div className="App">
      <AddMemeForm addMeme={addMeme} />
      <hr />
    {showMemes}
    </div>
  );
}

export default App;
