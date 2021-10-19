import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';

export const App = () => {
  const [user, setUser] = useState([])
  const [load, setload] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLink, setActiveLink] = useState()

  const onClickHandler = () => {
    console.log("button is working")
  }
  
  return (
    <div className="App">
      <Button isActive={activeUser} clicked={onClickHandler} />
    </div>
  );
}

export default App;
