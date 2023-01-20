import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Navbar,Nav,Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home';
import Navgation from './Navgation';
import Cart from './Cart';
function App() {
  const arr=[]
  const [show,setShow]=useState(true)
  const [cart,setCart]=useState([{}])
  const[count,setCount]=useState(0)

  var x=0
  

  const addtoCart=(item)=>{
    var c=1
    var pos=-1
  setCount(count+1)
  
  if(count<1)
  {

    
        setCart([
          {
          name:item.name,
          details:item.details,
         img:item.img,
          price:item.price,
          quantity:item.quantity,
          id:item.id
    
        }
        ])
      
     
        
   
}
  else{
   pos=cart.findIndex(i=>i.id==item.id)
    console.log(pos)
    if(pos!=-1)
    {
      cart[pos].quantity=cart[pos].quantity+1
      setCart([...cart])

     }
    else{
      
      setCart(a=>[...a,
      {
        name:item.name,
        details:item.details,
       img:item.img,
        price:item.price,
        quantity:item.quantity,
        id:item.id
      }

      ])
    }
     
    }

  }

 
   //console.log(cart)
  
  return (
    <div className="App">
      
      <Navbar bg="primary" variant="dark" >
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setShow(true)}>Home</Nav.Link>
            <Nav.Link onClick={()=>setShow(false)}>Cart</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      {show?
    <Home addtoCart={addtoCart}/>:<Cart  setCart={setCart} cart={cart}/>  
    }
     
    </div>
  );
}

export default App;
