import { useState } from "react";

import Header from "./components/Header/Header";
import ProductSection from "./components/ProductSection/ProductSection";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import Container from "./components/Container/Container";

import menuData from "./data/menu.json";
import userData from "./data/user.json";
import productData from "./data/product.json";

const galleryData = productData.images;


export default function App() {

    const [cartProducts, setCartProducts] = useState({});

    const addProductToCart = (productId, value) =>
        setCartProducts(prev => (
            {
                ...prev,
                [productId]: (productId in prev) ? prev[productId] + value : value
            }
        ));

    console.log('Cart items:', cartProducts);

    return (
        <>
            <Header
                menuData={menuData}
                userData={userData}
                cartProducts={cartProducts}
                productData={productData}
            />
            <main>
                <Container>
                    <ProductSection>
                        <ProductGallery
                            galleryData={galleryData}
                        />
                        <ProductInformation
                            productData={productData}
                            onAddToCart={addProductToCart}
                        />
                    </ProductSection>
                </Container>
            </main>
        </>
    );
}