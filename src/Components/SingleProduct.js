import React, { useContext } from 'react';
import { Cartpage } from '../Content';

export const SingleProduct = ({ item }) => {
    const {cart,setcart} = useContext(Cartpage)
    return (
        <div className="products">
            <img src={item.image} alt={item.name} />
            <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{item.name}</span>
                <span style={{ fontWeight: 700 }}>{item.product}</span>
                <span style={{ fontWeight: 700 }}>₹ {item.prices}</span>
            </div>
            {cart.includes(item) ? (
                <button className="add" onClick={() => setcart([...cart, item])}>
                Add to Cart
                </button>
            ) : (
                <button className='remove' onClick={() => setcart(cart.filter((carts) => carts.id !== item.id))}>
                Remove from cart
            </button>
            )}
        </div>
    );
};
