import { ProductInCart, Product } from '../interfaces/interfaces';
import { useState } from 'react';

export const useShoppingCart = () => {

  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
    
  const onProductCartChange = ( { count, product }: { count: number, product: Product }) => {

    setShoppingCart(oldShoppingCart => {      

      const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 }

      if ( Math.max(productInCart.count + count, 0) > 0 ) { //si es mayor a cero
        productInCart.count += count
        
        return {
          ...oldShoppingCart,
          [product.id]: productInCart
        }
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart; //si es menor, elimina el producto
      return rest
    })
  } 
    return {
    shoppingCart,
    onProductCartChange
  }
}
