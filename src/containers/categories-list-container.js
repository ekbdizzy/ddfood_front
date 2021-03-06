import React, {Component} from 'react';
import CategoriesList from "../components/categories-list";
import {connect} from "react-redux";
import siteConfig from '../config';

import ApiService from "../services/api-services";

import {
    categoriesRequested,
    categoriesLoaded,
    // categoriesLoadError
} from "../actions/actions";
import {bindActionCreators} from "redux";

class CategoriesContainer extends Component {

    componentDidMount() {
        const {getData} = new ApiService();
        const {
            load_categories,
            request_categories
        } = this.props;
        request_categories();
        getData(siteConfig.urls.getCategoriesUrl)
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

const mapStateToProps = () => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        request_categories: bindActionCreators(categoriesRequested, dispatch),
        load_categories: bindActionCreators(categoriesLoaded, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);