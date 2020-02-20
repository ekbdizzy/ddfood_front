import React, { Component } from 'react';
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
            .then((categories) => {
                load_categories(categories)
            })
    }

    render() {
        return (
            <CategoriesList/>
        )
    }
}

const mapStateToProps = ({categories: {categoriesList}}) => {
    return {
        categories: categoriesList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        request_categories: bindActionCreators(categoriesRequested, dispatch),
        load_categories: bindActionCreators(categoriesLoaded, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);