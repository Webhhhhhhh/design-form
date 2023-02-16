import React from 'react'
import { Routes, Route } from "react-router-dom"
import routers from './routes'
import 'antd/dist/reset.css';
const App = () => {
  return (
    <Routes>
      {
        routers.map(el => <Route {...el} key={el.path} />)
      }
    </Routes>
  )
}

export default App;
