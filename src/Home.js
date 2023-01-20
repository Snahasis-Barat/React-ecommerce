import React from 'react'
import {Card,Button,Container,Col,Row} from 'react-bootstrap'
import Cart from './Cart'
function Home({addtoCart}) {

    const store=[
        {
            id:1,
            name:"Shirt1",
            details:"Men White & Teal Blue Slim Fit Striped Casual Shirt",
            img:"https://static.connect2india.com/c2icd/product_resources/images/mens-garments.jpg",
            price:850,
            quantity:1
        },
        {
            id:2,
            name:"Shirt1",
            details:"Men White & Teal Blue Slim Fit Striped Casual Shirt",
            img:"https://static.connect2india.com/c2icd/product_resources/images/mens-garments.jpg",
            price:720,
            quantity:1
        },
        {
            id:3,
            name:"Shirt1",
            details:"Men White & Teal Blue Slim Fit Striped Casual Shirt",
            img:"https://static.connect2india.com/c2icd/product_resources/images/mens-garments.jpg",
            price:920,
            quantity:1
        },
        {   id:4,
            name:"Shirt1",
            details:"Men White & Teal Blue Slim Fit Striped Casual Shirt",
            img:"https://static.connect2india.com/c2icd/product_resources/images/mens-garments.jpg",
            price:750,
            quantity:1
        },
        {
          id:5,
            name:"Shirt1",
            details:"Men White & Teal Blue Slim Fit Striped Casual Shirt",
            img:"https://static.connect2india.com/c2icd/product_resources/images/mens-garments.jpg",
            price:900,
            quantity:1
        },
        {
          id:6,
            name:"Shirt1",
            details:"Men White & Teal Blue Slim Fit Striped Casual Shirt",
            img:"https://static.connect2india.com/c2icd/product_resources/images/mens-garments.jpg",
            price:855,
            quantity:1
        }
    ]

    
  return (
    <div>
        <Container>
        <Row>
        {store.map(x=>(
            
             <Col>
            <Card style={{ width: '18rem' ,height:'30rem',margin:'10px'}}>
            <Card.Img variant="top" src={x.img} />
            <Card.Body>
              <Card.Title>{x.name}</Card.Title>
              <Card.Text>
                {x.details}<br/>
                <h4>₹{x.price}</h4>
              </Card.Text>
              <Button variant="primary" onClick={()=>addtoCart(x)}>Add to cart</Button>
            </Card.Body>
          </Card>
          </Col>
        
        ))
       
        }
         </Row>
        
        </Container>
    </div>
  )
}

export default Home