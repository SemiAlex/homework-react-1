import { useState, useEffect } from "react";
import {Row} from 'react-bootstrap';
import Product from "./Product";

function Products() {
        const [products, setProducts] = useState([]);

        useEffect(() => {
                setProducts([
                        {id: 0, inCart: false, brand: 'Nike', model: `Women's Air Max Bella 5 Training Shoe`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/55/07/2/55072_pair_medium.jpg', price: '$89.99',},
                        {id: 1, inCart: false, brand: 'Nike', model: `Women's Air Max Excee Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/96/85/8/96858_pair_medium.jpg', price: '$89.99',},
                        {id: 2, inCart: false, brand: 'Nike', model: `Women's Air Max Excee Sneaker 2`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/73/44/5/73445_pair_medium.jpg', price: '$79.99',},
                        {id: 3, inCart: false, brand: 'Nike', model: `Women's Air Max Excee Sneaker 3`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/73/42/8/73428_pair_medium.jpg', price: '$84.99',},
                        {id: 4, inCart: false, brand: 'Converse', model: `Women's Chuck Taylor All Star Hi Lift Platform Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/53/18/9/53189_pair_medium.jpg', price: '$74.99',},
                        {id: 5, inCart: false, brand: 'Vans', model: `Women's Asher Slip On Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/94/60/3/94603_pair_medium.jpg', price: '$64.99',},
                        {id: 6, inCart: false, brand: 'Adidas', model: `Women's Racer TR21 Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/71/23/7/71237_pair_medium.jpg', price: '$74.99',},
                        {id: 7, inCart: false, brand: 'HEYDUDE', model: `Women's Wendy Casual Slip On`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/36/55/4/36554_pair_medium.jpg', price: '$59.99',},
                        {id: 8, inCart: false, brand: 'Birkenstock', model: `Women's Arizona Footbed Sandal`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/51/64/0/51640_pair_medium.jpg', price: '$109.99',},
                        {id: 9, inCart: false, brand: 'Vans', model: `Ward Pride Low Top Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/58/10/3/58103_pair_medium.jpg', price: '$59.99',}
                        ])
        }, [])
        
        return (
                <div>
                        <h3 className="text-center">Sneakers</h3>
                        <Row>
                        { products.map(product => <Product key={product.id} product={product}/>) }
                        </Row>
                </div>
        )
}

export default Products;
