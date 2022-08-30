import './Cart.css'
import { ListGroup, Button, Badge } from 'react-bootstrap';
import CartItem from './CartItem'
import Total from './Total';
import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

function Cart({ products, clearCart, removeFromCart, addCount, reduceCount }) {
    const { profile } = useContext(ThemeContext);
    const { setAlertText } = useContext(ThemeContext);
    const [confirmation, setConfirmation] = useState(false);
    
    function confirm() {
        setAlertText('Purchase confirmed');
        setConfirmation(true);
        setTimeout(() => { setConfirmation(false) }, 3000)
    }

    return <div className='cart-block p-4 bg-white text-center hidden'>
        <h4>Cart</h4>
        <ListGroup>
            {
                products.map(product => <CartItem product={product} removeFromCart={removeFromCart} addCount={addCount} reduceCount={reduceCount} />)
            }
        </ListGroup>
        <Total products={products} />
        <Button variant="success" onClick={() => confirm()}>Purchase</Button>
        <Badge bg="danger" className='pointer' onClick={() => clearCart()}>Clear cart</Badge>
        <p className={confirmation === true ? 'd-block' : 'd-none'}>Confirmation sent to {profile.email}</p>
    </div>
}

export default Cart