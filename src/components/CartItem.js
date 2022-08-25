import './Cart.css'
import { ListGroup, Badge } from 'react-bootstrap';

function CartItem({product, removeFromCart}) {
    return <ListGroup.Item key={product.id}>
        {product.brand} {product.model} ${product.price} 
        <Badge bg="danger" className='ml-4 pointer' onClick={() => removeFromCart(product.id)}>Remove</Badge>
    </ListGroup.Item>
}

export default CartItem