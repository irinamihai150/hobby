import React from "react"
import { Image, Navbar, Nav, Container } from "react-bootstrap"

const MyNavBar = () => {
	const logoPath = "/images/logo.jpg"
	return (
		<Navbar expand='lg'>
			<Container>
				<Navbar.Brand>
					<Image
						src={logoPath}
						alt='Logo'
						fluid
						style={{ width: "100px", height: "100px", borderRadius: "50%" }}
						className='rounded'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/gallery'>Gallery</Nav.Link>
						<Nav.Link href='/services'>Services</Nav.Link>
						<Nav.Link href='/faqs'>Faqs</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavBar
