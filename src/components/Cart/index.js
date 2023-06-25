import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Cart = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://img.freepik.com/free-vector/purchasing-habits-abstract-concept_335657-2995.jpg?size=626&ext=jpg"
          alt="cart"
          className="cart-img"
        />
        <h1>Cart</h1>
      </div>
    </>
  )
}

export default Cart
