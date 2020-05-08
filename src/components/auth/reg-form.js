import React, {Fragment, Component} from "react";
import {Redirect} from "react-router";
import AuthApiService from "../../services/auth-api-service";
import {mapUserData} from "../../services/mappers";
import maskPhone from "../../services/mask-phone";

class RegistrationForm extends Component {

    state = {
        phone: '+7 '
    };


    phoneHandler = (e) => {
        e.preventDefault();
        this.setState({phone: maskPhone(e.target.value)});
    };

    postRegistrationForm = (e) => {
        e.preventDefault();
        const {set_user_data} = this.props;
        const {createUser, obtainToken, getUserData} = new AuthApiService();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => {
            body[key] = value
        });
        createUser(body)
            .then(() => {
                obtainToken({email: body.email, password: body.password})
                    .then(({token}) => {
                        getUserData(token)
                            .then((userData) => {
                                set_user_data({...mapUserData(userData), token})
                            })
                    })
            }).catch((error) => {
            console.log(error)
        });
    };


    render() {
        const {user} = this.props;
        const {phone} = this.state;

        if (user.isAuthenticated) {
            alert('Registered');
            return <Redirect to='/'/>
        }

        return (
            <Fragment>
                <form className='auth__form'
                      onSubmit={(e) => {
                          this.postRegistrationForm(e)
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
                               value={phone}
                               type='tel'
                               name='phone'
                               autoComplete="off"
                               placeholder='+7 XXX-XXX-XX-XX'
                               onChange={(e) => this.phoneHandler(e)}

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
    }
}

export default RegistrationForm;