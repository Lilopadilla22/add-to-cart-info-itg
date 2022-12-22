import React from "react";
import { generateBlockClass } from "@vtex/css-handles";

import { useProduct } from 'vtex.product-context';
import { useOrderForm } from "vtex.order-manager/OrderForm";

import ButtonGroup from "./ButtonGroup";
import styles from "./styles.css"

const AddToCartInfo = ({ blockClass }: { blockClass: string }) => {

  const container = generateBlockClass(styles.container, blockClass),
    container__item = generateBlockClass(styles.container__item, blockClass),
    container__total = generateBlockClass(styles.container__total, blockClass),
    container__item__description = generateBlockClass(styles.container__item__description, blockClass),
    container__item__data = generateBlockClass(styles.container__item__data, blockClass),
    container__total__title = generateBlockClass(styles.container__total__title, blockClass)

  const productInfo = useProduct();
  const { orderForm: {
    items,
    totalizers
  } } = useOrderForm()

  console.log("este producto tiene esta info: ", productInfo)
  console.log("mis totale ", totalizers[0])

  return (
    <div className={container}>
      {
        items.map((item: any, index: number) => {
          console.log(item)
          return (

            <div key={index} className={container__item}>
              <div>
                <img src={item.imageUrls.at1x} />
              </div>
              <div className={container__item__description}>
                <p className={container__item__data}>{item.name}</p>
                <p className={container__item__data}>{item.id}</p>
                <p className={container__item__data}>$ {item.price / 100}</p>
                <p className={container__item__data}>cant: {item.quantity}</p>
              </div>
            </div>
          )
        })
      }
      <div className={container__total}>
        <h2 className={container__total__title}>Resumen de tu compra</h2>
        <p>tenemos {items.length} items en tu compra</p>
        <p>total: ${totalizers[0]?.value / 100}</p>
      </div>
      <ButtonGroup blockClass={"buttons__pay"} /> {/*acciones*/}
    </div>
  )
}

export default AddToCartInfo



