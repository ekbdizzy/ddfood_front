import React, {Component, Fragment} from "react";
import {withRouter, Redirect} from "react-router-dom";
import AuthApiService from "../../services/auth-api-service";
import './auth.scss';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {setUserData, setDefaultUser} from "../../actions/user_actions";
import {mapUserData} from "../../services/mappers";

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


const LoginForm = ({set_user_data, set_default_user, user}) => {

        const {obtainToken, getUserData} = new AuthApiService();

        const postLoginForm = (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const body = {};
            formData.forEach((value, key) => {
                body[key] = value
            });

            obtainToken(body)
            // authApiService.updateUser(token)
                .then((result) => {
                    localStorage.setItem('token', result['token']);
                    const {token} = result;
                    getUserData(token)
                        .then((userData) => {
                            set_user_data({...mapUserData(userData), token});
                        })
                        .catch((error) => {
                            console.log(error);
                            localStorage.removeItem('token');
                            set_default_user();
                        })
                })
                .catch((e) => {
                    console.log(e);
                });
        };

        if (user.isAuthenticated) {
            return <Redirect to='/'/>
        }

        return (
            <Fragment>
                <form className='auth__form'
                      action=''
                      onSubmit={(e) => {
                          postLoginForm(e)
                      }}>


                    <div id='login-username'>
                        <label className='auth__label'>Телефон или E-mail:</label>
                        <input className='auth__input'
                               name='email'
                               id='reg-email'
                               type='text'
                               autoComplete='off'
                               placeholder='8XXXXXXXXXX | mail@mail.ru'
                        />
                    </div>

                    <div id='login-password'>
                        <label className='auth__label'>Пароль:</label>
                        <input className='auth__input'
                               name='password'
                               type='password'
                               autoComplete="off"
                               placeholder=''
                        />

                    </div>
                    {/*<div className='auth__error'>*/}
                    {/*    error*/}
                    {/*</div>*/}
                    <a href='/'
                       className='link-white'
                    > Воccтановить пароль</a>
                    <button
                        className='auth__submit'
                        type='submit'>
                        Войти
                    </button>


                </form>
            </Fragment>
        )
    }
;

const RegistrationForm = () => {
    return (
        <Fragment>
            <form className='auth__form'>

                <div id='full-name'>
                    <label className='auth__label'>Ваше имя:</label>
                    <input className='auth__input'
                           type='text'
                           autoComplete="off"
                           placeholder=''
                    />
                </div>

                <div id='email'>
                    <label className='auth__label'>Электронная почта:</label>
                    <input className='auth__input'
                           type='email'
                           autoComplete="off"
                           placeholder='mail@mail.ru'
                    />
                </div>

                <div id='phone'>
                    <label className='auth__label'>Номер телефона:</label>
                    <input className='auth__input'
                           type='phone'
                           autoComplete="off"
                           placeholder='8-XXX-XXX-XX-XX'
                    />
                </div>

                <div id='password'>
                    <label className='auth__label'>Пароль:</label>
                    <input className='auth__input'
                           type='password'
                           autoComplete="off"
                           placeholder=''
                    />
                </div>

                <div id='password-retry'>
                    <label className='auth__label'>Повторите пароль:</label>
                    <input className='auth__input'
                           type='password'
                           autoComplete="off"
                           placeholder=''
                    />
                </div>
                {/*<div className='auth__error'>*/}
                {/*    error*/}
                {/*</div>*/}

                <button
                    className='auth__submit'
                    onClick={(e) => {
                        e.preventDefault();
                        console.log('Submit registration form')
                    }}>Зарегистрироваться
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