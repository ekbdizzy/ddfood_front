import React, {Component, Fragment} from "react";
import {withRouter, Redirect} from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import './auth.scss';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUserData, setDefaultUser} from "../../actions/user_actions";
import {mapUserData} from "../../services/mappers";
import LoginForm from "./login-form";

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
                        <RegistrationForm/>}
                </div>
            </div>
        )
    }
}


const RegistrationForm = () => {

    const {createUser} = new AuthApiService();

    const postRegistrationForm = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => {
            body[key] = value
        });

        console.log(body);


        createUser(body)
            .then((result) => {
                console.log(result);
                // TODO
                // obtain token
                // authenticate user
                // redirect to page "registered"
            }).catch((error) => {
            console.log(error)
        });
    };


    return (
        <Fragment>
            <form className='auth__form'
                  onSubmit={(e) => {
                      postRegistrationForm(e)
                  }}>

                <div id='full-name'>
                    <label className='auth__label'>Ваше имя:</label>
                    <input className='auth__input'
                           type='text'
                           name='full_name'
                           autoComplete="off"
                           placeholder=''
                    />
                </div>

                <div id='email'>
                    <label className='auth__label'>Электронная почта:</label>
                    <input className='auth__input'
                           type='email'
                           name='email'
                           autoComplete="off"
                           placeholder='mail@mail.ru'
                    />
                </div>

                <div id='phone'>
                    <label className='auth__label'>Номер телефона:</label>
                    <input className='auth__input'
                           type='phone'
                           name='phone'
                           autoComplete="off"
                           placeholder='8-XXX-XXX-XX-XX'
                    />
                </div>

                <div id='password'>
                    <label className='auth__label'>Пароль:</label>
                    <input className='auth__input'
                           type='password'
                           name='password'
                           autoComplete="off"
                           placeholder=''
                    />
                </div>

                <div id='password-retry'>
                    <label className='auth__label'>Повторите пароль:</label>
                    <input className='auth__input'
                           type='password'
                           name='retry-password'
                           autoComplete="off"
                           placeholder=''
                    />
                </div>
                {/*<div className='auth__error'>*/}
                {/*    error*/}
                {/*</div>*/}

                <button
                    className='auth__submit'
                    type='submit'>
                    Зарегистрироваться
                </button>
            </form>
        </Fragment>
    )
};


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