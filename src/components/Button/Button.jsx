import Icon from '../Icon/Icon'

import css from './Button.module.scss'

export default function Button({ id, iconName, iconSize, children, onClickHandler }) {
    return (
        <button id={id} className={css.button} onClick={onClickHandler}>
            {iconName && <Icon name={iconName} size={iconSize} />}
            {children}
        </button>
    )
}