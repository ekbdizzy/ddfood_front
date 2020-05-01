import React, {Component} from "react";
import {Route, Switch} from 'react-router-dom';
import './app.scss';
import Header from "../header";
import MainPage from "../main-page";
import Footer from "../footer";
import CheckoutContainer from "../../containers/checkout-container";
import Auth from "../auth";


class App extends Component {

    state = {
        isActiveMenu: false
    };


    toggleAuthForm = () => {
        const {isActiveAuthForm} = this.state;

        if (isActiveAuthForm) {
            document.body.style.overflowY = "auto";
        } else {
            document.body.style.overflowY = "hidden";
        }
        this.setState(({isActiveAuthForm}) => ({isActiveAuthForm: !isActiveAuthForm}))
    };

    toggleMenu = () => {
        this.setState(({isActiveMenu}) => ({isActiveMenu: !isActiveMenu}))
    };


    render() {
        return (
            <div>
                <Header toggleAuthForm={() => this.toggleAuthForm()}
                />


                <Switch>

                    <Route path='/auth/'
                           render={() => <Auth
                               toggleAuthForm={() => this.toggleAuthForm()}
                           />}
                           exact/>

                    <Route path='/checkout/'
                           render={() => <CheckoutContainer/>}
                           exact/>

                    <Route path='/'
                           component={MainPage}
                    />


                </Switch>
                {/*<Header/>*/}


                {/*<Footer/>*/}
            </div>
        )
    }
}

export default App;
