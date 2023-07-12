import React from 'react';


function Navbar() {

    return (
        <div className='navbar'>
            <div className='leftSide'>
                <h1>Navbar</h1>
            </div>
            <div className='rightSide'>
                <ul>
                    <li><a href='#about'>About Me</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact Me</a></li>
                    <li><a href='#resume'>Resume</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;