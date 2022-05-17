import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from "../data/products"

import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <ProductCard 
        product={ product } 
        className="bg-dark text-white" 
        key={ product.id }
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
        >
          {
            ({count, isMaxCountReached, maxCount, increaseBy, reset}) => (
              <>
                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.5)' }} />
                <ProductTitle className="text-bold" />
                <ProductButtons className="custom-bottons" />
                <button onClick={ reset }>Reset</button>
                
                <button onClick={() => increaseBy(-2)}>-2</button>
                {
                  ( !isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button> )
                }
                <br />
                <span>{ count } - { maxCount }</span>
              </>
            )
          }
      </ProductCard>
    </div>
  )
}
