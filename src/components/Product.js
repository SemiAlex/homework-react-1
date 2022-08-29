import {Card, Col, Button} from 'react-bootstrap';

function Product({product, addToCart, removeFromCart}) {
    return  <Col xs={12} sm={6} md={4} lg={3}>
                <Card className='mt-3 p-4 fixed-height'>
                    <Card.Img variant="top" src={product.imgSrc} />
                    <Card.Body>
                        <Card.Title>{product.brand}</Card.Title>
                        <Card.Text>{product.model}</Card.Text>
                        <Card.Text>${product.price}</Card.Text>
                        {product.inCart ? 
                        <Button variant="danger" onClick={() => removeFromCart(product.id)}>Remove from cart</Button> : 
                        <Button variant="success" onClick={() => addToCart(product.id)}>Add to cart</Button>}
                    </Card.Body>
                </Card>
            </Col>
}

export default Product