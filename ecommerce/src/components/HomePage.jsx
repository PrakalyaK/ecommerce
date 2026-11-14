import { useEffect, useState } from 'react';
import '../index.css'
import product from '../data/product.js'
function HomePage(){
    return(
     <>
     <div className="home-page">
      <div className="products-grid">
      <ProductDisplay products={product}/>
      </div>
    </div>
     </>
    );
}
function ProductDisplay({products}){
  return (
    <>
       {products.map((product)=>{
        return (
          <Productstructure key={product.id} 
          productimg={product.image} 
          productname={product.name} 
          productRatingStars={product.rating.stars} 
          productRatingCount={product.rating.count}
          productPrice={product.price}
          />
        )
       })
      }
    </>
  )
}
function Productstructure({productimg, productname,productRatingStars,productRatingCount,productPrice}){
  const ratingImage = `images/ratings/rating-${Math.round(productRatingStars * 10)}.png`;

  return (
     <>
       <div className="product-container">
          <div className="product-image-container">
            <img className="product-image"
              src={productimg} />
          </div>

          <div className="product-name limit-text-to-2-lines">
            {productname}
          </div>

          <div className="product-rating-container">
            <img className="product-rating-stars"
              src={ratingImage} />
            <div className="product-rating-count link-primary">
             {productRatingCount}
            </div>
          </div>

          <div className="product-price">
            {productPrice}
          </div>

          <div className="product-quantity-container">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div className="product-spacer"></div>

          <div className="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button className="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>
     </>
  );
}
export default HomePage;