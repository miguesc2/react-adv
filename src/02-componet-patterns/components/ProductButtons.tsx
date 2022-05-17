import { CSSProperties, useCallback, useContext, useRef } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //la clase se agrega cuando sea true, significa que ha llegado al maximo el counter
  //className={ styles.buttonAdd } en el classname de button +1 agregar el estilo con `` y su condicion
  
  const { counter, increaseBy, maxCount } = useContext(ProductContext)

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount, //devuelve true si son iguales, false si no.
    [counter, maxCount],
  )
  
  return (
    <div 
      className={ `${ styles.buttonsContainer } ${ className }` }
      style={ style }
    >
      <button 
        className={ styles.buttonMinus } 
        onClick={ () => increaseBy( -1 ) }>-
      </button>

      <div className={ styles.countLabel }>{ counter }</div>
        <button 
          className={`${ styles.buttonAdd } ${ isMaxReached() && styles.disabled }`}
          onClick={ () => increaseBy( +1 ) }>+
        </button>
    </div>
  )
}