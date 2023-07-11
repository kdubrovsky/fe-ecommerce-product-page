import css from './CartWidget.module.scss';

import { ReactComponent as CartIcon } from '../../assets/images/icon-cart.svg'

export default function CartWidget({ cartProducts }) {

    const itemsCount = cartProducts.length;
    const itemsCounter = itemsCount ?
        (<div className={css.cart__counter}>
            {itemsCount}
        </div>)
        : null;

    return (
        <div className={css.cart}>
            <a className={css.cart__link} href="/cart">
                <CartIcon />
                {itemsCounter}
            </a>
        </div >
    )
}