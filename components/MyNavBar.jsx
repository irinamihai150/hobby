import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import Link from "next/link"

const MyNavBar = () => {
	return (
		<Navbar>
			<Link href='/' passHref>
				<Navbar.Brand>logo</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Link href='/about' passHref>
						About
					</Link>
					<Link href='/gallery' passHref>
						Gallery
					</Link>
					<Link href='/services' passHref>
						Services
					</Link>
					<Link href='/testimonials' passHref>
						Testimonials
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default MyNavBar
