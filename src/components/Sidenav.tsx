import {Banknote, BedSingle, LayoutGrid} from 'lucide-react';
import { NavLink,useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import ToolTip from './ToolTip';
const Sidenav = ({isOpen}:{isOpen:boolean}) => {
  const {pathname} = useLocation();
  console.log(location);
  const navitems = [
    {
      title:"overview",
      icon:<LayoutGrid size={18}/>,
      href:"/"
    },
    {
      title:"payment",
      icon:<Banknote size={18} />,
      href:"/auth"
    },
    {
      title:"rooms",
      icon:<BedSingle size={18} />,
      href:"/rooms"
    }
  ]
  return (
    <div className={`px-2`}>
      <h1 className="font-semibold text-md text-slate-700 mb-5">Admin</h1>
      <div className="relative flex flex-col gap-2">
        {
          navitems.map((nav)=>(
            <ToolTip label={nav.title} align='center' side='right' key={nav.title} condition={!isOpen}>
              <NavLink to={nav.href} key={nav.title} className={
              twMerge('h-9 relative flex items-center gap-2 px-2 py-2  border border-transparent hover:border-blue-400  ',
              pathname===nav.href? "bg-blue-500/20 text-blue-500 font-medium" : "text-slate-900",
              isOpen? "rounded-full" : "rounded-md justify-center gap-0"
              )
            
            }>{nav.icon} 
            <span className={`overflow-hidden transition-all opacity-100 ${isOpen?"w-full ":"w-0 opacity-0 duration-700"}`}>{nav.title}</span> 
             </NavLink>
            </ToolTip>
          ))
        }
      </div>
    </div>
  )
}

export default Sidenav