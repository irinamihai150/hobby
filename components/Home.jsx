import React from "react"
import Testimonials from "./Testimonials"
import { Container, Card, Image } from "react-bootstrap"
import NailFaqs from "./NailFaqs"
import { Button, Row, Col } from "react-bootstrap"

const Home = () => {
	const mainImagePath = "/images/mainimage.jpg"

	return (
		<div className='home-background'>
			<Container className='home-container'>
				<Row>
					<Col className='text-center'>
						<h2 className='mb-4 p-3 animatedText text-center'>
							Welcome to <strong>Jess</strong> Nail Art
						</h2>
						<h3 className='text-center'>Nails you can trust</h3>
						<a href='/services'>
							<Button variant='light' className='m-3 mx-auto d-block'>
								Full Price List
							</Button>
						</a>
					</Col>
				</Row>
				<Card
					className='border-0'
					style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
				>
					<Card.Body className='p-4 mb-4 animatedLargeText'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
						nisi repudiandae! Temporibus nisi nemo quis facilis dolor repellat a
						placeat totam, eos ab libero quas, quod tempora distinctio adipisci
						quisquam eius? Atque, voluptas? Corporis possimus dolore consectetur
						deleniti eius! Placeat repudiandae repellat perferendis! Unde nihil,
						iure officia obcaecati delectus doloremque. Doloribus, dolore.
						Suscipit distinctio rem nostrum, nisi dolor ex velit, rerum numquam
						minus ducimus quaerat praesentium, ipsum aliquid saepe eius!
						Reiciendis odio neque similique magni dolores laudantium corporis
						cum eius nobis natus ad, perferendis non suscipit itaque sunt
						veritatis doloremque quae nihil praesentium.
					</Card.Body>
				</Card>
				<NailFaqs />
				<Testimonials />
			</Container>
		</div>
	)
}

export default Home
