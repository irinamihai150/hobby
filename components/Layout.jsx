import MyNavBar from "./MyNavBar.jsx"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const Layout = ({ children }) => {
	let currentYear = new Date().getFullYear()

	return (
		<div>
			<header>
				<MyNavBar />
			</header>
			<main>{children}</main>

			<footer>
				<Container>
					<Row className='align-items-center' style={{ height: "100px" }}>
						<Col xs={12} sm={6} md={3}>
							<footer>&copy; {currentYear} Nail Art</footer>
						</Col>

						<Col
							xs={12}
							md={6}
							className='d-flex justify-content-center align-items-center'
						>
							<h5>Connect With Us</h5>
							<div>
								<a
									href='https://www.instagram.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaInstagram
										size={30}
										style={{ margin: 10, color: "pink" }}
									/>
								</a>
								<a
									href='https://www.facebook.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaFacebook size={30} style={{ color: "pink" }} />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	)
}

export default Layout
