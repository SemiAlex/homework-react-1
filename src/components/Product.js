import {Card, Col} from 'react-bootstrap';

function Product({product}) {
    return  <Col xs={12} sm={6} md={4} lg={3}>
                <Card className='p-4 fixed-height'>
                    <Card.Img variant="top" src={product.imgSrc} />
                    <Card.Body>
                        <Card.Title>{product.brand}</Card.Title>
                        <Card.Text>{product.model}</Card.Text>
                        <Card.Text>{product.price}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
}

export default Product