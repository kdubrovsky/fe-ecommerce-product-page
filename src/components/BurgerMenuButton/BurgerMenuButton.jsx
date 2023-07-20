
import Icon from '../Icon/Icon'

import css from './BurgerMenuButton.module.scss'

export default function BurgerMenuButton({ menuVisibility, toggleMenu }) {

    const iconName = menuVisibility ? "close" : "burger"

    return (
        <button className={css.burgerMenu} onClick={toggleMenu}>
            <Icon name={iconName} size={32} />
        </button>
    )
}