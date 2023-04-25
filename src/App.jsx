import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Sidebar , Navbar } from './components';
import { Home,CampaignDetails,CreateCampaign } from './pages';
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
      <Route path="/create-campaign" element={<CreateCampaign />}/>
     </Routes>
    </div>
  )
}

export default App
