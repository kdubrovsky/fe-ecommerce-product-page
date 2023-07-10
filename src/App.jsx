import Header from "./components/Header/Header";
import ProductGallery from "./components/ProductGallery/ProductGallery";
import ProductInformation from "./components/ProductInformation/ProductInformation";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <h2>Product</h2>
                <ProductGallery />
                <ProductInformation />
            </main>
        </>
    );
}