import React, {Component} from "react";
import './reset-password.scss';
import {connect} from 'react-redux';
import {Redirect} from "react-router";
import AuthApiService from "../../services/auth-api-service";
import {Link} from "react-router-dom";

class ResetPassword extends Component {

    state = {
        linkIsSent: false,
        error: null
    };

    sendLink = (e) => {
        const {sendLinkWithPasswordReset} = new AuthApiService();
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = {};
        formData.forEach((value, key) => {
            body[key] = value
        });
        sendLinkWithPasswordReset(body)
            .then((result) => {
                if (result.ok) {
                    this.setState({linkIsSent: true})
                }
                if (result.error) {
                    this.setState({error: result.error})
                }
            })


    };

    render() {

        const {linkIsSent, error} = this.state;
        const {isAuthenticated} = this.props;
        if (isAuthenticated) {
            return <Redirect to='/'/>
        }

        if (linkIsSent) {
            return (
                <div className='reset-password'>
                    <h1 className='reset-password__title'>Сброс пароля</h1>
                    <p className='reset-password__text'>
                        Письмо отправлено.<br/>
                        Перейдите по ссылке в письме, чтобы ввести новый пароль.
                    </p>
                    <Link
                        className='link-white'
                        to='/'>Вернуться на главную</Link>
                </div>
            )
        }

        return (
            <form className='reset-password'
                  onSubmit={(e) => this.sendLink(e)}>
                <h1 className='reset-password__title'>Сброс пароля</h1>
                <p className='reset-password__text'>Введите почту, указанную при регистрации.<br/>
                    Мы отправим вам ссылку для создания нового пароля:</p>
                <input className='reset-password__input'
                       name='email'
                       type='email'
                       placeholder='mail@mail.ru'
                       required
                />
                {error && <div className='reset-password__error'>{error}</div>}
                <button className='reset-password__submit'>Получить ссылку</button>
            </form>
        )
    }
}


const mapStateToProps = ({user: {isAuthenticated}}) => {
    return {isAuthenticated}
};

export default connect(mapStateToProps)(ResetPassword);