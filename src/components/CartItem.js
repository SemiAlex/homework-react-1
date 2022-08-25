import './Cart.css'
import { ListGroup, Badge } from 'react-bootstrap';

function CartItem({product, addCount, removeCount}) {
    return <ListGroup.Item key={product.id}>
        {product.brand} {product.model} ${product.price} 
        <Badge bg="success" className='pointer' onClick={() => addCount(product.id)}>+</Badge>
        <Badge bg="secondary" className='pointer' onClick={() => removeCount(product.id)}>{product.count}</Badge>
        <Badge bg="danger" className='pointer' onClick={() => removeCount(product.id)}>-</Badge>
    </ListGroup.Item>
}

export default CartItem