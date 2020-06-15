import React, {Component, useEffect} from "react";
import ReactDOM from "react-dom";
import './header.scss';
import logoIcon from '../../assets/img/logo_main.png';
import {Link} from "react-router-dom";
import BurgerMenu from "../burger-menu";
import Menu from '../menu';

class Header extends Component {

    componentDidMount() {
        document.addEventListener('click',
            this.handleCLickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click',
            this.handleCLickOutside, true);
    }


    handleCLickOutside = (e) => {
        const domNode = ReactDOM.findDOMNode(this);
        if (!domNode || !domNode.contains(e.target)) {
            this.setState({menuIsActive: false})
        }
    };

    state = {
        menuIsActive: false
    };
    toggleMenu = () => {
        this.setState(({menuIsActive}) => {
            return {menuIsActive: !menuIsActive}
        })
    };

    hideMenu = () => {
        return (
            this.setState({menuIsActive: false})
        )
    };


    render() {
        const {menuIsActive} = this.state;

        return (
            <header className='header-wrapper'>
                <BurgerMenu
                    menuIsActive={menuIsActive}
                    toggleMenu={this.toggleMenu}
                />
                <div className='menu-wrapper'>
                    <Link to={'/'} className='logo__link'
                          onClick={() => this.hideMenu()}
                    >
                        <img src={logoIcon}
                             className='logo__img'
                             alt='daily diet'
                        />
                    </Link>

                    <Menu
                        menuIsActive={menuIsActive}
                        toggleMenu={this.toggleMenu}
                        hideMenu={this.hideMenu}
                    />

                </div>
            </header>
        )
    }
}

export default Header;