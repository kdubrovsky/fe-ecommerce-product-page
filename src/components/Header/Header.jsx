import Logotype from "../Logotype/Logotype";
import Menu from "../Menu/Menu";
import CartWidget from "../CartWidget/CartWidget";
import UserAccountWidget from "../UserAccountWidget/UserAccountWidget";

export default function Header() {
    return (
        <header>
            <h2>Header</h2>
            <Logotype />
            <Menu />
            <CartWidget />
            <UserAccountWidget />
        </header>
    );
}