import Icon from '../Icon/Icon'

import css from './Button.module.scss'

export default function AddToCartButton({ iconName, iconSize, children, onClickHandler }) {
    return (
        <button className={css.button} onClick={onClickHandler}>
            {iconName && <Icon name={iconName} size={iconSize} />}
            {children}
        </button>
    )
}