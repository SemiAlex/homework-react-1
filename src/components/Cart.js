import './Cart.css'
import { ListGroup, Button, Badge } from 'react-bootstrap';
import CartItem from './CartItem'
import Total from './Total';
import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Cart({ products, clearCart, removeFromCart, addCount, reduceCount }) {
    const [profile, setProfile] = useContext(ThemeContext)
   
    return <div className='cart-block p-4 bg-white text-center hidden'>
        <h4>Cart</h4>
        <ListGroup>
            {
                products.map(product => <CartItem product={product} removeFromCart={removeFromCart} addCount={addCount} reduceCount={reduceCount} />)
            }
        </ListGroup>
        <Total products={products} />
        <Button variant="success">Purchase</Button>
        <Badge bg="danger" className='pointer' onClick={() => clearCart()}>Clear cart</Badge>
        <p>{profile}</p>
    </div>
}

export default Cart