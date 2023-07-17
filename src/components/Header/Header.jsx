import React from 'react'
import './Header.css'
import logo from './img/logo.png'

export default function Header() {
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <h1 className='header__name'>TodoList</h1>
        </div>
    )
}
