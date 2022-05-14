import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import { products } from "../data/products"
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css'

export const ShoppingPage = () => {
  const { shoppingCart, onProductCartChange } = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          products.map( product => (
            <ProductCard 
              product={ product } 
              className="bg-dark text-white" 
              key={ product.id }
              onChange={ onProductCartChange }
              value={ shoppingCart[product.id]?.count || 0 }
              >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.5)' }} />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-bottons" />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries( shoppingCart ).map( ([key, product]) => (
            <ProductCard 
              key={ key }
              product={ product } 
              className="bg-dark text-white" 
              style={{ width: '100px' }}
              onChange={ onProductCartChange }
              value={ product.count }
            >
              <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,.5)' }} />
              <ProductButtons className="custom-bottons" style={{ display: 'flex', justifyContent: 'center' }} />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}
