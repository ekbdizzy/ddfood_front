import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import Header from "../header";
import MainPage from "../main-page";
import Footer from "../footer";
import CheckoutContainer from "../../containers/checkout-container";


export default class App extends Component {

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <Header/>

                <Switch>
                    <Route path='/checkout/'
                           render={() => <CheckoutContainer/>}
                           exact/>

                    <Route path='/'
                           component={MainPage}
                    />
                </Switch>
                <Header/>


                {/*<Footer/>*/}
            </div>
        )
    }
};

