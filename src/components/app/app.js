import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import Header from "../header";
import MainPage from "../main-page";
import Checkout from "../checkout";
import Footer from "../footer";


export default class App extends Component {

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <Header/>

                <Switch>
                    <Route path='/checkout/'
                           render={() => <Checkout/>}
                           exact/>

                    <Route path='/'
                           component={MainPage}
                    />
                </Switch>


                <Footer/>
            </div>
        )
    }
};

