import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilites/formateCurrency";
import { CartItem } from "./CartItem";
import items from '../data/items.json'
import { useNavigate } from "react-router-dom";


type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
  const {closeCart, cartItems} = useShoppingCart()

  const navigate = useNavigate()
  
  function routeChange() {
    const path = `/checkout`
    navigate(path)

  }
 
  return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      <Stack  gap={3}>
        {cartItems.map(item => <CartItem key={item.id} {...item}/>)}
        <div className="ms-auto fw-bold fs-5">Total {formatCurrency(cartItems.reduce((total, cartItem) => {
          const item = items.find(item => item.id === cartItem.id)
          return total + (item?.price || 0) * cartItem.quantity
        }, 0)
        )}
        </div>
      </Stack>
      <Button className="btn-info" size='lg' onClick={() => routeChange()}>Checkout</Button>
    </Offcanvas.Body>
  </Offcanvas>
}