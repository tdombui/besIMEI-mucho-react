import React, { useState, useEffect } from 'react'

const Button = () => {
    const handleClick = () => {
        console.log('Get the bag');
    }
    // const handleClickAgain = (username) => {
    //     console.log('hello ' + username);
    // }

    return (
        <div>
            <button onClick={handleClick}>Button</button>
            {/* <button onClick={() => {
                handleClickAgain('tdombui')
            }}>Button2</button> */}
        </div>
    );
}
export default Button