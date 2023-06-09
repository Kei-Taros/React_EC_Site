﻿import React from "react"
import Divider from "@material-ui/core/Divider"
import { TextDetail } from "../UIkit"
import { OrderedProducts } from "./index"

const datetimeToString = (date) => {
  return date.getFullYear() + "-"
    + ("00" + (date.getMonth() + 1)).slice(-2) + "-"
    + ("00" + date.getDate()).slice(-2) + " "
    + ("00" + date.getHours()).slice(-2) + ":"
    + ("00" + date.getMinutes()).slice(-2) + ":"
    + ("00" + date.getSeconds()).slice(-2)
}

const dateToString = (date) => {
  return date.getFullYear() + "-"
    + ("00" + (date.getMonth() + 1)).slice(-2) + "-"
    + ("00" + date.getDate()).slice(-2)
}

function OrderHistoryItem(props) {
  const order = props.order
  const orderedDatetime = datetimeToString(order.updated_at.toDate())
  const shippingDate = dateToString(order.shipping_date.toDate())
  const price = "¥" + order.amount.toLocaleString()

  return (
    <div>
      <div className="module-spacer--small" />
      <TextDetail label={"Order ID"} value={order.id} />
      <TextDetail label={"Order Date"} value={orderedDatetime} />
      <TextDetail label={"Scheduled shipping"} value={shippingDate} />
      <TextDetail label={"Order Amount"} value={price} />
      {order.products.length > 0 && (
        <OrderedProducts products={order.products} />
      )}
      <div className="module-spacer--extra-extra-small" />
      <Divider />
    </div>
  )
}

export default OrderHistoryItem