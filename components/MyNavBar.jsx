import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { FaHeart } from "react-icons/fa"

const MyNavBar = () => {
	return (
		<Navbar className='sticky-top' expand='lg'>
			<Container>
				<Navbar.Brand className='text-center fs-1 Blazing m-3'>
					Gells <FaHeart className='icon-heart' /> Jess
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
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
