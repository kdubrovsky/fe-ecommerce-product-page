import css from './UserAccountWidget.module.scss';

export default function UserAccountWidget({ userData }) {
    return (
        <div className={css.account}>
            <a href="#" className={css.account__link}>
                <img
                    className={css.account__image}
                    src={userData.photoSource}
                    alt={userData.name}
                    title={userData.name}
                />
            </a>
        </div>
    )
}