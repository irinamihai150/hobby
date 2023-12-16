import React from "react"
import { Image, Navbar, Nav, Container } from "react-bootstrap"

const MyNavBar = () => {
	const logoPath = "/images/IMG_0630.jpg"

	return (
		<Navbar className='custom-navbar' expand='true'>
			<Container>
				<Navbar.Brand>
					<Image
						src={logoPath}
						alt=''
						width='50'
						height='50'
						className='d-inline-block align-top'
					/>
					Irina
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
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
