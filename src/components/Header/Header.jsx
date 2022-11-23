import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <header>
        <a href="/" class="logo">From hype to reality</a>
        <input type="checkbox" class="checkBtn" />
        <ol>
            <a href="/#">
                <li>Senzor 1</li>
            </a>
            <a href="/#">
                <li>Senzor 2</li>
            </a>
            <a href="/#">
                <li>Senzor 3</li>
            </a>
            <a href="/#">
                <li>Senzor 4</li>
            </a>
        </ol>
    </header>
  )
}

export default Header