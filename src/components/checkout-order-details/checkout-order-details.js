import React, {Component} from "react";
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

                <form className=''
                      onSubmit={(e) => console.log(e.target)}>

                    <div className="checkout__form-field">
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

                    <div className="">
                        <label>Ваш телефон:</label>
                        <input className="input"
                            // value=''
                               name="phone"
                               type="text"
                               id="phone"
                               autoComplete="off"
                               onChange={(e) => this.handleChangeName(e)}
                        />
                    </div>

                    <div className="">
                        <label>Ваш телефон:</label>
                        <input className="input"
                            // value=''
                               name="phone"
                               type="text"
                               id="phone"
                               autoComplete="off"
                               onChange={(e) => this.handleChangeName(e)}
                        />
                    </div>


                </form>


            </div>

        )
    }
}
