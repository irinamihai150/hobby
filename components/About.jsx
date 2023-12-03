import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import Layout from "@/components/Layout"

const About = () => {
	return (
		<Container className='mt-4'>
			<Row>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>About Us</Card.Title>
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
