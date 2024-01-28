import Header from "@/components/Header"
import Sidenav from "@/components/Sidenav"
import { useState } from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    const [isOpen,setIsOpen]=useState(true);

    const toggleOpen = ()=>{
        setIsOpen((preval)=>!preval)
    }
  return (
    <div className="h-screen overflow-hidden flex flex-col">
            <Header toggleOpen={toggleOpen}/>
            <div className="flex flex-1 h-[calc(100vh-76px)]">
            <div className={`overflow-y-auto overflow-x-hidden ${isOpen ? "w-[250px]":"w-16"}  transition-all duration-700 `}>
                <Sidenav/>
            </div>
            <div className="  overflow-y-auto bg-slate-100 rounded-lg w-full p-2 mb-2 ">
                <Outlet/>
            </div>
            </div>
    </div>
  )
}

export default Layout