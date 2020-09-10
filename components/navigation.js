import Link from 'next/link'
import { Navbar } from 'react-bootstrap'

export default function Navigation() {
  return(
    <Navbar bg="light">
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Navbar>
    )
}