import React, { Component } from "react";
import './header.scss';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        const {city} = this.props;
        return (
            <header className='header'>
                <div className='wrapper'>
                    <Link to={'/'}>Main</Link>
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