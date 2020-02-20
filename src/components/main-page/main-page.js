import React from "react";
import './main-page.scss';

import CategoriesList from "../categories-list";
import ItemList from "../items-list";
import Cart from "../cart";
import CategoriesContainer from "../../containers/categories-list-container";

const MainPage = () => {
    return (
        <section className='main-page'>
            <div className='wrapper'>
                <div className='left-sidebar'>
                    <CategoriesContainer/>
                </div>

                <div className='main'>
                    <ItemList/>
                </div>

                <div className='right-sidebar'>
                    <Cart/>
                </div>
            </div>
        </section>
    )
};

export default MainPage;