import { Button, Card } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilites/formateCurrency"

type StoreItemProps = {
  id: number,
  name: string,
  price: number,
  imgUrl: string
}

export function StoreItem({id, name, price, imgUrl} : StoreItemProps){
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
  const quantity = getItemQuantity(id)
return (
<Card className="h-100">
  <Card.Img variant="top" src={imgUrl} height='200px' style={{objectFit: 'cover'}}/>
  <Card.Body className="d-flex flex-column"> 
  <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
    <span className="fs-2">
      {name}
    </span>
    <span className="ms-2 text-muted">{formatCurrency(price) }</span>

  </Card.Title>
  <div className="mt-auto">
    {quantity=== 0? (
      <Button className="w-100 btn-info" onClick={() => increaseCartQuantity(id)}> Add to Cart</Button>
    ) : <div className="d-flex align-items-center flex-column" style={{gap: '.5 rem'}}> 
    <div className="d-flex align-items-center justify-content-center" style={{gap: '.5 rem'}}>
    
    <div>
    <span className='fs-3'></span> In Cart
    </div>
    
    </div>
    <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
  </div>}
  </div>
  </Card.Body>
</Card>
)
}