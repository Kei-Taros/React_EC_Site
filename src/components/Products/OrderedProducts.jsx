﻿import React, { useCallback } from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvater from "@material-ui/core/ListItemAvatar"
import ListItemText from "@material-ui/core/ListItemText"
import Divider from "@material-ui/core/Divider"
import { makeStyles } from "@material-ui/core/styles";
import { PrimaryButton} from "../UIkit"
import { useDispatch } from "react-redux"
import { push } from "connected-react-router"

const useStyles = makeStyles({
  list: {
    background: "#fff",
    height: "auto"
  },
  image: {
    objectFit: "cover",
    margin: "8px 16px 8px 0",
    height: 96,
    width: 96
  },
  text: {
    width: "100%"
  }
})

function OrderedProducts(props) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const products = props.products

  const goToProductDetail = useCallback((id) => {
    dispatch(push("/product/" + id))
  },[])

  return (
    <List>
      {products.map(product => (
        <>
          <ListItem className={classes.list} key={product.id}>
            <ListItemAvater>
              <img
                className={classes.image}
                src={product.images[0].path}
                alt={"Orderd product"}
              />
            </ListItemAvater>
            <div className={classes.text}>
              <ListItemText
                primary={product.name}
                secondary={"size:" + product.size}
              />
              <ListItemText
                primary={"¥" + product.price.toLocaleString()}
              />
            </div>
            <PrimaryButton
              label={"Product details"}
              onClick={() => goToProductDetail(product.id)}
            />
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  )
}

export default OrderedProducts