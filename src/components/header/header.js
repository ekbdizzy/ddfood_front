import React, { Component } from "react";
import './header.scss';
import logoIcon from '../../assets/img/logo_main.png';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        const {city} = this.props;
        return (
            <header className='header'>
                <div className='wrapper'>
                    <Link to={'/'}>
                        <img src={logoIcon}/>
                    </Link>
                    {city.name} - {city.address}
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