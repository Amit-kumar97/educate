import React from 'react'
import './Header.css'
import Search from './Search'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
function Header() {
    return (
    <div>
        <div className='header'>
            {/* ggggggggggg */}
            
            <div className="header__left">
                <img src="Schedule.png" alt="" />
                <i className='far fa-bell'></i> Reminder <img src="./Components/Schedule.png" alt="" />
            </div>

            <div className="header__middel">
                <div className="main">
                    <h1>&nbsp; &nbsp; &nbsp;Educate</h1>
                    <Search />
                    {/* <input placeholder='Search Here' />Search */}

                    <div className="search">
                    
                    </div>

                </div>
            </div>

            <div className="header__right">
            <link rel="stylesheet" href="#" /><i className='far fa-question-circle'></i>
            </div>     
        </div>
        
        
    </div>
    )
}

export default Header