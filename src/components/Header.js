import React from "react"
import logo from '../MWLogo.png'

function Header() {
    const linkedLogo = <a href="https://dictionaryapi.com/" target="_blank" rel="noopener noreferrer"><img className="o-logo" style={{width: "25px"}} src={logo} alt="Merriam-Webster logo"/></a>
    return (
        <header className="header">
            <h1 >Search Your W{linkedLogo}rd!</h1>
        </header>
    )
}

export default Header