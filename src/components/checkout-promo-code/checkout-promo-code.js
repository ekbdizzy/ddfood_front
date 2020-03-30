import React, {Component} from "react";
import './checkout-promo-code.scss';

class CheckoutPromoCode extends Component {
    render() {
        const {cart: {totalPrice}} = this.props;
        return (
            <section className='checkout-promo-code'>

                <form className='promo-code'>
                    <div className='promo-code__label'>
                        Промокод: <span>misha10 (Cкидка: 10%)</span>
                    </div>
                    <div className='promo-code__remove'
                         onClick={() => console.log('Remove promo code')}
                    >
                        Удалить промокод
                    </div>
                    <div>
                        <input
                            className='promo-code__input'
                            type='text'/>
                    </div>
                    <button type='submit'>Применить</button>
                </form>

                <div className='checkout-price'>
                    <div className='checkout-price__without-sale'>
                        Цена без скидки: 2200 руб.
                    </div>
                    <div className='checkout-price__sale'>
                        Скидка: 200 руб.
                    </div>
                    <div className='checkout-price__total'>
                        К оплате: {totalPrice} руб.
                    </div>
                </div>
            </section>
        )
    }
}

export default CheckoutPromoCode;