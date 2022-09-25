import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import "./MainContant.css"
const Sideber = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  items-center justify-center">

                    <Outlet></Outlet>
                    
                </div>
                <div className="drawer-side sidebar">
                    {/* <label htmlFor="my-drawer-2" className="drawer-overlay">Toggler</label> */}
                    <div>
                    </div>
                    <ul className="menu  w-80 bg-base-100 text-base-content flex ">
                        <li><Link to='/'>Sidebar Item 1</Link></li>
                        <li><Link to="/hPost">Sidebar Item 2</Link></li>
                    </ul> <ul className="menu  w-80 bg-base-100 text-base-content flex ">
                        <li><Link to='/'>Sidebar Item 1</Link></li>
                        <li><Link to="/hPost">Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sideber;