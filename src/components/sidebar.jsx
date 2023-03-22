import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaShoppingCart,
    FaUser,
    FaChartBar,
    FaBuffer,
    FaClipboardList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        { path: "/", name: "Dashboard", icon: <FaTh /> },
        { path: "/orders", name: "Orders", icon: <FaShoppingCart /> },
        { path: "/customers", name: "Customers", icon: <FaUser /> },
        { path: "/reports", name: "Reports", icon: <FaChartBar /> },
        { path: "/integrations", name: "Integrations", icon: <FaBuffer /> },
        { path: "/currentmont", name: "Current Month", icon: <FaClipboardList /> },
        { path: "/lastquarter", name: "Last Quarter", icon: <FaClipboardList /> },
        { path: "/yearendsale", name: "Year-end sale", icon: <FaClipboardList /> }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeClassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
