import React from "react"
import { Image, Navbar, Nav, Container } from "react-bootstrap"

const MyNavBar = () => {
	const logoPath = "/images/IMG_0630.jpg"
	return (
		<Navbar expand='lg' className='custom-navbar'>
			{/* <h2 style={{ padding: "2rem" }}> Nails by Me</h2> */}
			<Container className='ms-auto'>
				<Navbar.Brand>
					<Image
						src={logoPath}
						alt='Logo'
						fluid
						style={{ width: "100px", height: "100px", borderRadius: "50%" }}
						className='rounded'
					/>
					{/* <h2> Nails by Me</h2> */}
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/home'>Home</Nav.Link>
						<Nav.Link href='/about'>About</Nav.Link>
						<Nav.Link href='/gallery'>Gallery</Nav.Link>
						<Nav.Link href='/services'>Services</Nav.Link>
						{/* <Nav.Link href='/faqs'>Faqs</Nav.Link> */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default MyNavBar
