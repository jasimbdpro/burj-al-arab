import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import Book from './components/Book/Book'
import { createContext, useState } from 'react'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Name: {loggedInUser.name}</p>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/book/:bedType' element={<PrivateRoute Component={Book} />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
