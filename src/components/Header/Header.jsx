import Logotype from "../Logotype/Logotype";
import Menu from "../Menu/Menu";
import BurgerMenuButton from "../BurgerMenuButton/BurgerMenuButton";
import CartWidget from "../CartWidget/CartWidget";
import UserAccountWidget from "../UserAccountWidget/UserAccountWidget";

import Container from "../Container/Container";


import css from './Header.module.scss';

export default function Header(
    {
        menuData,
        userData,
        cartProducts,
        productsData,
        cartPopupVisibility,
        onCartPopupToggle,
        onCartClose,
        onRemoveFromCart,
        onCheckout
    }
) {
    return (
        <header className={css.header}>
            <Container>
                <div className={css.wrapper}>
                    <nav className={css.navigation}>
                        <BurgerMenuButton isOpened={false} />
                        <Logotype />
                        <Menu menuData={menuData} />
                    </nav>
                    <div className={css.widgets}>
                        <CartWidget
                            cartProducts={cartProducts}
                            productsData={productsData}
                            cartPopupVisibility={cartPopupVisibility}
                            onCartPopupToggle={onCartPopupToggle}
                            onCartClose={onCartClose}
                            onRemoveFromCart={onRemoveFromCart}
                            onCheckout={onCheckout}
                        />
                        <UserAccountWidget
                            userData={userData}
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
}