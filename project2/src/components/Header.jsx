import React from "react";
import headerImage from "../images/background.jpg"
import "./styles/header.css";


export default function Header(){
    return (
        <div>
        <img src={headerImage} className="header" />
        </div>
    )
}
