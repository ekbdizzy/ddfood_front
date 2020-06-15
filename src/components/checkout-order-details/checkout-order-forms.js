import React, {Fragment} from "react";

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
                   required

            />
        </div>

        <div className="checkout-form__field grid-2">
            <label>Ваш телефон:</label>
            <input className="input"
                   value={phone}
                   name="phone"
                   type="tel"
                   id="phone"
                   autoComplete="off"
                   onChange={(e) => handleChangePhone(e)}
                   required
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
                   required
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
                    // TODO https://dadata.ru/api/suggest/address/
                       name="address"
                       type="text"
                       id="address"
                       required
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Подъезд:</label>
                <input className="input"
                       name="entrance"
                       type="tel"
                       id="full_name"
                       autoComplete="off"
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Этаж:</label>
                <input className="input"
                       name="floor"
                       type="tel"
                       id="full_name"
                       autoComplete="off"
                />
            </div>

            <div className="checkout-form__field grid-1">
                <label>Офис/Кв.:</label>
                <input className="input"
                       name="apartment"
                       type="tel"
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



export {UserDataForm, SelfDelivery, Delivery};