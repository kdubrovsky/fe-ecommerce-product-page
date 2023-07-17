import { useState } from "react";

import Header from "./components/Header/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import Container from "./components/Container/Container";

import menuData from "./data/menu.json";
import userData from "./data/user.json";
import productsData from "./data/products.json";

const currentProduct = productsData[0];
const galleryData = currentProduct.images;


export default function App() {

    const [cartProducts, setCartProducts] = useState({});
    const [cartPopupVisibility, setCartPopupVisibility] = useState(false);

    const addProductToCart = (productId, value) =>
        setCartProducts(prev => (
            {
                ...prev,
                [productId]: (productId in prev) ? prev[productId] + value : value
            }
        ));

    const removeProductFromCart = (productId) =>
        setCartProducts(prev => {
            const newCart = { ...prev };
            delete newCart[productId];
            return newCart;
        });

    const toggleCartPopup = (e) => {
        e.stopPropagation();
        setCartPopupVisibility(prev => !prev);
    }

    const closeCartPopup = () => {
        setCartPopupVisibility(false);
    }

    const checkOut = () => {
        console.log('CHECKOUT ORDER:');
        console.log('ITEMS:');
        console.log(cartProducts);
        setCartProducts({});
    }

    return (
        <>
            <Header
                menuData={menuData}
                userData={userData}
                cartProducts={cartProducts}
                productsData={productsData}
                cartPopupVisibility={cartPopupVisibility}
                onCartPopupToggle={toggleCartPopup}
                onCartClose={closeCartPopup}
                onRemoveFromCart={removeProductFromCart}
                onCheckout={checkOut}
            />
            <main>
                <Container>
                    <ProductSection>
                        <ProductGallery
                            galleryData={galleryData}
                        />
                        <ProductInformation
                            currentProduct={currentProduct}
                            onAddToCart={addProductToCart}
                        />
                    </ProductSection>
                </Container>
            </main>
        </>
    );
}