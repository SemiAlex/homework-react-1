import {Card, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({product, addToCart, removeFromCart}) {
    return  <Col xs={12} sm={6} md={4} lg={3}>
                <Card className='mt-3 p-4 fixed-height text-black'>
                    <Card.Img variant="top" src={product.imgSrc} />
                    <Card.Body>
                        <Card.Subtitle><Link to={`/products/${product.id}`}>{product.brand}{product.model}</Link></Card.Subtitle>
                        <Card.Text>${product.price}</Card.Text>
                        {product.inCart ? 
                        <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from cart</Button> : 
                        <Button variant="success" onClick={() => addToCart(product.id)}>Add to cart</Button>}
                    </Card.Body>
                </Card>
            </Col>
}

export default Product