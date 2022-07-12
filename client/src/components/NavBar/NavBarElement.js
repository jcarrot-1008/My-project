import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBarElement = () => {
  const token = localStorage.getItem('jwt-token') ?? null

  const deleteToken = () => {
    localStorage.removeItem('jwt-token')
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/Home">
          Home
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Board">게시판</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              {token ? 
              <NavDropdown.Item href="#action/3.3">관리자페이지</NavDropdown.Item> : null}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/login">SignIn</Nav.Link>
            <Nav.Link eventKey={1} href="#memes">
              SignUp
            </Nav.Link>
           
          </Nav>
           {token ? 
           <Nav.Link 
           style={{marginLeft:'20px'}} 
           href="/login"
           onClick={deleteToken}
           >
            Logout
           </Nav.Link>
              : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBarElement