import {Nav, Navbar, NavDropdown, Container} from 'react-bootstrap'

function NavbarComp() {
    return (
      <div className="App">
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">
                <Nav.Link href="/about">A propos</Nav.Link>
                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                <Navbar.Brand href="/about" style={{ paddingLeft: 20, paddingRight: 0 }}>AB</Navbar.Brand>
                <Nav.Link href="/experiences">Expérience</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
  
  export default NavbarComp;