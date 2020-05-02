import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import './auth.scss';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUserData, setDefaultUser} from "../../actions/user_actions";
import LoginForm from "./login-form";
import RegistrationForm from "./reg-form";

class Auth extends Component {

    state = {
        loginError: '',
        loginFormIsActive: true,
        regFormIsActive: false
    };

    setActiveRegForm = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                loginFormIsActive: false,
                regFormIsActive: true
            }
        });
    };

    setActiveLoginForm = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return {
                loginFormIsActive: true,
                regFormIsActive: false
            }
        });
    };

    render() {
        const {
            set_user_data,
            set_default_user,
            user
        } = this.props;

        const {loginFormIsActive, regFormIsActive} = this.state;

        return (
            <div className='auth-block'>
                <div className='auth'>
                    <div className='auth__title-block'>
                        <div className={`title ${loginFormIsActive ? 'title-active' : ''}`}
                             onClick={this.setActiveLoginForm}
                             id='login-title'>
                            Войти
                        </div>
                        <div className={`title ${regFormIsActive ? 'title-active' : ''}`}
                             onClick={this.setActiveRegForm}
                             id="reg-title">
                            Регистрация
                        </div>
                    </div>
                    {loginFormIsActive ?
                        <LoginForm
                            set_user_data={set_user_data}
                            set_default_user={set_default_user}
                            user={user}
                        /> :
                        <RegistrationForm
                            set_user_data={set_user_data}
                            set_default_user={set_default_user}
                            user={user}
                        />}
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({user}) => {
    return {
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        set_user_data: bindActionCreators(setUserData, dispatch),
        set_default_user: bindActionCreators(setDefaultUser, dispatch),
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));