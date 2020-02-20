import React, { Component } from "react";
import './categories-list.scss';
import MockService from "../../services/mock-data-service";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

export default class CategoriesList extends Component {

    state = {
        categories: null,
        isLoaded: false,
        error: false
    };

    mockService = new MockService();

    componentDidMount() {
        this.mockService.getCategories()
            .then((categories) => {
                this.setState({
                    categories: categories,
                    isLoaded: true
                });
            }).catch(() => {
            this.setState({
                    error: true
                }
            )
        })
    }

    render() {

        const {categories, isLoaded, error} = this.state;

        if (error) {
            return <ErrorIndicator/>
        }

        if (!isLoaded) {
            return <Spinner/>
        }

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

