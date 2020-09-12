import Link from 'next/link'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

export default function Navigation() {
  return(
    <Navbar collapseOnSelect expand="lg" className="shadow p-3 mb-5 bg-white rounded">
      <Container>
        <Link href="/">
        <Navbar.Brand id="nav-text" href="/">
          <img
            alt="DUVegSoc Logo"
            src="/images/logo.png"
            width="100"
            height="100"
          />{' '}
          DU VegSoc
        </Navbar.Brand>
        </Link>
          <Nav id="nav-text" >
            <Nav.Link id="nav-text" >
              <Link id="nav-text" href="/blog">
                Blog
              </Link>
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    )
}