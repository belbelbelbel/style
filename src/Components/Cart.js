import React, { useState, useEffect, useContext } from 'react';
import { SingleProduct } from './SingleProduct';
import { Cartpage } from '../Content';

export const Cart = ({}) => {
  const [total, settotal] = useState(0);
  const {cart} = useContext(Cartpage)
  useEffect(() => {
    handleprice();
  }, [cart]);

  function handleprice() {
    let sum = 0;
    cart.map((item) => {
      sum += parseInt(item.prices);
    });
    settotal(sum);
  }

  return (
    <div>

      <div className="productContainer">
        {cart.map((item) => (
          <SingleProduct item={item} key={item.name}/>
        ))}
      </div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs: {total.toFixed(2)}</span>
    </div>
  );
};
