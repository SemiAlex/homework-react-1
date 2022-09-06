import { useState, useEffect, useContext } from "react";
import {Row} from 'react-bootstrap';
import Product from "./Product";
import Cart from "./Cart";
import ThemeContext from "../context/ThemeContext";

function Products() {
        const [products, setProducts] = useState([]);
        const { setAlertText } = useContext(ThemeContext);

        useEffect(() => {
                setProducts([
                        {id: 0, count: 1, inCart: false, brand: 'Nike', model: `Women's Air Max Bella 5 Training Shoe`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/55/07/2/55072_pair_medium.jpg', price: 89.99,},
                        {id: 1, count: 1, inCart: false, brand: 'Nike', model: `Women's Air Max Excee Sneaker`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/96/85/8/96858_pair_medium.jpg', price: 89.99,},
                        {id: 2, count: 1, inCart: false, brand: 'Nike', model: `Women's Air Max Excee Sneaker 2`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/73/44/5/73445_pair_medium.jpg', price: 79.99,},
                        {id: 3, count: 1, inCart: false, brand: 'Nike', model: `Women's Air Max Excee Sneaker 3`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/73/42/8/73428_pair_medium.jpg', price: 84.99,},
                        {id: 4, count: 1, inCart: false, brand: 'Circus NY', model: `Women's Everly Lug Bottom Moc Loafer`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/36/04/0/36040_pair_medium.jpg', price: 74.99,},
                        {id: 5, count: 1, inCart: false, brand: 'Vans', model: `Women's Asher Slip On Sneaker`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/94/60/3/94603_pair_medium.jpg', price: 64.99,},
                        {id: 6, count: 1, inCart: false, brand: 'Adidas', model: `Women's Racer TR21 Sneaker`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/71/23/7/71237_pair_medium.jpg', price: 74.99,},
                        {id: 7, count: 1, inCart: false, brand: 'HEYDUDE', model: `Women's Wendy Casual Slip On`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/36/55/4/36554_pair_medium.jpg', price: 59.99,},
                        {id: 8, count: 1, inCart: false, brand: 'Birkenstock', model: `Women's Arizona Footbed Sandal`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/51/64/0/51640_pair_medium.jpg', price: 109.99,},
                        {id: 9, count: 1, inCart: false, brand: 'Vans', model: `Ward Pride Low Top Sneaker`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/58/10/3/58103_pair_medium.jpg', price: 59.99,},
                        {id: 10, count: 1, inCart: false, brand: 'Birkenstock', model: `Women's Arizona Chunky Footbed Sandal by Papillio`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/50/95/9/50959_pair_medium.jpg', price: 59.99,},
                        {id: 11, count: 1, inCart: false, brand: 'Franco Sarto', model: `Women's Balin Platform Loafer`, 
                        imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/09/84/2/09842_pair_medium.jpg', price: 109.99,}
                        ])
        }, [])

        const addToCart = id => {
                setProducts(products.map(product => ({ ...product, inCart: product.id === id ? true : product.inCart })));
                const productName = products.filter(product => product.id === id).map(el => `${el.brand} ${el.model}`);
                setAlertText(`${productName} added to cart`);
        }

        const removeFromCart = id => {
                setProducts(products.map(product => ({ ...product, inCart: product.id === id ? false : product.inCart, count: product.id === id ? 1 : product.count })))
                const productName = products.filter(product => product.id === id).map(el => `${el.brand} ${el.model}`);
                setAlertText(`${productName} removed from to cart`);
        }

        const clearCart = () => {
                setProducts(products.map(product => ({ ...product, inCart: false, count: 1 })))
                setAlertText('Cart cleared');
        }

        const addCount = id => {
                setProducts(products.map(product => ({ ...product, count: product.id === id ? product.count+1 : product.count})))
                const productName = products.filter(product => product.id === id).map(el => `${el.brand} ${el.model}`);
                setAlertText(`${productName} added to cart`);
        }

        const reduceCount = id => {
                setProducts(products.map(product => ({ ...product, count: product.id === id ? (product.count === 1 ? product.count : product.count-1) : product.count, inCart: product.id === id ? (product.count === 1 ? false : product.inCart) : product.inCart})))
                const productName = products.filter(product => product.id === id).map(el => `${el.brand} ${el.model}`);
                setAlertText(`${productName} removed from cart`);
        }

        return (
                <div>
                        {
                        products.filter(product => product.inCart).length ? 
                        <Cart products={products.filter(product => product.inCart)} 
                        clearCart={clearCart} 
                        removeFromCart={removeFromCart}
                        addCount={addCount}
                        reduceCount={reduceCount}/> : ''
                        }
                        <Row>
                             { products.map(product => <Product
                             key={product.id}
                             product={product}
                             addToCart={addToCart}
                             removeFromCart={removeFromCart}
                             />) }
                        </Row>
                </div>
        )
}

export default Products;
