import css from "./MobileMenu.module.scss";

export default function MobileMenu({ menuData, menuVisibility }) {

    const menuItems = menuData.map(item => {
        return (
            <li key={item.id}>
                <a href={item.url} className={css.menuLink}>{item.title}</a>
            </li>
        )
    })

    if (menuVisibility) return (
        <>
            <div className={css.voile}>
            </div>
            <ul className={css.menu}>
                {menuItems}
            </ul>
        </>
    )
}