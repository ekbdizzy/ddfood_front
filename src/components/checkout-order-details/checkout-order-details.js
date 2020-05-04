import React, {Component, Fragment} from "react";
import './checkout-order-details.scss';
import siteConfig from "../../config";
import {connect} from "react-redux";
import maskPhone from "../../services/mask-phone";


class CheckoutOrderDetails extends Component {

    state = {
        isDelivery: false,
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
        const formData = new FormData(e.target);
        const orderDetails = {};
        formData.forEach((value, key) => {
            orderDetails[key] = value;
        });
        this.addPromoCodeToOrder(orderDetails);
        this.addCityToOrder(orderDetails);

        console.log(orderDetails);
    };

    render() {
        const {user, isDelivery} = this.state;
        const {city: {selfDeliveryInfo, deliveryInfo}} = this.props;

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

                    {isDelivery ? <Delivery deliveryInfo={deliveryInfo}/> :
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

const UserDataForm = (
    {
        user: {fullName, phone, email},
        handleChangeName,
        handleChangePhone,
        handleChangeEmail
    }) => {
    return <Fragment>
        <div className="checkout-form__field grid-4">
            <label>Ваше имя:</label>
            <input className="input"
                   value={fullName}
                   name="fullName"
                   type="text"
                   id="full_name"
                   autoComplete="off"
                   onChange={(e) => handleChangeName(e)}

            />
        </div>

        <div className="checkout-form__field grid-2">
            <label>Ваш телефон:</label>
            <input className="input"
                   value={phone}
                   name="phone"
                   type="phone"
                   id="phone"
                   autoComplete="off"
                   onChange={(e) => handleChangePhone(e)}
            />
        </div>

        <div className="checkout-form__field grid-2">
            <label>Электронная почта:</label>
            <input className="input"
                   value={email}
                   name="email"
                   type="email"
                   id="email"
                   autoComplete="off"
                   onChange={(e) => handleChangeEmail(e)}
            />
        </div>
    </Fragment>
};

const SelfDelivery = ({selfDeliveryInfo}) => {
    return (
        <Fragment>
            <div className='grid-4 delivery-info'>
                {selfDeliveryInfo}
            </div>

            <div className='map grid-4'>
            </div>
        </Fragment>
    )
};


const Delivery = ({deliveryInfo}) => {
    return (
        <Fragment>
            <div className='grid-4 delivery-info'>
                {deliveryInfo}
            </div>
            <div className="checkout-form__field grid-4">
                <label>Адрес доставки:</label>
                <input className="input"
                    // value=''
                       name="address"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Подъезд:</label>
                <input className="input"
                    // value=''
                       name="entrance"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Этаж:</label>
                <input className="input"
                    // value=''
                       name="floor"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Офис/Кв.:</label>
                <input className="input"
                    // value=''
                       name="apartment"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                />
            </div>

            <div className="checkout-form__field grid-4">

                <h1>Способ оплаты:</h1>

                <div>
                    <input className="radio"
                           value='cash'
                           name="pay_method"
                           type="radio"
                           id="cash"
                           defaultChecked
                    />
                    <label htmlFor='cash' className='radio__pay-label'>Наличными курьеру</label>
                </div>

                <div>
                    <input className="radio"
                           value='card'
                           name="pay_method"
                           type="radio"
                           id="card"
                    />
                    <label htmlFor='card' className="radio__pay-label">
                        Банковской картой курьеру при получении
                    </label>
                </div>
            </div>
        </Fragment>
    )
};


const mapStateToProps = ({user, city}) => {
    return {
        user,
        city
    };
};

export default connect(mapStateToProps)(CheckoutOrderDetails);


