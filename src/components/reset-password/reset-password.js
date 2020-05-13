import React, {Component} from "react";
import './reset-password.scss';
import {connect} from 'react-redux';
import {Redirect} from "react-router";

class ResetPassword extends Component {
    render() {

        const {isAuthenticated} = this.props;
        if (isAuthenticated) {
            return <Redirect to='/'/>
        }


        return (
            <form className='reset-password'>
                <h1 className='reset-password__title'>Сброс пароля</h1>
                <label className='reset-password__label'>Введите почту, указанную при регистрации.<br/>
                    Мы отправим вам ссылку для создания нового пароля:</label>
                <input className='reset-password__input'
                       type='email'
                       placeholder='mail@mail.ru'
                       required
                />
                <button className='reset-password__submit'>Получить ссылку для нового пароля</button>
            </form>
        )
    }
}


const mapStateToProps = ({user: {isAuthenticated}}) => {
    return {isAuthenticated}
};

export default connect(mapStateToProps)(ResetPassword);