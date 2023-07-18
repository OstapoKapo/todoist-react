import React from 'react'
import './Header.css'
import Filter from './Filter/Filter';
import Logo from './img/logo.png';
import TrashCan from './img/trashCan.webp';
import Success from './img/Success.png'

export default function Header() {
    return (
        <div className='header'>
          <div className="header__left">
            <div className="header__logo">
                <img src={Logo} alt="logo" />
            </div>
            <h1 className='header__name'>TodoList</h1>
           </div>
            <div className="header__right">
              <div className="header__logo">
                 <img src={TrashCan} alt="logo" />
              </div>
              <div className="header__logo header__png">
                 <img src={Success} alt="logo" />
              </div>
               <div className="header__btn">
                 <div className="header__btn__row"></div>
                 <div className="header__btn__row"></div>
                 <div className="header__btn__row"></div>
               </div>
            </div>
        </div>
    )
}
