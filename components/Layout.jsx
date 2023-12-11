import MyNavBar from "./MyNavBar.jsx"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaInstagram, FaPinterest } from "react-icons/fa"

const Layout = ({ children }) => {
	let currentYear = new Date().getFullYear()
	const backgroundStyle = {
		backgroundImage: 'url("../images/IMG_0634.JPG")',
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat",
		backgroundColor: "rgba(255, 255, 255, 0.8)",
		// opacity: 0.8,
	}
	return (
		<div
			style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
		>
			<header style={{ ...backgroundStyle }}>
				<MyNavBar />
			</header>
			<main>{children}</main>

			<footer
				style={{
					marginTop: "auto",
					padding: "20px 0",
					...backgroundStyle,
				}}
			>
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
								<h5 className='fw-bold'>Connect with Me</h5>
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
				</Container>
			</footer>
		</div>
	)
}

export default Layout
