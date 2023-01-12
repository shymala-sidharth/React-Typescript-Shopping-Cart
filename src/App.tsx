import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"
import Navbar from "./components/Navbar"
import { useAuth0 } from "@auth0/auth0-react"
import ProtectedRoute from "./auth/ProtectedRoute"


function App()  {

  const {isLoading} = useAuth0

  if (isLoading) {
    return <div>Loading...</div>
  }

  return(
  <>
  <div>
  <ShoppingCartProvider>
  <Navbar/>
  
   <Container className="mb-4">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  </Container>
  </ShoppingCartProvider>
  </div>
  </>
  )
}

export default App