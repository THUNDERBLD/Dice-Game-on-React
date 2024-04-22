import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Start from './Pages/Start.jsx'
import Main from './Pages/Main.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Start />,
  },
  {
    path:'/Main',
    element: <Main />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <App />
  </React.StrictMode>,
)
