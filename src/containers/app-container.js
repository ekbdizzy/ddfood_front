import React, {Component} from "react";
import ApiService from "../services/api-services";
import AuthApiService from "../services/auth-api-service";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from "../components/app";
import siteConfig from "../config";

import {
    cityRequested,
    cityLoaded,
    setDefaultUser,
    setUserData,
} from "../actions/actions";
import {mapUserData} from "../services/mappers";


class AppContainer extends Component {

    componentDidMount() {

        const {
            city_requested,
            city_loaded,
            set_default_user,
            set_user_data,
        } = this.props;

        const {getClientIP, getClientCity, getCity} = new ApiService();

        // request city
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
                            console.log('iso', city_id.location.data.region_iso_code);
                            if (city_id.location !== null) {
                                getCity(city_id.location.data.region_iso_code)
                                    .then((cityData) => {
                                        city_loaded(cityData);
                                        sessionStorage.setItem('city_id', cityData.city_id)
                                    });
                            } else {
                                console.log('here!');
                                getCity(siteConfig.defaults.cityId)
                                    .then((cityData) => {
                                        city_loaded(cityData);
                                        sessionStorage.setItem('city_id', cityData.city_id)
                                    });
                            }
                        })
                })
        }

        // request user

        const token = localStorage.getItem('token');
        if (!token) {
            set_default_user();
        } else {
            const {getUserData} = new AuthApiService();
            getUserData(token)
                .then((userData) => {

                    if (userData.detail) {
                        console.log(userData);
                        localStorage.removeItem('token');
                        set_default_user();
                    }

                    set_user_data({...mapUserData(userData), token: token});
                })
                .catch((error) => {
                    console.log(error, 'sss');
                    localStorage.removeItem('token');
                    set_default_user();
                });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        const {
            set_default_user,
            set_user_data,
            user
        } = this.props;


        // if (prevProps.user !== user) {
        //
        //     const token = localStorage.getItem('token');
        //     if (!token) {
        //         set_default_user();
        //
        //     } else {
        //         const {getUserData} = new AuthApiService();
        //         getUserData(token)
        //             .then((userData) => {
        //                 set_user_data({...mapUserData(userData), token: token});
        //             })
        //             .catch((error) => {
        //                 console.log(error);
        //                 localStorage.removeItem('token');
        //                 set_default_user();
        //             });
        //     }
        // }
    }

    render() {
        return <App/>
    }
}


const mapStateToProps = ({city, user}) => {
    return {city, user}
};

const mapDispatchToProps = (dispatch) => {
    return {
        city_requested: bindActionCreators(cityRequested, dispatch),
        city_loaded: bindActionCreators(cityLoaded, dispatch),
        set_default_user: bindActionCreators(setDefaultUser, dispatch),
        set_user_data: bindActionCreators(setUserData, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

