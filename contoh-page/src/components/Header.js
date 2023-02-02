import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


const Header = () => {
    const [listNav, setListNav] = useState([]);

    useEffect(() => {
        mengaturListNavigasi();
    },[]);

    const mengaturListNavigasi = () => {
        setListNav(["Option1", "Option 2", "Option 3", "Option4"]);
    }

    console.log(listNav);
    
    return (
        <header id="header" className="alt skel-layers-fixed" style={{ background: 'black'}}>
            <h1><a href="index.html">HTML5 Website <span>by Html5webtemplates.co.uk</span></a></h1>
            <nav id="nav">
                <ul>
                    
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/employee-page">Employee Page</Link>
                        </li>
                        {/* <a href="" className="icon fa-angle-down">Layouts</a>
                        <ul>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                            <li><a href="right-sidebar.html">Right Sidebar</a></li>
                            <li><a href="no-sidebar.html">No Sidebar</a></li>
                            <li>
                                <a href="">Submenu</a>
                                <ul>
                                    <li><a href="#">Option 1</a></li>
                                    <li><a href="#">Option 2</a></li>
                                    <li><a href="#">Option 3</a></li>
                                    <li><a href="#">Option 4</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="elements.html">Elements</a></li> */}
                    
                </ul>
            </nav>
        </header> 
    );
} ;

export default Header;