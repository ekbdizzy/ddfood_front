import React, {Component} from "react";
import './product-page.scss';
import imageBlank from '../../assets/img/image_blank.jpg'
import {connect} from "react-redux";

class ProductPage extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    setMeasure = (measure) => {
        switch (measure) {
            case 'гр.':
                return 'Масса: ';
            case 'кг.':
                return 'Масса: ';
            case 'мл':
                return 'Объем: ';
            case 'л':
                return 'Объем: ';
            default:
                return 'Количество: ';
        }
    };

    checkNutritions = (nutrition, output) => {
        return nutrition !== '0.0' ? output : ''
    };


    getItem = (productId, itemsList = []) => {
        return (itemsList.find((item) => item.id === productId))
    };

    render() {
        const {
            product: {
                id, name, slug, article, categories, tradeMark, mass,
                measure, contain, protein, carbs, fat, fibers, price, sale, promo,
                krahmal, kletchatka, isolat, gluten, inulin,
                breadOnes, dryMilk, dukanPhases,
                energyValueCalories, bestBefore, baseImage,
            },
            addToCart,
            removeFromCart,
            itemsList,

        } = this.props;

        const item = this.getItem(id, itemsList);

        // console.log(id);
        console.log('Itemslist', itemsList);
        return (
            <div key={id}
                 className='product'>
                <div className='product__left-side'>
                    <img src={baseImage ? baseImage : imageBlank}
                         className='product__image'
                         alt={name}
                    />
                    <div className='product__price'>{`Цена: ${price} руб.`}</div>


                    {item ? (
                        <div className='added-block'>
                            <button className='added-block__button'
                                    onClick={removeFromCart}>–
                            </button>
                            <p className='added-block__quantity'>
                                {item.quantity}{'\u00A0'}шт.
                            </p>
                            <button className='added-block__button'
                                    onClick={addToCart}>+
                            </button>
                        </div>
                    ) : (
                        <button
                            onClick={addToCart}
                            className='add-to-cart-btn'>
                            Добавить
                        </button>
                    )}

                </div>

                <div className="product__right-side">
                    <div className='product__title'>{name}</div>
                    <div className='product__text'>{`Состав: ${contain}`}</div>
                    <div className='product__text-bold'>В 100 граммах:</div>
                    <div className='product_nutritions'>

                        {this.checkNutritions(protein,
                            <span className='product__tag'>
                                {`Белки:\u00A0${protein}\u00A0гр.`}
                            </span>
                        )}

                        {this.checkNutritions(fat,
                            <span className='product__tag'>
                                {`Жиры:\u00A0${fat}\u00A0гр.`}
                            </span>
                        )}

                        {this.checkNutritions(carbs,
                            <span className='product__tag'>
                                {`Углеводы:\u00A0${carbs}\u00A0гр.`}
                            </span>
                        )}

                        {this.checkNutritions(fibers,
                            <span className='product__tag'>
                                {`Пищевые\u00A0волокна:\u00A0${fibers}\u00A0гр.`}
                            </span>
                        )}

                        {this.checkNutritions(energyValueCalories,
                            <span className='product__tag product__text-bold'>
                                {`${energyValueCalories}\u00A0ккал.`}
                            </span>
                        )}
                    </div>

                    {bestBefore ?
                        <div className='product__text'>{`Срок годности: ${bestBefore}`}</div>
                        : ""}

                    {tradeMark ?
                        <div className='product__text'>{`Торговая марка: ${tradeMark}`}</div>
                        : ""}

                    <div className='product_mass'>
                        {`${this.setMeasure(measure)} ${mass} ${measure}`}
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({cart: {itemsList}}) => {
    return {
        itemsList
    }
};


export default connect(mapStateToProps)(ProductPage);