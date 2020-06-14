import React from "react";
import {Link} from "react-router-dom";
import './mobile-bottom-menu.scss';
import CartBottomIcon from "./cart-bottom-icon";
import CategoriesBottomIcon from "./categories-bottom-icon";

const MobileBottomMenu = () => {
    return (
        <div className='bottom-menu'>

            <CategoriesBottomIcon/>
            <CartBottomIcon/>

        </div>
    )
};

export default MobileBottomMenu;