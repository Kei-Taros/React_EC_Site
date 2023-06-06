import React from "react"
import IconButton from "@material-ui/core/IconButton"
import Badge from "@material-ui/core/Badge"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MenuIcon from "@material-ui/icons/Menu"

function HeaderMenus(props){

  return (
    <>
      <IconButton>
{/* Badgeにoverlap="rectangular"を追加しないとエラーが起きる */}
        <Badge badgeContent={3} color="secondary" overlap="rectangular" >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton onClick={(event) => props.handleDrawerToggle(event)} >
        <MenuIcon />
      </IconButton>
    </>
  )

}

export default HeaderMenus