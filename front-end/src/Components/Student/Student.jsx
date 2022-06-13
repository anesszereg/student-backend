import React from 'react'
import './Student.css'


function Students() {

    return (
        <div className='cart
        '>
            <div className="cart-title">
                <h1>Students</h1>
            </div>
            <div className="cart-items">
                <div className="item-title">
                    last name
                </div>
                <div className="item-box">
                    <input type="text" placeholder='right your last name please'/>
                </div>
                <div className="item-title">
                    first name
                </div>
                <div className="item-box">
                    <input type="text" placeholder='right your first name please'/>
                </div>
                <div className="item-title">
                    email
                </div>
                <div className="item-box">
                    <input type="text" placeholder='right your email please'/>
                </div>
                <div className="item-title">
                    groupe
                </div>
                <div className="item-box">
                    <input type="text" placeholder='right your groupe please'/>
                </div>

            </div>
           
            <button>submit</button>

        </div>
    )
}

export default Students
