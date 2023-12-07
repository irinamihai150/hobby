import React from "react"
import { Container, Card, Row, Col, Button } from "react-bootstrap"

const About = () => {
	return (
		<Container className='mt-4'>
			<Row>
				<Col>
					<Card border='0'>
						{/* <Card.Img
							className='rounded-circle'
							variant='top'
							src='/images/mainimage.jpg'
							alt='Card image'
						/> */}
						<Card.Body>
							<Card.Title style={{ fontSize: "2em", textAlign: "center" }}>
								My Story
							</Card.Title>
							<Card.Text className='shadow-lg p-3'>
								Welcome to our salon! I'm thrilled to introduce our talented
								team of nail artists who share a passion for creativity and
								precision. We take pride in turning every nail session into an
								artful experience, making sure you leave with stunning nails
								that speak volumes about your individuality. Our commitment to
								excellence is reflected in our continuous exploration of the
								latest trends and innovations in the nail industry. From classic
								styles to avant-garde designs, we offer a diverse range of
								services tailored to suit your preferences. At our salon, we
								prioritize not just the aesthetics but also your comfort and
								relaxation. Our inviting ambiance and personalized approach aim
								to make every visit a delightful escape. Thank you for choosing
								us as your beauty destination—we can't wait to transform your
								nails into works of art!
							</Card.Text>

							<Card.Text className='shadow-lg p-3'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti, ipsam, aliquam quibusdam fugit consequuntur minus
								asperiores et pariatur quidem beatae, facilis nesciunt obcaecati
								in maxime quas ducimus aperiam debitis rerum! Commodi minima
								sapiente hic ea nulla sint culpa voluptas! Aspernatur, molestias
								recusandae aut fuga quidem voluptatum illo repellendus
								voluptatem consequuntur delectus officiis, placeat quam nisi
								vitae quae autem quos vero sed blanditiis dicta. Aliquid, maxime
								ut nulla sit tempora molestias sint fugiat consequatur esse
								facere blanditiis libero accusamus ad velit quis dignissimos
								nobis distinctio, cum, quam porro facilis quod? Dolorum
								laboriosam, optio quisquam libero iusto ducimus repudiandae
								aliquid mollitia animi?
							</Card.Text>
							<Card.Text className='shadow-lg p-3'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem recusandae maiores repudiandae unde ea, doloremque
								maxime veniam, non consectetur pariatur quibusdam dolorum
								facilis exercitationem itaque libero nihil consequuntur. Iure
								nam possimus ab, ullam error eius delectus dolores architecto,
								veritatis nulla provident placeat explicabo assumenda saepe
								quidem, harum voluptatem libero laborum? Voluptatum consequuntur
								debitis amet, sed voluptatem, atque temporibus nisi blanditiis
								aperiam est saepe illo dolore? Tempora cupiditate suscipit
								assumenda qui eius. Eveniet odit quis ad beatae doloremque
								aliquam. Voluptates repellat cupiditate eos modi. Nemo tempore
								quia eum fugit tenetur animi accusantium beatae facere ratione
								enim ab eius, ducimus est rerum!
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default About
