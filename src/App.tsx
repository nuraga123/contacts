import React, { useEffect } from 'react';

import './App.css';
import { Login } from './pages/login/Login';
import { USERS_URL } from './shared/contacts';

function App() {
  useEffect(() => {
    fetch(USERS_URL)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;

//<img
//className='foto'
//src="./images/users-fotos/user-foto.jpg"
//alt="user-foto"
///>
