import React, {Component} from "react";
import './header.scss';
import logoIcon from '../../assets/img/logo_main.png';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Header extends Component {

    render() {
        const {city} = this.props;
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

                        <div>
                            <Link to={'/bonus'}
                                  className="nav-link">
                                Бонусная программа
                            </Link>
                        </div>

                        <div className='nav-link'>
                            Вход/Регистрация
                        </div>
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
};

const mapStateToProps = ({city}) => {
    return {
        city
    }
};

export default connect(mapStateToProps)(Header);