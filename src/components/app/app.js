import React from "react";
import './app.scss';
import Header from "../header";
import MainPage from "../main-page";
import Footer from "../footer";


const App = () => {
    return (
        <div>
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    )
};


export default App;