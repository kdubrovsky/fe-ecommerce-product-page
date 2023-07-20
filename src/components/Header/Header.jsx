import { useState } from 'react'

import Logotype from "../Logotype/Logotype";
import Menu from "../Menu/Menu";
import MobileMenu from '../MobileMenu/MobileMenu';
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

    const [menuVisibility, setMenuVisibility] = useState(false);
    const toggleMenu = () => setMenuVisibility(prev => !prev);

    return (
        <header className={css.header}>
            <Container>
                <div className={css.wrapper}>
                    <nav className={css.navigation}>
                        <BurgerMenuButton menuVisibility={menuVisibility} toggleMenu={toggleMenu} />
                        <Logotype />
                        <Menu menuData={menuData} />
                        <MobileMenu menuData={menuData} menuVisibility={menuVisibility} />
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