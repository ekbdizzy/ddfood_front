import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import './app.scss';
import Header from "../header";
import MainPage from "../main-page";
// import Footer from "../footer";
import CheckoutContainer from "../../containers/checkout-container";
import Auth from "../auth";
import OrderCreated from "../order-created";
import ResetPassword from "../reset-password";
import SetNewPassword from "../set-new-password";


class App extends Component {

    state = {
        isActiveMenu: false
    };


    toggleMenu = () => {
        this.setState(({isActiveMenu}) => ({isActiveMenu: !isActiveMenu}))
    };


    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/auth/'
                           component={Auth}
                           exact/>

                    <Route path='/checkout/'
                           component={CheckoutContainer}
                           exact/>

                    <Route path='/order-created/'
                           component={OrderCreated}
                           exact/>

                    <Route path='/reset-password/'
                           component={ResetPassword}
                           exact/>

                    <Route path='/set-new-password/'
                           component={SetNewPassword}
                    />
                    <Route path='/'
                           component={MainPage}/>
                </Switch>

                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;
