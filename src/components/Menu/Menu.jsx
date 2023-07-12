import css from "./Menu.module.scss";

export default function Menu({ menuData }) {

    const menuItems = menuData.map(item => {
        return (
            <li key={item.id}>
                <a href={item.url}>{item.title}</a>
            </li>
        )
    })

    return (
        <ul className={css.menu}>
            {menuItems}
        </ul>
    )
}