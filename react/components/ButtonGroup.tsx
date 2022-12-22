import React from "react";
import styles from "./styles.css"
import { Link } from "vtex.render-runtime"
import { generateBlockClass } from "@vtex/css-handles";




const ButtonGroup = ({ blockClass }: { blockClass: string }) => {

  const container__buttons__add = generateBlockClass(styles.container__buttons__add, blockClass),
    buttons__comprar = generateBlockClass(styles.buttons__comprar, blockClass)

  return (

    <div className={container__buttons__add}>
      <Link to="/checkout" >
        <button className={buttons__comprar}>CHECK OUT</button>
      </Link>

      <Link to="/" >
        <button className={buttons__comprar}>CONTINUA COMPRANDO</button>
      </Link>
    </div>

  )
}

export default ButtonGroup
