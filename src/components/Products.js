import { useState, useEffect } from "react";
import {Card, Row, Col} from 'react-bootstrap';

function Products() {
        const [products, setProducts] = useState([]);

        useEffect(() => {
                setProducts([
                        {brand: 'Nike', model: `Women's Air Max Bella 5 Training Shoe`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/55/07/2/55072_pair_medium.jpg', price: '$89.99',},
                        {brand: 'Nike', model: `Women's Air Max Excee Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/96/85/8/96858_pair_medium.jpg', price: '$89.99',},
                        {brand: 'Nike', model: `Women's Air Max Excee Sneaker 2`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/73/44/5/73445_pair_medium.jpg', price: '$79.99',},
                        {brand: 'Nike', model: `Women's Air Max Excee Sneaker 3`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/73/42/8/73428_pair_medium.jpg', price: '$84.99',},
                        {brand: 'Converse', model: `Women's Chuck Taylor All Star Hi Lift Platform Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/53/18/9/53189_pair_medium.jpg', price: '$74.99',},
                        {brand: 'Vans', model: `Women's Asher Slip On Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/94/60/3/94603_pair_medium.jpg', price: '$64.99',},
                        {brand: 'Adidas', model: `Women's Racer TR21 Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/71/23/7/71237_pair_medium.jpg', price: '$74.99',},
                        {brand: 'HEYDUDE', model: `Women's Wendy Casual Slip On`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/36/55/4/36554_pair_medium.jpg', price: '$59.99',},
                        {brand: 'Birkenstock', model: `Women's Arizona Footbed Sandal`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/51/64/0/51640_pair_medium.jpg', price: '$109.99',},
                        {brand: 'Vans', model: `Ward Pride Low Top Sneaker`, imgSrc: 'https://www.famousfootwear.com/blob/product-images/20000/58/10/3/58103_pair_medium.jpg', price: '$59.99',}
                        ])
        }, [])
        
        return (
                <div>
                        <h3 className="text-center">Sneakers</h3>
                        <Row>
                        {products.map(product =>
                                <Col xs={12} sm={6} md={4} lg={3}>
                                <Card className='p-4 fixed-height'>
                                <Card.Img variant="top" src= {product.imgSrc} />
                                <Card.Body>
                                <Card.Title>{product.brand}</Card.Title>
                                <Card.Text>{product.model}</Card.Text>
                                <Card.Text>{product.price}</Card.Text>
                                </Card.Body>
                                </Card>
                                </Col>
                        )}
                        </Row>
                </div>
        )
}

export default Products;
