import React, {Fragment, Component} from "react";
import AuthApiService from "../../services/auth-api-service";
import {mapUserData} from "../../services/mappers";
import {Redirect} from "react-router";
import maskPhone from "../../services/mask-phone";
import {Link} from "react-router-dom";

class LoginForm extends Component {

    state = {
        loginByEmail: true,
        phone: '+7 ',
        error: null
    };

    postLoginForm = (e) => {
        e.preventDefault();
        const {set_user_data, set_default_user} = this.props;
        const {obtainToken, getUserData} = new AuthApiService();
        const formData = new FormData(e.target);
        const body = {};

        formData.forEach((value, key) => {
            body[key] = value
        });

        obtainToken(body)
            .then((result) => {
                if (result.error) {
                    this.setState((state) => {
                        return {error: result.error}
                    });
                    set_default_user();
                }

                if (result.token) {
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
                }
            })
            .catch((e) => {
                console.log(e);
            });
    };

    toggleLoginByEmail = () => {
        this.setState(({loginByEmail}) => {
            return {loginByEmail: !loginByEmail}
        })
    };

    phoneHandler = (e) => {
        e.preventDefault();
        this.setState({phone: maskPhone(e.target.value)});
    };


    render() {

        const {user} = this.props;
        const {loginByEmail, phone, error} = this.state;

        if (user.isAuthenticated) {
            return <Redirect to='/'/>
        }

        return (
            <Fragment>
                <form className='auth__form'
                      onSubmit={(e) => this.postLoginForm(e)}>

                    {loginByEmail
                        ? <LoginByEmail toggleLoginByEmail={this.toggleLoginByEmail}/>
                        : <LoginByPhone toggleLoginByEmail={this.toggleLoginByEmail}
                                        phoneHandler={this.phoneHandler}
                                        phone={phone}
                        />}

                    <div id='login-password'>
                        <label className='auth__label'>Пароль:</label>
                        <input className='auth__input'
                               name='password'
                               type='password'
                               autoComplete="off"
                               placeholder=''
                        />
                    </div>
                    {error && <div className='auth__error'>{error}</div>}
                    <Link to='/reset-password/' className='link-white'> Воccтановить пароль</Link>
                    <button
                        className='auth__submit'
                        type='submit'>
                        Войти
                    </button>
                </form>
            </Fragment>
        )
    }
}

const LoginByEmail = ({toggleLoginByEmail}) => {
    return (
        <div id='login-username'>
            <div className='auth__label-block'>
                <label className='auth__label'>E-mail:</label>
                <ins className='auth__label auth__label-comment'
                     onClick={() => toggleLoginByEmail()}>
                    Войти по номеру телефона
                </ins>
            </div>
            <input className='auth__input'
                   name='email'
                   id='reg-email'
                   type='email'
                   autoComplete='off'
                   placeholder='mail@mail.ru'
                   required
            />
        </div>
    )
};


const LoginByPhone = ({toggleLoginByEmail, phoneHandler, phone}) => {
    return (
        <div id='login-username'>
            <div className='auth__label-block'>
                <label className='auth__label'>Телефон:</label>
                <ins className='auth__label auth__label-comment'
                     onClick={() => toggleLoginByEmail()}>
                    Войти по электронной почте
                </ins>
            </div>
            <input className='auth__input'
                   value={phone}
                   name='phone'
                   id='reg-email'
                   type='tel'
                   autoComplete='off'
                   onChange={(e) => phoneHandler(e)}
            />
        </div>
    )
};


export default LoginForm;
