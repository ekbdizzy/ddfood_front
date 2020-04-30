import React, {Component} from "react";
import './auth.scss';

export default class Auth extends Component {


    render() {
        const {toggleAuthForm, isActiveAuthForm} = this.props;

        return (
            <div className={isActiveAuthForm ? 'auth' : 'auth auth-hidden'}>
                <div id='close_auth_form'
                     onClick={toggleAuthForm}>
                    ✕
                </div>
            </div>
        )
    }
}

