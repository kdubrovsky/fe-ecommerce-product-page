import { useState } from 'react';
import Button from '../Button/Button';
import QuantitySelect from '../QuantitySelect/QuantitySelect';

import css from './ProductInformation.module.scss';

export default function ProductInformation({ currentProduct, onAddToCart }) {

    const {
        id,
        brand,
        title,
        description,
        price,
        discount,
        maxQuantity
    } = currentProduct;

    const newPrice = Math.round(price * discount / 100).toFixed(2);
    const oldPrice = price.toFixed(2);

    const [value, setValue] = useState(1);


    // ------ handlers

    const decrementValue = () => {
        if (value > 1) setValue(prev => prev - 1);
    }

    const incrementValue = () => {
        if (value < maxQuantity) setValue(prev => prev + 1);
    }

    const changeValue = (e) => {
        const enteredValue = e.target.value;

        if (isFinite(enteredValue)) {
            if (+enteredValue > maxQuantity) {
                setValue(maxQuantity);
            } else if (+enteredValue < 1) {
                setValue(1);
            } else {
                setValue(+enteredValue);
            }
        }
    }

    const onAddToCartExtended = () => {
        onAddToCart(id, value);
        setValue(1);
    }


    return (
        <div>
            <h2 className={css.brand}>{brand}</h2>
            <h1 className={css.title}>{title}</h1>
            <p className={css.description}>{description}</p>

            <div className={css.prices}>
                <div className={css.actual}>
                    <p className={css.newPrice}>${newPrice}</p>
                    <p className={css.discount}>{discount}%</p>
                </div>
                <p className={css.oldPrice}>${oldPrice}</p>
            </div>
            <div className={css.controls}>
                <QuantitySelect
                    value={value}
                    maxValue={maxQuantity}
                    onDecrementValue={decrementValue}
                    onIncrementValue={incrementValue}
                    onChangeValue={changeValue}
                />
                <Button
                    iconName="cart"
                    iconSize="24"
                    onClickHandler={onAddToCartExtended}>
                    Add to cart
                </Button>
            </div>
        </div>
    );
}



