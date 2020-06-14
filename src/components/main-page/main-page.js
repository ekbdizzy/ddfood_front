import React from "react";
import './main-page.scss';
import {Route} from 'react-router-dom';
import {withRouter} from "react-router-dom";

import CategoriesContainer from "../../containers/categories-list-container";
import ProductsListContainer from "../../containers/products-list-container";
import CartItemsListContainer from "../../containers/cart-items-list-container";
import ProductPageContainer from "../../containers/product-page-container";
import Search from "../search";
import MobileBottomMenu from "../mobile-bottom-menu";

const MainPage = () => {

    return (
        <section className='main-page'>
            <div className='wrapper'>

                <MobileBottomMenu/>

                <div className='left-sidebar'>
                    <CategoriesContainer/>
                </div>

                <div className='main'>

                    <Search/>

                    <Route path='/'
                           component={ProductsListContainer}
                           exact/>
                    <Route path='/category/:id'
                           render={({match}) => {
                               const {id} = match.params;
                               return <ProductsListContainer
                                   categoryId={id}
                               />
                           }}/>
                    <Route path='/product/:id'
                           render={({match}) => {
                               const {id} = match.params;
                               return <ProductPageContainer
                                   productId={id}
                               />
                           }}
                    />
                </div>
                <Route path='/'
                       render={() => {
                           return (
                               <div className='right-sidebar'>
                                   <CartItemsListContainer/>
                               </div>
                           )
                       }}/>
            </div>
        </section>
    )
};

export default withRouter(MainPage);