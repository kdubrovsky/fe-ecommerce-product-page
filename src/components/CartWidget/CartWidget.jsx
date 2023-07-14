import css from './CartWidget.module.scss';

import CartPopup from '../CartPopup/CartPopup';
import Icon from '../Icon/Icon';

export default function CartWidget({ cartProducts, productData }) {

    const itemsCount = Object.keys(cartProducts).length;
    const itemsCounter = itemsCount ?
        (<div className={css.cart__counter}>
            {itemsCount}
        </div>)
        : null;

    return (
        <div className={css.cart}>
            <button className={css.cart__button} href="/cart">
                <Icon name="cart" size="24" />
                {itemsCounter}
            </button>
            <CartPopup cartProducts={cartProducts} productData={productData} />
        </div >
    )
}