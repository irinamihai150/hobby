import MyNavBar from "./MyNavBar.jsx"
import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaInstagram, FaPinterest, FaQuestionCircle } from "react-icons/fa"
import HelpButton from "./HelpButton.jsx"

const Layout = ({ children }) => {
	let currentYear = new Date().getFullYear()
	const backgroundStyle = {
		backgroundColor: "purple",
	}
	return (
		<div>
			<header>
				<MyNavBar />
			</header>
			<main>{children}</main>
			<footer>
				<Container>
					<Row className='align-items-center'>
						<Col xs={12} md={3}>
							<div className='text-center py-3 fw-bold'>
								{currentYear} Nail Art &copy; All Rights Reserved
							</div>
						</Col>

						<Col
							xs={12}
							md={6}
							className='d-flex justify-content-center align-items-center'
						>
							<div>
								<h5 className='fw-bold'>Follow Me</h5>
								<a
									href='https://www.instagram.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaInstagram
										size={30}
										style={{ margin: "10px 10px", color: "black" }}
									/>
								</a>
								<a
									href='https://www.pinterest.com/'
									target='_blank'
									rel='noopener noreferrer'
								>
									<FaPinterest size={30} style={{ color: "black" }} />
								</a>
							</div>
						</Col>
					</Row>
					<HelpButton />
				</Container>
			</footer>
		</div>
	)
}

export default Layout
