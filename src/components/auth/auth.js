import React, {Component, Fragment} from "react";
import './auth.scss';

export default class Auth extends Component {

    state = {
        loginError: '',
        loginFormIsActive: true,
        regFormIsActive: false
    };

    setActiveRegForm = (e) => {
        e.preventDefault();
        this.setState((state) => {
            console.log('reg is active');
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
            toggleAuthForm,
            isActiveAuthForm,
        } = this.props;

        const {loginFormIsActive, regFormIsActive} = this.state;


        return (
            <div className={isActiveAuthForm ? 'auth-block' : 'auth-block auth-block-hidden'}>

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
                    {loginFormIsActive ? <LoginForm/> : <RegistrationForm/>}
                </div>
                <div id='close_auth_form'
                     onClick={toggleAuthForm}>
                    ✕
                </div>
            </div>
        )
    }
}

const LoginForm = () => {
    return (
        <Fragment>
            <form className='auth__form'>

                <div id='login-username'>
                    <label className='auth__label'>Телефон или E-mail:</label>
                    <input className='auth__input'
                           type='text'
                           autoComplete={false}
                           placeholder='8XXXXXXXXXX | mail@mail.ru'
                    />
                </div>

                <div id='login-password'>
                    <label className='auth__label'>Пароль:</label>
                    <input className='auth__input'
                           type='password'
                           autoComplete={false}
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
                    onClick={(e) => {
                        e.preventDefault();
                        console.log('Submit login form')
                    }}>Войти
                </button>
            </form>
        </Fragment>
    )
};

const RegistrationForm = () => {
    return (
        <Fragment>
            <form className='auth__form'>

                <div id='full-name'>
                    <label className='auth__label'>Ввше имя:</label>
                    <input className='auth__input'
                           type='text'
                           autoComplete={false}
                           placeholder=''
                    />
                </div>

                <div id='email'>
                    <label className='auth__label'>Электронная почта:</label>
                    <input className='auth__input'
                           type='email'
                           autoComplete={false}
                           placeholder='mail@mail.ru'
                    />
                </div>

                <div id='phone'>
                    <label className='auth__label'>Номер телефона:</label>
                    <input className='auth__input'
                           type='phone'
                           autoComplete={false}
                           placeholder='8-XXX-XXX-XX-XX'
                    />
                </div>

                <div id='password'>
                    <label className='auth__label'>Пароль:</label>
                    <input className='auth__input'
                           type='password'
                           autoComplete={false}
                           placeholder=''
                    />
                </div>

                <div id='password-retry'>
                    <label className='auth__label'>Повторите пароль:</label>
                    <input className='auth__input'
                           type='password'
                           autoComplete={false}
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
