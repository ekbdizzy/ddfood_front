import React from "react";
import './main-page.scss';

import Cart from "../cart";
import CategoriesContainer from "../../containers/categories-list-container";
import ProductsListContainer from "../../containers/products-list-container";

const MainPage = () => {
    return (
        <section className='main-page'>
            <div className='wrapper'>
                <div className='left-sidebar'>
                    <CategoriesContainer/>
                </div>

                <div className='main'>
                    <ProductsListContainer/>
                </div>


                <div className='right-sidebar'>
                    <Cart/>
                </div>
            </div>
        </section>
    )
};

export default MainPage;