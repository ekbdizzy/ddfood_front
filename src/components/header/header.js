import React, {Component} from "react";
import './header.scss';
import logoIcon from '../../assets/img/logo_main.png';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {setDefaultUser} from "../../actions/user_actions";
import BurgerMenu from "../burger-menu";

class Header extends Component {

    state = {
        menuIsActive: false
    };

    toggleMenu = () => {
        this.setState(({menuIsActive}) => {
            return {menuIsActive: !menuIsActive}
        })
    };


    logout = () => {
        const {set_default_user} = this.props;
        localStorage.removeItem('token');
        sessionStorage.removeItem('promoCode');
        set_default_user();
        this.toggleMenu();

    };

    showBonuses = (user) => {
        const {isAuthenticated, bonuses} = user;
        if (isAuthenticated) {
            return (
                <div>
                    <Link to={'/bonus'}
                          className="nav-link"
                          onClick={() => this.toggleMenu()}
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
                          onClick={() => this.toggleMenu()}>
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
                              onClick={() => this.toggleMenu()}
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
                          onClick={() => this.toggleMenu()}>
                        Вход/Регистрация
                    </Link>
                </div>
            )
        }
    };

    render() {
        const {city, user} = this.props;
        const {menuIsActive} = this.state;


        return (
            <header className='header-wrapper'>

                <BurgerMenu
                    menuIsActive={menuIsActive}
                    toggleMenu={this.toggleMenu}
                />

                <div className='menu-wrapper'>

                    <Link to={'/'} className='logo__link'>
                        <img src={logoIcon}
                             className='logo__img'
                             alt='daily diet'
                        />
                    </Link>

                    <nav className={menuIsActive ? 'top-nav top-nav__active' : 'top-nav'}>
                        <div>
                            <Link to={'/delivery'}
                                  className="nav-link"
                                  onClick={() => this.toggleMenu()}
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
                </div>
            </header>
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


export default connect(mapStateToProps, mapDispatchToProps)

(
    Header
)
;