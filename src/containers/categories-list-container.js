import React, { Component } from 'react';
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import CategoriesList from "../components/categories-list";
import MockService from "../services/mock-data-service";
import { connect } from "react-redux";

import {
    categoriesRequested,
    categoriesLoaded,
    categoriesLoadError
} from "../actions/actions";
import { bindActionCreators } from "redux";

class CategoriesContainer extends Component {


    componentDidMount() {
        const mockService = new MockService();
        const {
            load_categories,
            request_categories
        } = this.props;
        request_categories();
        mockService.getCategories()
            .then((data) => {
                load_categories(data)
            })
    }

    render() {
        const {loading, error} = this.props;
        console.log(this.props);

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>;
        }
        return (
            <CategoriesList/>
        )
    }
}

const mapStateToProps = ({categories, loading, error}) => {
    return {
        categories,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        request_categories: bindActionCreators(categoriesRequested, dispatch),
        load_categories: bindActionCreators(categoriesLoaded, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);