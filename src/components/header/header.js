import React, {Component} from "react";
import './header.scss';
import logoIcon from '../../assets/img/logo_main.png';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {setDefaultUser} from "../../actions/user_actions";

class Header extends Component {

    logout = () => {
        const {set_default_user} = this.props;
        localStorage.removeItem('token');
        sessionStorage.removeItem('promoCode');
        set_default_user()
    };

    showBonuses = (user) => {
        const {isAuthenticated, bonuses} = user;
        if (isAuthenticated) {
            return (
                <div>
                    <Link to={'/bonus'}
                          className="nav-link">
                        {`Бонусы (${bonuses})`}
                    </Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to={'/bonus'}
                          className="nav-link">
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
                              className='nav-link'>
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
                          className='nav-link'>
                        Вход/Регистрация
                    </Link>
                </div>
            )
        }
    };

    render() {
        const {city, user} = this.props;
        return (
            <header className='header-wrapper'>
                <div className='wrapper'>
                    <nav className='top-nav'>
                        <Link to={'/'}>
                            <img src={logoIcon}
                                 className='logo'
                                 alt='daily diet'
                            />
                        </Link>

                        <div>
                            <Link to={'/dostavka'}
                                  className="nav-link">
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
                </div>
            </header>
        )
    }
}

const mapStateToProps = ({city, user}) => {
    return {
        city,
        user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        set_default_user: bindActionCreators(setDefaultUser, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);