import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "../Components/Style.css"
import { Cartpage } from '../Content'
export const Header = () => {
  const {cart} = useContext(Cartpage)
  return (
    <div className='headers'>
      <h1 className='header'>contextapi tutorial</h1>
      <nav>
        <ul  className='nav'>
          <li className='prod'>
            <Link to='/'>Homepage</Link>
          </li>
          <li className='prod2'>
            <Link to='/cart'>Cart</Link>
            <span className='length'>{cart.length}</span>
          </li>
        </ul>
      </nav>
    </div>
  )
}
