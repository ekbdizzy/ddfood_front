import React, { Component } from "react";
import ApiService from "../services/api-services";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from "../components/app";

import { cityRequested, cityLoaded } from "../actions/actions";


class AppContainer extends Component {

    componentDidMount() {
        // const {getClientIP, getClientCity, getCity} = new ApiService();
        const {getCityData} = new ApiService();
        const {city_requested, city_loaded} = this.props;

        city_requested();

        // getClientIP()
        //     .then(({ip}) => {
        //         getClientCity(ip)
        //             .then((city_id) => {
        //                 if (city_id.location !== null) {
        //                     getCity(city_id.location.data.region_iso_code)
        //                         .then((result) => {
        //                             city_loaded(result)
        //                         })
        //                 }
        //
        //             })
        //     })

        getCityData()
            .then((result) => {
                city_loaded(result)
            })
    }


    render() {
        return <App/>
    }
}


// componentDidMount() {
//     const mockService = new MockService();
//     const {
//         load_categories,
//         request_categories
//     } = this.props;
//     request_categories();
//     mockService.getCategories()
//         .then((categories) => {
//             load_categories(categories)
//         })
// }
//
// render() {
//     return (
//         <CategoriesList/>
//     )
// }
// }


const mapStateToProps = ({city}) => {
    return {city}
};

const mapDispatchToProps = (dispatch) => {
    return {
        city_requested: bindActionCreators(cityRequested, dispatch),
        city_loaded: bindActionCreators(cityLoaded, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

