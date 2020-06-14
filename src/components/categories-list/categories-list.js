import React, {Component} from "react";
import {Link} from "react-router-dom";
import './categories-list.scss';
import {connect} from 'react-redux';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


class CategoriesList extends Component {

    render() {
        const {categories, loading, error} = this.props;

        if (loading) {
            return <Spinner/>;
        } else if (error) {
            return <ErrorIndicator/>
        }

        return (
            <div className='category'>
                <div className='category__title'>
                    Категории
                </div>

                {
                    categories.map((category) => {
                        return (
                            <Link key={category.id}
                                  to={`/category/${category.id}`}>
                                <div className='category__item'>
                                    {category.name}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    };
}

const mapStateToProps = (
    {categories: {categoriesList, error, loading}}) => {
    return {
        categories: categoriesList,
        error,
        loading
    }
};

export default connect(mapStateToProps)(CategoriesList);
