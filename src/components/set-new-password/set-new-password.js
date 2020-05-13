import React, {Component} from "react";
import './set-new-password.scss';
import {Link, withRouter} from "react-router-dom";
import parseQueryString from "../../services/parse-query-string";
import AuthApiService from "../../services/auth-api-service";

class SetNewPassword extends Component {

    state = {
        error: null,
        passwordIsChanged: false
    };

    setNewPassword = (e) => {
        e.preventDefault();
        const {createNewPassword} = new AuthApiService();
        const {location: {search}} = this.props;
        const body = parseQueryString(search);

        const formData = new FormData(e.target);
        formData.forEach((value, key) => {
            body[key] = value
        });

        if (body['password'] !== body['retry-password']) {
            return this.setState({error: 'Пароли не совпадают'})
        }

        createNewPassword(body)
            .then((result) => {
                if (result.ok) {
                    this.setState({passwordIsChanged: true})
                }

                if (result.error) {
                    this.setState({error: result.error})
                }
            })
    };

    render() {
        const {error, passwordIsChanged} = this.state;

        if (passwordIsChanged) {
            return (
                <div className='reset-password'>
                    <h1 className='reset-password__title'>Установка нового пароля</h1>
                    <p className='reset-password__text'>Пароль успешно изменен!</p>
                    <Link className='link-white' to='/'>Вернуться на главную</Link>
                </div>
            )
        }

        return (
            <form className='reset-password'
                  onSubmit={(e) => this.setNewPassword(e)}>
                <h1 className='reset-password__title'>Установка нового пароля</h1>
                <label className='reset-password__label'>Введите новый пароль:</label>
                <input className='reset-password__input'
                       name='password'
                       type='password'
                       required
                />
                <label className='reset-password__label'>Повторите пароль:</label>
                <input className='reset-password__input'
                       name='retry-password'
                       type='password'
                       required
                />
                {error && <div className='reset-password__error'>{error}</div>}
                <button className='reset-password__submit'>Сменить пароль</button>

            </form>
        )
    }

}

export default withRouter(SetNewPassword);