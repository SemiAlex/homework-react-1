import './Cart.css'
import { ListGroup, Button, Badge } from 'react-bootstrap';
import CartItem from './CartItem'
import Total from './Total';

function Cart({products, clearCart, removeFromCart, addCount, reduceCount}) {
    return <div className='cart-block p-4 bg-white text-center hidden'>
        <h4>Cart</h4>
        <ListGroup>
        {
        products.map(product => <CartItem product={product} removeFromCart={removeFromCart} addCount={addCount} reduceCount={reduceCount}/>)
        }
        </ListGroup>
        <p className='mt-3'>Total: $<Total products={products}/></p>
        <Badge bg="danger" className='pointer' onClick={() => clearCart()}>Clear cart</Badge>
    </div>
}

export default Cart