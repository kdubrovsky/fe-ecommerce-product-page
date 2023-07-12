import { useState } from "react";

import Header from "./components/Header/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import Container from "./components/Container/Container";

import menuData from "./data/menu.json";
import userData from "./data/user.json";


export default function App() {

    const [cartProducts, setCartProducts] = useState([]);

    return (
        <>
            <Header
                menuData={menuData}
                userData={userData}
                cartProducts={cartProducts}
            />
            <main>
                <Container>
                    <ProductSection>
                        <ProductGallery />
                        <ProductInformation />
                    </ProductSection>
                </Container>
            </main>
        </>
    );
}