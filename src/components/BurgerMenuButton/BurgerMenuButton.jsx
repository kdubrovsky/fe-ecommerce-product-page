import Icon from '../Icon/Icon'

import css from './BurgerMenuButton.module.scss'

export default function BurgerMenuButton({ isOpened }) {

    const iconName = isOpened ? "close" : "burger"

    return (
        <button className={css.burgerMenu}>
            <Icon name={iconName} size={32} />
        </button>
    )
}