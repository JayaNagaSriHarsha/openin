import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const Products = () => {
  const accessToken = Cookies.get('jwt_token')

  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://img.freepik.com/free-vector/shopping-poster-with-paper-bags_1284-21763.jpg?size=626&ext=jpg"
          alt="products"
          className="products-img"
        />
        <h1>Products</h1>
      </div>
    </>
  )
}

export default Products
