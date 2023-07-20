import Icon from '../Icon/Icon'

import css from './QuantitySelect.module.scss'

export default function QuantitySelect({ value, onDecrementValue, onIncrementValue, onChangeValue }) {
    return (
        <div className={css.quantitySelect}>
            <button className={css.changeQuantityButton} onClick={onDecrementValue}>
                <Icon name="minus" size="24" />
            </button>
            <input
                type="text"
                name="quantity"
                inputMode="numeric"
                id="quantity"
                value={value}
                className={css.quantityInput}
                onChange={onChangeValue} />
            <button className={css.changeQuantityButton} onClick={onIncrementValue}>
                <Icon name="plus" size="24" />
            </button>
        </div>
    )
}