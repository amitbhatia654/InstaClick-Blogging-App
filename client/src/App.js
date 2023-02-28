import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { useState } from 'react';


function App() {
  const [login, setLogin] = useState(false)
  function myFunc(data) {
    setLogin(data)
  }
  return (
    <BrowserRouter>

      {login ?
        <Header myFunc={myFunc} name='amit'></Header>
        :
        <Routes>
          <Route path={'/'} element={<Login myFunc={myFunc}></Login>} ></Route>
        </Routes>
      }


    </BrowserRouter>
  );
}

export default App;
