import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import ApiService from "../../services/api-services";

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


const PromoCodeIsNotActive = ({totalPrice, promoCodeError, requestPromoCode}) => {

    return (
        <Fragment>
            <form className='promo-code'
                  onSubmit={(e) => requestPromoCode(e)}>
                <div className='promo-code__label'>
                    Промокод:
                </div>
                <div>
                    <input
                        className='promo-code__input'
                        name='code'
                        type='text'
                        required='on'
                    />
                </div>
                <span className='promo-code__error'>{promoCodeError}</span>
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

const PromoCodeIsActive = ({totalPrice, removePromoCode, promoCode}) => {


    let totalDiscount = Math.floor(totalPrice * promoCode.discount * 0.01);

    return (
        <Fragment>
            <div className='promo-code__label'>
                Промокод: <span>{promoCode.code} (Cкидка: {promoCode.discount}%)</span>
                <div className='promo-code__remove'
                     onClick={removePromoCode}>
                    Удалить промокод
                </div>
            </div>

            <div className='checkout-price'>
                <div className='checkout-price__without-sale'>
                    Цена без скидки: {totalPrice} руб.
                </div>
                <div className='checkout-price__sale'>
                    Скидка: {totalDiscount} руб.
                </div>
                <div className='checkout-price__total'>
                    К оплате: {totalPrice - totalDiscount} руб.
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