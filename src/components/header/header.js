import React, { Component } from "react";
import './header.scss';
import { connect } from "react-redux";

class Header extends Component {

    render() {
        const {city} = this.props;
        return (
            <header className='header'>
                <div className='wrapper'>
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