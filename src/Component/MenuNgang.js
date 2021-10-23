import React from "react";
import { Link } from "react-router-dom";
export const MenuNgang =() =>{
    return(
            <div className="Menu">
                <div className="titleMenu">
                    <p><Link to="/Home" className="Menuitem">Home</Link></p>
                    <p><Link to="/To-Do-App" className="Menuitem">To Do App</Link></p>
                </div>
            </div>
    )
}