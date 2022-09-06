import './Cart.css'
import { ListGroup, Badge } from 'react-bootstrap';

function CartItem({product, addCount, reduceCount, removeFromCart}) {
    return <ListGroup.Item key={product.id}>
        {product.brand} {product.model} (${(product.price*product.count).toFixed(2)})
        <Badge bg="success" className='pointer' onClick={() => addCount(product.id)}>+</Badge>
        <Badge bg="secondary" className='pointer'>{product.count}</Badge>
        <Badge bg="danger" className='pointer' onClick={() => reduceCount(product.id)}>-</Badge>
        <Badge bg="danger" className='pointer left-margin' onClick={() => removeFromCart(product.id)}>remove</Badge>
    </ListGroup.Item>
}

export default CartItem