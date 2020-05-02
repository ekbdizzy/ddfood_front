import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const PromoCodeNotAllow = ({totalPrice}) => {
    return (
        <Fragment>
            <div className='product__text'>
                <Link to={'/auth/'}>Зарегистрируйтесь или войдите в аккаунт, </Link>
                чтобы ввести промокод или оплатить заказ баллами
            </div>

            <div className='checkout-price checkout-price__total'>
                К оплате: {totalPrice} руб.
            </div>
        </Fragment>
    )
};


const PromoCodeIsNotActive = ({totalPrice}) => {
    return (
        <Fragment>
            <form className='promo-code'>
                <div className='promo-code__label'>
                    Промокод:
                </div>
                <div>
                    <input
                        className='promo-code__input'
                        type='text'/>
                </div>
                <button type='submit'
                        className="promo-code__submit">
                    Применить
                </button>
            </form>

            <div className='checkout-price'>
                <div className='checkout-price__total'>
                    К оплате: {totalPrice} руб.
                </div>
            </div>

        </Fragment>
    )
};

const PromoCodeIsActive = ({totalPrice}) => {
    return (
        <Fragment>
            <div className='promo-code__label'>
                Промокод: <span>misha10 (Cкидка: 10%)</span>
                <div className='promo-code__remove'
                     onClick={() => console.log('Remove promo code')}
                >
                    Удалить промокод
                </div>
            </div>


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
        </Fragment>
    )
};

export {
    PromoCodeNotAllow,
    PromoCodeIsNotActive,
    PromoCodeIsActive
}