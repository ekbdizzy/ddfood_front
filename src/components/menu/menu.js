import React, {Component} from "react";
import './menu.scss';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {setDefaultUser} from "../../actions/user_actions";
import {connect} from "react-redux";

class Menu extends Component {

    showBonuses = (user) => {
        const {isAuthenticated, bonuses} = user;
        if (isAuthenticated) {
            return (
                <div>
                    <Link to={'/bonus'}
                          className="nav-link"
                          onClick={() => this.props.hideMenu()}
                    >
                        {`Бонусы (${bonuses})`}
                    </Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to={'/bonus'}
                          className="nav-link"
                          onClick={() => this.props.hideMenu()}>
                        Бонусная программа
                    </Link>
                </div>
            )
        }
    };

    showAuthBlock = (isAuthenticated) => {
        if (isAuthenticated) {
            return (
                <>
                    <div>
                        <Link to={'/auth'}
                              className='nav-link'
                              onClick={() => this.props.hideMenu()}
                        >
                            Личный кабинет
                        </Link>
                    </div>

                    < div
                        className='nav-link'
                        onClick={this.logout}>
                        Выйти
                    </div>
                </>
            )
        } else {
            return (
                <div>
                    <Link to={'/auth'}
                          className='nav-link'
                          onClick={() => this.props.hideMenu()}>
                        Вход/Регистрация
                    </Link>
                </div>
            )
        }
    };

    logout = () => {
        const {set_default_user} = this.props;
        localStorage.removeItem('token');
        sessionStorage.removeItem('promoCode');
        set_default_user();
        this.props.hideMenu();

    };

    render() {

        const {
            city,
            user,
            menuIsActive,
            hideMenu
        } = this.props;

        return (

            <nav className={menuIsActive ? 'top-nav top-nav__active' : 'top-nav'}>
                <div>
                    <Link to={'/delivery'}
                          className="nav-link"
                          onClick={() => hideMenu()}
                    >
                        Доставка и оплата
                    </Link>
                </div>

                {this.showBonuses(user)}
                {this.showAuthBlock(user.isAuthenticated)}

                <div>
                    <p className='nav-text'>Ваш город:</p>
                    <p className='nav-city'>{city.name}</p>
                </div>

                <div className='nav-text'>
                    {city.address}<br/>
                    Работаем {city.workingTime}<br/>
                    Тел.: {city.phone}
                </div>
            </nav>
        )
    }
}

const
    mapStateToProps = ({city, user}) => {
        return {
            city,
            user
        }
    };

const
    mapDispatchToProps = (dispatch) => {
        return {
            set_default_user: bindActionCreators(setDefaultUser, dispatch)
        }
    };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
