import { Route, Routes } from 'react-router-dom';

import { ContactList } from './pages/contactList/ContactList';

import { Login } from './pages/login/Login';

import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>

        <Route
          path='/login'
          element={<Login />}
        />

        <Route
          path='/contacts'
          element={<ContactList />}
        />

      </Routes>
    </div>
  );
}

export default App;