import React, {Component, Fragment} from "react";
import './checkout-order-details.scss';


export default class CheckoutOrderDetails extends Component {

    state = {};

    handleChangeName(e) {
        console.log(e.target.value);
    }

    render() {
        return (
            <div className='checkout-form'>

                <h1 className='checkout-title'>Оформление заказа</h1>

                <form className="grid"
                      onSubmit={(e) => {
                          e.preventDefault();
                          console.log(e.target);
                      }}>

                    <div className="checkout-form__field grid-4">
                        <label>Ваше имя:</label>
                        <input className="input"
                            // value=''
                               name="full_name"
                               type="text"
                               id="full_name"
                               autoComplete="off"
                               onChange={(e) => this.handleChangeName(e)}
                        />
                    </div>

                    <div className="checkout-form__field grid-2">
                        <label>Ваш телефон:</label>
                        <input className="input"
                            // value=''
                               name="phone"
                               type="phone"
                               id="phone"
                               autoComplete="off"
                               onChange={(e) => this.handleChangeName(e)}
                        />
                    </div>

                    <div className="checkout-form__field grid-2">
                        <label>Электронная почта:</label>
                        <input className="input"
                            // value=''
                               name="email"
                               type="email"
                               id="email"
                               autoComplete="off"
                               onChange={(e) => this.handleChangeName(e)}
                        />
                    </div>

                    <hr className="grid-4"/>

                    <div className="checkout-form__field grid-4">

                        <div>
                            <input className="radio"
                                // value=''
                                   name="delivery"
                                   type="radio"
                                   id="self_delivery"
                                   onChange={(e) => this.handleChangeName(e)}
                            />
                            <label htmlFor='self_delivery' className='radio__label'>Самовывоз</label>
                        </div>
                        <div>
                            <input className="radio"
                                // value=''
                                   name="delivery"
                                   type="radio"
                                   id="delivery"
                                   onChange={(e) => this.handleChangeName(e)}
                            />
                            <label htmlFor='delivery' className="radio__label">Доставка курьером</label>

                        </div>
                    </div>

                    {/*<SelfDelivery/>*/}
                    <Delivery/>

                    <div className="checkout-form__field grid-4">
                        <label>Комментарии к заказу:</label>
                        <textarea className="input"
                            // value=''
                                  name="comments"
                                  type="text"
                                  rows='3'
                                  id="comments"
                                  autoComplete="off"
                                  onChange={(e) => this.handleChangeName(e)}
                        />
                    </div>


                    <button
                        type='submit'
                        className='submit_button grid-4'
                        onSubmit={(e) => {
                            setInterval((e) => {
                                console.log(e.tagret)
                            }, 1000);
                            e.preventDefault();
                        }}>
                        Оформить заказ
                    </button>
                </form>


            </div>

        )
    }
}


const SelfDelivery = () => {
    return (
        <Fragment>
            <div className='grid-4'>
                Забрать заказ можно по адресу:
                г.Санкт-Петербург
                Малый проспект В.О., д.44, с 12.00 до 22.00
            </div>

            <div className='map grid-4'>

            </div>


        </Fragment>
    )
};


const Delivery = () => {
    return (
        <Fragment>
            <div className="checkout-form__field grid-4">
                <label>Адрес доставки:</label>
                <input className="input"
                    // value=''
                       name="full_name"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                       onChange={(e) => this.handleChangeName(e)}
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Подъезд:</label>
                <input className="input"
                    // value=''
                       name="full_name"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                       onChange={(e) => this.handleChangeName(e)}
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Этаж:</label>
                <input className="input"
                    // value=''
                       name="full_name"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                       onChange={(e) => this.handleChangeName(e)}
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Офис/Кв.:</label>
                <input className="input"
                    // value=''
                       name="full_name"
                       type="text"
                       id="full_name"
                       autoComplete="off"
                       onChange={(e) => this.handleChangeName(e)}
                />
            </div>

            <div className="checkout-form__field grid-4">

                <h1>Способ оплаты:</h1>

                <div>
                    <input className="radio"
                        // value=''
                           name="pay_method"
                           type="radio"
                           id="cash"
                           // checked
                        // onChange={(e) => this.handleChangeName(e)}
                    />
                    <label htmlFor='cash' className='radio__pay-label'>Наличными курьеру</label>
                </div>

                <div>
                    <input className="radio"
                        // value=''
                           name="pay_method"
                           type="radio"
                           id="card"
                        // onChange={(e) => this.handleChangeName(e)}
                    />
                    <label htmlFor='card' className="radio__pay-label">
                        Банковской картой курьеру при получении
                    </label>
                </div>
            </div>

        </Fragment>
    )
}