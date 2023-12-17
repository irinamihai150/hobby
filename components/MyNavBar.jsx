import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"

const MyNavBar = () => {
	return (
		<Navbar className='sticky-top' expand='lg'>
			<Container>
				<Navbar.Brand className='text-center fs-2'>Nail Art Jess</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='m-auto mt-4'>
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
