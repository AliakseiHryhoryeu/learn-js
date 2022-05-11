import { ShoppingBasket } from '@mui/icons-material'
import { Divider, Drawer, List, ListItem, ListItemIcon, Typography, ListItemText } from '@mui/material'
import React from 'react'
import BasketItem from './BasketItem'

function Basket(props) {
    const {
        cartOpen,
        closeCart = Function.prototype,
        order = [],
        removeFromOrder
    } = props

    return (
        <Drawer
            anchor='right'
            open={cartOpen}
            onClose={closeCart}
        >
            <List
                sx={{ width: '400px' }}
            >
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary='Basket' />

                </ListItem>
                <Divider />
                {!order.length ?
                    <ListItem>Корзина пуста</ListItem>
                    : (
                        <>
                            {order.map((item) => (
                                <BasketItem
                                    key={item.name}
                                    removeFromOrder={removeFromOrder}
                                    {...item}
                                />
                            ))}
                            <Divider />
                            <ListItem>
                                <Typography sx={{ fontWeight: 700 }}>
                                    Общая стоимость:{' '}
                                    {order.reduce((acc, item) => {
                                        return acc + item.price * item.quantity;
                                    }, 0)}{' '}
                                    рублей.
                                </Typography>
                            </ListItem>
                        </>
                    )}
            </List>
        </Drawer>
    )
}

export default Basket
