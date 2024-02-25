// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import FirstIndex from '../pages/first Index/FirstIndex'
import LoginPage from '../pages/login page/LoginPage'
import HomePage from '../pages/home page/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {

  const routers = createBrowserRouter([
    { path: '/', element: <FirstIndex /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/home', element: <HomePage /> }
  ]);

  return <RouterProvider router={routers} />
}

export default App
