import React from 'react'
import './Header.scss'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <a href="/" class="logo">from HYPE to REALITY</a>
        <input type="checkbox" class="checkBtn" />
        <ol>
            <Link to="/">
                <li>Senzor 1</li>
            </Link>
            <Link to="/sensor2">
                <li>sensor2</li>
            </Link>
            <Link to="/sensor3">
                <li>sensor3</li>
            </Link>
            <Link to="/sensor4">
                <li>sensor4</li>
            </Link>
        </ol>
    </header>
  )
}

export default Header