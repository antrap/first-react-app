import React from "react";
//import profile from "./Images/profile.png";

export default function Header() {
    return (
        <header>
            <nav>


                <ul className="nav-bar">
                    <img src="./Images/profile.png" />
                    <li>About Me</li>
                    <li>Education</li>
                    <li>Projects</li>
                    <li>Gallery</li>
                </ul>
            </nav>
        </header>
    )
}

  //export default Header;