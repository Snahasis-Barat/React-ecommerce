import React from 'react'
import {Nav,Container,Navbar} from 'react-bootstrap'
function Navgation(setShow) {
  return (
    <div>
         <Navbar bg="primary" variant="dark" >
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link onClick={()=>setShow(true)}>Home</Nav.Link>
            <Nav.Link onClick={()=>setShow(false)}>Cart</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Navgation