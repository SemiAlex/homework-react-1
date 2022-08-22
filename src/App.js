import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import products from './components/Products';
import {Card, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <>
    <div className='text-center'>
      <h3>Sneakers</h3>
    </div>
    <div className='container bg-light mx-auto m-3 p-3 rounded'>
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
    </>
  );
}

export default App;
