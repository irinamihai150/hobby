import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"

const About = () => {
	return (
		<Container className='mt-4'>
			<Row>
				<Col>
					<Card border='0'>
						{/* <Card.Img
							variant='top'
							src='/images/mainimage.jpg'
							alt='Card image'
						/> */}
						<Card.Body>
							<Card.Title>My Story</Card.Title>
							<Card.Text>
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

							<Card.Text>
								Hi, I'm Emily, the founder and lead nail artist at our salon.
								With over a decade of experience in the industry, I am
								passionate about creating beautiful and unique nail designs. My
								goal is to provide a relaxing and enjoyable experience for each
								client, ensuring they leave with nails that reflect their style
								and personality. I stay updated on the latest trends and
								techniques to offer a wide range of services. Thank you for
								choosing our salon—we look forward to enhancing your natural
								beauty!
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default About
