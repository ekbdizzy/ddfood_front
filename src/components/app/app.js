import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.scss';
import Header from "../header";
import MainPage from "../main-page";
import Footer from "../footer";


export default class App extends Component {

    componentDidMount() {
    }

    render() {

        return (
            <div>
                <Header/>

                <Route path='/'
                       component={MainPage}
                       />

                <Footer/>
            </div>
        )
    }
};

