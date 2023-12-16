import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const MyNavBar = () => {
	return (
		<Navbar className='custom-navbar' expand='lg'>
			<Container className='d-flex justify-content-between'>
				<Navbar.Brand className='text-center'>Nail Art Jess</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='m-auto'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/gallery'>Gallery</Nav.Link>
						<Nav.Link href='/services'>Services</Nav.Link>
						<Nav.Link href='/contact'>Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavBar
