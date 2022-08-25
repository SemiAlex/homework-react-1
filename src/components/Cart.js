import './Cart.css'
import { ListGroup, Button, Badge } from 'react-bootstrap';
import CartItem from './CartItem'

function Cart({products, clearCart, removeFromCart}) {
    return <div className='cart-block p-4 bg-white text-center hidden'>
        <h4>Cart</h4>
        <ListGroup>
        {
        products.map(product => <CartItem product={product} removeFromCart={removeFromCart}/>)
        }
        </ListGroup>
        <p className='mt-3'>Total: ${products.reduce((acc, product) => acc + product.price, 0).toFixed(2)}</p>
        <Badge bg="danger" className='pointer' onClick={() => clearCart()}>Clear cart</Badge>
    </div>
}

export default Cart