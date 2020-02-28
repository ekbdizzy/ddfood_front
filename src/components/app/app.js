import React, { Component } from "react";
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
                <MainPage/>
                <Footer/>
            </div>
        )
    }
};

