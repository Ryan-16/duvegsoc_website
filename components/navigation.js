import Link from 'next/link'
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

export default function Navigation() {
  return(
    <Navbar collapseOnSelect expand="lg" className="shadow p-3 mb-5 bg-white rounded">
      <Container>
        <Link href="/">
        <Navbar.Brand id="nav-text-title" href="/">
          <img
            alt="DUVegSoc Logo"
            src="/images/logo.png"
            width="75"
            height="75"
          />{' '}
          DU VegSoc
        </Navbar.Brand>
        </Link>
        <Nav id="nav-text" >
          <Link id="nav-text" href="/blog">
            Blog
          </Link>
        </Nav>
      </Container>
    </Navbar>
    )
}
