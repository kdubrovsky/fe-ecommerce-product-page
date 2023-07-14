import Logotype from "../Logotype/Logotype";
import Menu from "../Menu/Menu";
import CartWidget from "../CartWidget/CartWidget";
import UserAccountWidget from "../UserAccountWidget/UserAccountWidget";

import Container from "../Container/Container";


import css from './Header.module.scss';

export default function Header({ menuData, userData, cartProducts, productData }) {
    return (
        <header>
            <Container>
                <div className={css.wrapper}>
                    <nav className={css.navigation}>
                        <Logotype />
                        <Menu menuData={menuData} />
                    </nav>
                    <div className={css.widgets}>
                        <CartWidget cartProducts={cartProducts} productData={productData} />
                        <UserAccountWidget userData={userData} />
                    </div>
                </div>
            </Container>
        </header>
    );
}