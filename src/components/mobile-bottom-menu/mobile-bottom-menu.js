import React from "react";
import {Link} from "react-router-dom";
import './mobile-bottom-menu.scss';
import CartBottomIcon from "./cart-bottom-icon";

const MobileBottomMenu = () => {
    return (
        <div className='bottom-menu'>
            <div className='categories-icon'>
                <div className='icon-title'>
                    Категории
                </div>
            </div>

            <CartBottomIcon/>

        </div>
    )
};

export default MobileBottomMenu;