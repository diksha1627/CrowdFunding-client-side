import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home  from './pages/Home';
import { Sidebar , Navbar } from './components';
const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#1313]">

      <div>
        <Sidebar/>
      </div>

      <div>
        <Navbar/>
      </div>

     <Routes>
      <Route path="/" element={<Home />}/>
     </Routes>
    </div>
  )
}

export default App
