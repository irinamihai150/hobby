import React from "react"
import { Container } from "react-bootstrap"
import { Button, Row, Col } from "react-bootstrap"

const Home = () => {
	return (
		<div className='home-background'>
			<Container className='home-container'>
				<Row
					className='mt-5 d-flex align-items-center justify-content-center '
					style={{ height: "90vh" }}
				>
					<Col className='text-center'>
						<h1 className='mb-4 p-3 animatedText text-center'>
							Creative and Beautiful
						</h1>
						<h2 className='text-center mb-2 animatedTextH2'>
							Nails and Designs For You
						</h2>
						{/* <a href='/services'>
							<Button
								variant='light'
								className='m-3 mx-auto d-block button-price'
							>
								Full Price List
							</Button>
						</a> */}
						<Button
							variant='dark'
							className='button-book'
							href='https://bookings.gettimely.com/gelsbyjesz/book?fbclid=PAAaZ-k8NL74baWImWRLckNBqlDx5ZeIdObR7rk2vzyrKGm7DOXHZsw2GMdCM_aem_AaIjBRUGo3_6gefL-mVuwudyzqJYj4CgbBL5APspE1TORfCZQvKo5KJUQq55nAYQxGc'
						>
							<span className='button-text'>Book Now</span>
						</Button>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Home
