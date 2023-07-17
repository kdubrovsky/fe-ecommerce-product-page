import Icon from '../Icon/Icon';
import css from './CartProductItem.module.scss';

export default function CartProductItem({ product, quantity, onRemoveFromCart }) {

    const { id, title, price, discount } = product;
    const thumb = product.images[0].thumb;

    const totalSum = Math.round(price * discount * quantity / 100).toFixed(2);
    const newPriceAndQuantity = Math.round(price * discount / 100).toFixed(2) + ' × ' + quantity;

    const removeItemFromCart = () => {
        onRemoveFromCart(id);
    }


    return (
        <li className={css.product}>
            <img src={thumb} alt={title} className={css.thumb} />
            <div className={css.info}>
                <p className={css.title}>{title}</p>
                <div className={css.prices}>
                    <p className={css.price}>${newPriceAndQuantity}</p>
                    <p className={css.total}>${totalSum}</p>
                </div>
            </div>
            <button className={css.delete} onClick={removeItemFromCart}><Icon name="trash" size="16" /></button>
        </li>
    )
}


