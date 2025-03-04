import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './Context/UserContext'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1 className='bg-black p-4 text-white'>MiniContext</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App
