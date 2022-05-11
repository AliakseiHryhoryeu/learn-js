import React from "react"
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material"
import { Menu as MenuIcon } from '@mui/icons-material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

const Header = ({handleCart, orderLen}) => {
    return (
        <AppBar
            position='static'
        >
            <Toolbar >
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                >
                    MUI Shop
                </Typography>
                <IconButton
                color='inherit'
                    onClick={handleCart}
                >
                    <Badge
                    color='secondary'
                    badgeContent={orderLen}
                    >
                    <ShoppingBasketIcon />
                    </Badge>
                </IconButton>


            </Toolbar>
        </AppBar>
    )
}

export default Header
