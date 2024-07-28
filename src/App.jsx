import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { useAuth } from './context/AuthProvider'
import("./App.css")
const App = () => {
  const {loading} = useAuth()
  console.log("loaidng",loading);

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <>
       <Navbar toggleSidebar={toggleSidebar} />
       <Sidebar isVisible={isSidebarVisible} />
    </>
  )
}

export default App

