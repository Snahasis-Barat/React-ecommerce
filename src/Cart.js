import React, { useEffect, useState } from 'react'
import { Table,Card,Container,Row,Button } from 'react-bootstrap'
function Cart({setCart,cart}) {
 
  var total=0
  var finalPrice=1
  const [initialAmount,totalAmount]=useState(0)
  const [flag,setFlag]=useState(false)
  useEffect(()=>{
    var x=cart.map(i=>{
      if(flag==false)
      {
        console.log("Inside useEffect")
        i.finalPrice=i.price*i.quantity
        total=total+i.price*i.quantity
        
      }
      
  })
  if(total>0 && cart.length>0 && flag==false)
  {
    totalAmount(total)
  }
  })
 
  
 
 
  const handleChange=(item,sign)=>{
    
  setFlag(true)
    total=0
    const i=cart.indexOf(item)
    const arr=cart
   total=total+arr[i].price
    if(arr[i].quantity==0)
    {
     arr[i].quantity=1
     
    }

    if(sign==-1)
    {
      if(arr[i].quantity==1)
      {
        document.getElementById("decrement").disabled=true
      }
      else{
      arr[i].quantity=cart[i].quantity-1
      arr[i].finalPrice=arr[i].quantity*arr[i].price
      console.log(cart[i].quantity)
      if((initialAmount-arr[i].price)>=total)
      {
        
      totalAmount(initialAmount-arr[i].price)
      }
    }
    }
    else{
      document.getElementById("decrement").disabled=false
      arr[i].quantity=cart[i].quantity+1
      arr[i].finalPrice=arr[i].quantity*arr[i].price
     console.log(cart[i].quantity)
      totalAmount(initialAmount+arr[i].price)
    }
    
    setCart([...arr])
    
   
   
  }
  const removeItems=(x,i)=>{

    setCart(item=>{
      return item.filter(ob=>{
        return ob.id!==i
      })
    })
   
    

  }
  //const [cartItems,setCartItems]=useState(cart)
 // console.log(details)

  /*const increment=(x)=>{

    const items=cartItems.map(item=>{
      if(item.price==x.price)
      {
        return {...item,quantity:setTotal(total+1)}
      }
      return x
  })
    
    setCartItems(items)
    console.log(cartItems)

     
  }

  const decrement=(x)=>{
    const items=cartItems.map(item=>{
      if(item.price==x.price)
      {
        return {...item,quantity:setTotal(total-1)}
      }
      return x
  })

    setCartItems(items)


  }*/
  return (
    <div>
      <Container>
      <Table striped bordered hover>
        <thead>
            <tr>
                <th>Product details</th>
                <th>Quantity</th>
                <th>Total price</th>
            </tr>
        </thead>
        <tbody>
        
          {
            
             cart.map((x,index)=>(
              <tr>
                <td>
                <Row >
            <Card style={{ width: '18rem' ,height:'18rem',margin:'10px'}}>
            <Card.Img variant="top" src={x.img} />
            </Card>
            
            <div style={{width:'300px',marginTop:'70px'}}>
              <h4>{x.name}</h4>
              <p>{x.details}</p>
            </div>
            </Row>
            </td>
             <td >
              <div style={{marginTop:'70px'}}>
             <Button id="decrement" variant="danger" onClick={()=>handleChange(x,-1)} style={{margin:'2px'}}>-</Button>{x.quantity}<Button variant="primary" id="decrement" onClick={()=>handleChange(x,+1)} style={{margin:'2px'}}>+</Button>
             </div>
              </td> 
           
             <td>
             <div style={{marginTop:'70px'}}>
              {
                
              x.finalPrice>1? x.finalPrice:x.price
              }
               
              </div>
             </td>
             <td>
             <div style={{marginTop:'70px'}}>
              <Button variant="danger" onClick={()=>removeItems(x,x.id)}>✕</Button>
              </div>
             </td>
             
              </tr>
              
              
              
             ))
             
             }   
           
        
        </tbody>
      </Table>

      <h3>Your total amount is: {initialAmount}</h3>
      </Container>
    </div>
  )
}

export default Cart