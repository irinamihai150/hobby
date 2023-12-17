import React from "react"
import Testimonials from "./Testimonials"
import { Container, Card } from "react-bootstrap"
import NailFaqs from "./NailFaqs"
import { Button, Row, Col } from "react-bootstrap"

const Home = () => {
	return (
		<div className='home-background'>
			<Container className='home-container'>
				<Row
					className='mt-5 d-flex align-items-center justify-content-center '
					style={{ height: "80vh" }}
				>
					<Col className='text-center'>
						<h1 className='mb-4 p-3 animatedText text-center'>
							Creative and Beautiful
						</h1>
						<h2 className='text-center mb-2'>Nails and Designs For You</h2>
						<a href='/services'>
							<Button variant='light' className='m-3 mx-auto d-block'>
								Full Price List
							</Button>
						</a>
					</Col>
				</Row>
				<NailFaqs />
				<Testimonials />
			</Container>
		</div>
	)
}

export default Home
