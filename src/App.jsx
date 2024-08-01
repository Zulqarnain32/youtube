import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuth } from './context/AuthProvider'
import { BrowserRouter,Routes,Route }  from "react-router-dom"
import Home from './components/Home'
import Search from './components/Search'
import PlayingVideo from './components/PlayingVideo'
import NewHome from './components/NewHome'
import("./App.css")
const App = () => {
 
  return (
    <> 
    <BrowserRouter>
       <Navbar />
    {/* <Sidebar/> */}
       <Routes>
         {/* <Route path = "/" element = {<NewHome/>}/> */}
         <Route path = "/" element = {<Home/>}/>
         <Route path = "/search/seachQuery" element = {<Search/>}/>
         <Route path = "/video/:id" element = {<PlayingVideo/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

