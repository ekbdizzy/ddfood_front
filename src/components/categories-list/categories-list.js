import React, { Component } from "react";
import './categories-list.scss';
import { connect } from 'react-redux';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class CategoriesList extends Component {


    render() {

        const {categories, loading, error} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }

        return (
            <div className='category'>
                <div className='category__title'>
                    Категории
                </div>

                {
                    categories.map((category) => {
                        return (
                            <div key={category.id} className='category__item'>
                                {category.name}
                            </div>
                        )
                    })
                }
            </div>
        )
    };
}

const mapStateToProps = ({categories: {categoriesList, error, loading}}) => {

    return {
        categories: categoriesList,
        error,
        loading
    }
};

export default connect(mapStateToProps)(CategoriesList);
