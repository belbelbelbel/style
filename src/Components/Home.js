import React, { useContext, useState } from 'react'
import { faker } from '@faker-js/faker';
import "../Components/Style.css"
import { SingleProduct } from './SingleProduct';

export const Home = () => {

  faker.seed(100)
  const productsarray = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    product: faker.commerce.productName(),
    prices: faker.commerce.price(),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
  }))

  const [product] = useState(productsarray)
  return (
    <div className="productContainer">
      {product.sort(function (a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        // if( a.prices < b.prices)return -1;
        // if( a.prices > b.prices)return 1;
        return 0;
      }).map((item) => (
        <SingleProduct item={item} key={item.name} />
      ))}
    </div>
  )
}

