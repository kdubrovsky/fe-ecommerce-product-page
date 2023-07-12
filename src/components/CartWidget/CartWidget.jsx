import css from './CartWidget.module.scss';

import Icon from '../Icon/Icon';

export default function CartWidget({ cartProducts }) {

    const itemsCount = Object.keys(cartProducts).length;
    const itemsCounter = itemsCount ?
        (<div className={css.cart__counter}>
            {itemsCount}
        </div>)
        : null;

    return (
        <div className={css.cart}>
            <a className={css.cart__link} href="/cart">
                <Icon name="cart" size="24" />
                {itemsCounter}
            </a>
        </div >
    )
}