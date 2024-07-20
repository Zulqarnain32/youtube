import React,{useState} from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import("./App.css")
const App = () => {

  const [isSidebarVisible, setSidebarVisible] = useState(false);

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

