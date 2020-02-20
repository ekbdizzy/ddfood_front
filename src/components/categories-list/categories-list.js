import React, { Component } from "react";
import './categories-list.scss';
import { connect } from 'react-redux';

class CategoriesList extends Component {

    render() {

        const {categories} = this.props;

        return (
            <div className='category'>
                <div className='category__title'>
                    Категории
                </div>
                {
                    categories.map((category) => {
                        return (
                            <div className='category__item'>
                                {category.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    };
}

const mapStateToProps = ({categories}) => {
    return {
        categories
    }
};

export default connect(mapStateToProps)(CategoriesList);
