import { useRef } from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';
import CartProductItem from '../CartProductItem/CartProductItem';

import css from './CartPopup.module.scss';

export default function CartPopup({ cartProducts, productsData, opened, onCartClose, onRemoveFromCart }) {

    const popupRef = useRef(null);
    useOutsideClick(popupRef, onCartClose, opened)

    if (!opened) return null;

    let cartContent =
        <p className={css.emptyCartMessage}>
            Your cart is empty.
        </p>;

    const itemsCount = Object.keys(cartProducts).length;

    if (itemsCount > 0) {
        const productItems =
            Object.entries(cartProducts)
                .map(([id, quantity]) =>
                    <CartProductItem
                        key={id}
                        product={productsData.find(item => item.id === +id)}
                        quantity={quantity}
                        onRemoveFromCart={onRemoveFromCart}
                    />
                )

        cartContent = (
            <ul className={css.productList}>
                {productItems}
            </ul>
        );
    }

    return (
        <div className={css.popup} ref={popupRef}>
            <p className={css.title}>Cart</p>
            <div className={css.content}>
                {cartContent}
            </div>
        </div>
    )
}