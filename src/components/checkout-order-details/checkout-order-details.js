import React, {Component, Fragment} from "react";
import './checkout-order-details.scss';
import siteConfig from "../../config";
import {connect} from "react-redux";
import maskPhone from "../../services/mask-phone";
import OrderApiServices from "../../services/order-api-services";
import {Redirect} from "react-router";
import {bindActionCreators} from "redux";
import {removeCart} from "../../actions/actions";
import {UserDataForm, SelfDelivery, Delivery} from './checkout-order-forms';

class CheckoutOrderDetails extends Component {

    state = {
        isDelivery: false,
        orderCreated: false,
        user: {
            fullName: '',
            phone: '',
            email: ''
        }
    };

    componentDidMount() {
        const {user} = this.props;
        this.setState({
            user: {
                fullName: user.fullName,
                phone: user.phone,
                email: user.email
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {user} = this.props;
        if (prevProps.user !== user) {
            this.setState({
                user: {
                    fullName: user.fullName,
                    phone: user.phone,
                    email: user.email
                }
            })
        }
    }


    handleChangeName(e) {
        this.setState({user: {fullName: e.target.value}});
    }

    handleChangePhone(e) {
        const phone = maskPhone(e.target.value);
        this.setState({user: {phone: phone}});
    }

    handleChangeEmail(e) {
        this.setState({user: {email: e.target.value}});
    }

    setSelfDelivery() {
        this.setState({isDelivery: false});
    }

    setDelivery() {
        this.setState({isDelivery: true});
    }

    addPromoCodeToOrder = (order) => {
        const promoCode = JSON.parse(sessionStorage.getItem('promoCode'));
        if (promoCode) {
            order.discount = promoCode.discount;
            order.promoCode = promoCode.code;
        } else {
            order.discount = 0;
            order.promoCode = '';
        }
    };

    addCityToOrder = (order) => {
        const city = sessionStorage.getItem('city_id');
        if (city) {
            order.city = city;
        } else {
            order.city = siteConfig.defaults.cityId;
        }
    };

    createOrder = (e) => {
        e.preventDefault();
        const {postCreateOrder} = new OrderApiServices();
        const {cart: {totalPrice, itemsList}, remove_cart} = this.props;
        const formData = new FormData(e.target);
        const orderDetails = {};
        formData.forEach(
            (value, key) => {
                orderDetails[key] = value;
            });
        orderDetails.totalPrice = totalPrice;
        orderDetails.itemsList = itemsList;
        this.addPromoCodeToOrder(orderDetails);
        this.addCityToOrder(orderDetails);

        postCreateOrder(orderDetails)
            .then((result) => {
                console.log(result);
                remove_cart();
                this.setState({orderCreated: true})
            })
    };

    render() {
        const {user, isDelivery, orderCreated} = this.state;
        const {city: {selfDeliveryInfo, deliveryInfo}} = this.props;

        if (orderCreated) {
            return <Redirect to='/order-created/'/>
        }

        return (
            <div className='checkout-form'>
                <h1 className='checkout-title'>Оформление заказа</h1>
                <form className="grid"
                      onSubmit={(e) => this.createOrder(e)}>
                    <UserDataForm
                        user={user}
                        handleChangeName={(e) => this.handleChangeName(e)}
                        handleChangePhone={(e) => this.handleChangePhone(e)}
                        handleChangeEmail={(e) => this.handleChangeEmail(e)}
                    />
                    <hr className="grid-4"/>
                    <div className="checkout-form__field grid-4">
                        <div>
                            <input className="radio"
                                   value='self-delivery'
                                   name="delivery"
                                   type="radio"
                                   id="self_delivery"
                                   defaultChecked
                                   onClick={() => this.setSelfDelivery()}
                            />
                            <label htmlFor='self_delivery' className='radio__label'>Самовывоз</label>
                        </div>
                        <div>
                            <input className="radio"
                                   value='delivery'
                                   name="delivery"
                                   type="radio"
                                   id="delivery"
                                   onClick={() => this.setDelivery()}
                            />
                            <label htmlFor='delivery' className="radio__label">Доставка курьером</label>
                        </div>
                    </div>

                    {isDelivery ?
                        <Delivery deliveryInfo={deliveryInfo}/>
                        :
                        <SelfDelivery selfDeliveryInfo={selfDeliveryInfo}/>}

                    <div className="checkout-form__field grid-4">
                        <label>Комментарии к заказу:</label>
                        <textarea className="input"
                                  name="comments"
                                  type="text"
                                  rows='3'
                                  id="comments"
                                  autoComplete="off"/>
                    </div>
                    <button
                        type='submit'
                        className='submit_button grid-4'>
                        Оформить заказ
                    </button>
                </form>
            </div>
        )
    }
}


const mapStateToProps = ({user, city, cart}) => {
    return {
        user,
        city,
        cart
    };
};


const mapDispatchToPros = (dispatch) => {
    return {
        remove_cart: bindActionCreators(removeCart, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToPros)(CheckoutOrderDetails);


