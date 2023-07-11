import { useState } from "react";

import Header from "./components/Header/Header";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import Container from "./components/Container/Container";

import menuData from "./data/menu.json";
import userData from "./data/user.json";


export default function App() {

    const [cartProducts, setCartProducts] = useState([]);

    function addProduct() {
        setCartProducts(prev => [...prev, {}]);
    }

    function removeProduct() {
        setCartProducts(prev => prev.slice(0, -1));
    }

    return (
        <>
            <Header
                menuData={menuData}
                userData={userData}
                cartProducts={cartProducts}
            />
            <main>
                <Container>
                    <h2>Product</h2>
                    <ProductGallery />
                    <ProductInformation />
                    <br />
                    <h4>Test Product Counter</h4>
                    <button onClick={addProduct}>+</button>
                    <button onClick={removeProduct}>-</button>
                </Container>
            </main>
        </>
    );
}