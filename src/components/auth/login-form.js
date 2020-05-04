import AuthApiService from "../../services/auth-api-service";
import {mapUserData} from "../../services/mappers";
import {Redirect} from "react-router";
import React, {Fragment} from "react";

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
                    {/*<span>error</span>*/}
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
};

export default LoginForm;
