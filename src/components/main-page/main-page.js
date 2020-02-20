import React from "react";
import './main-page.scss';

import CategoriesList from "../categories-list";
import ItemList from "../items-list";
import Cart from "../cart";

const MainPage = () => {
    return (
        <section className='main-page'>
            <div className='wrapper'>
                <CategoriesList/>
                <ItemList/>
                <Cart/>
            </div>
        </section>
    )
};

export default MainPage;