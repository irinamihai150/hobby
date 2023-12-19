import MyNavBar from "./MyNavBar.jsx"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaInstagram, FaPinterest } from "react-icons/fa"
import HelpButton from "./HelpButton.jsx"
import { FaHeart } from "react-icons/fa"
import { FaUserPlus } from "react-icons/fa"

const Layout = ({ children }) => {
	let currentYear = new Date().getFullYear()

	return (
		<div>
			<header style={{ backgroundColor: "#EBE9EB" }}>
				<MyNavBar />
			</header>
			<main>{children}</main>
			<footer style={{ backgroundColor: "#EBE9EB" }}>
				<Container>
					<Row className='align-items-center'>
						<Col xs={12} md={3}>
							<div className='text-center py-3 fw-bold'>
								{currentYear} Gells <FaHeart className='icon-heart' /> JESS
								&copy; All Rights Reserved
							</div>
						</Col>

						<Col
							xs={12}
							md={6}
							className='d-flex justify-content-center align-items-start'
						>
							<p className='fw-bold hover-orange fs-2 me-3 mb-0'>Follow Me</p>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaInstagram
									size={30}
									style={{ margin: "10px 10px 0", color: "#E4405F" }}
								/>
							</a>
							<a
								href='https://www.pinterest.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<FaPinterest
									size={30}
									style={{
										marginTop: "9px",
										marginRight: "10px",
										color: "#BD081C",
									}}
								/>
							</a>
						</Col>
					</Row>
					<HelpButton />
				</Container>
			</footer>
		</div>
	)
}

export default Layout
