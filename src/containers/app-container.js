import React, { Component } from "react";
import ApiService from "../services/api-services";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from "../components/app";
import siteConfig from "../config";

import { cityRequested, cityLoaded } from "../actions/actions";


class AppContainer extends Component {

    componentDidMount() {

        const {city_requested, city_loaded} = this.props;
        const {getClientIP, getClientCity, getCity} = new ApiService();


        city_requested();
        const sessionCityId = sessionStorage.getItem('city_id');
        if (sessionCityId !== null) {
            getCity(sessionCityId)
                .then((cityData) => {
                    city_loaded(cityData);
                })
        } else {
            getClientIP()
                .then((result) => {
                    getClientCity(result.ip)
                        .then((city_id) => {
                            if (city_id.location !== null) {
                                getCity(city_id.location.data.region_iso_code)
                                    .then((cityData) => {
                                        city_loaded(cityData);
                                        sessionStorage.setItem('city_id', cityData.city_id)
                                    });
                            } else {
                                getCity(siteConfig.defaults.cityId)
                                    .then((cityData) => {
                                        city_loaded(cityData);
                                        sessionStorage.setItem('city_id', cityData.city_id)
                                    });
                            }
                        })
                })
        }


    }


    render() {
        return <App/>
    }
}


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

