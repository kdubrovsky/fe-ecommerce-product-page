import Icon from '../Icon/Icon'

import css from './AddToCartButton.module.scss'

export default function AddToCartButton({ onClickHandler }) {
    return (
        <button className={css.button} onClick={onClickHandler}>
            <Icon name="cart" size="20" />
            Add to cart
        </button>
    )
}