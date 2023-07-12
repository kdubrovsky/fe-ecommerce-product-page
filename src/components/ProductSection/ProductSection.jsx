import css from './ProductSection.module.scss';

export default function ProductSection(
    { children }
) {
    return (
        <section className={css.product}>
            {children}
        </section>
    )
}