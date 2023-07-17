import css from './CartWidget.module.scss';

import CartPopup from '../CartPopup/CartPopup';
import Icon from '../Icon/Icon';

export default function CartWidget(
    {
        cartProducts,
        productsData,
        cartPopupVisibility,
        onCartPopupToggle,
        onCartClose,
        onRemoveFromCart,
        onCheckout
    }
) {
    const itemsCount = Object.keys(cartProducts).length;
    const itemsCounter = itemsCount > 0 &&
        <div className={css.cart__counter}>
            {itemsCount}
        </div>

    return (
        <div className={css.cart}>
            <button className={css.cart__button} href="/cart" onClick={onCartPopupToggle}>
                <Icon name="cart" size="24" />
                {itemsCounter}
            </button>
            <CartPopup
                cartProducts={cartProducts}
                productsData={productsData}
                opened={cartPopupVisibility}
                onCartClose={onCartClose}
                onRemoveFromCart={onRemoveFromCart}
                onCheckout={onCheckout}
            />
        </div >
    )
}