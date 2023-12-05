import React from "react"
import { fakeNailServiceData } from "../data/fakeNailServiceData"
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap"
import ExpandableText from "./ExpandableText"

const Services = () => {
	const maxLength = 20
	return (
		<Container>
			<h3>Cancelation Policy</h3>
			<p>
				We ask you to give us 24 Hours notice if you need to cancel Your
				appointment.
			</p>
			<a
				href='https://www.instagram.com/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Button>Book Here</Button>
			</a>

			{fakeNailServiceData.map((category) => (
				<div key={category.category} className='mt-4'>
					<h2>{category.category}</h2>
					<Row>
						{category.items.map((service, index) => (
							<Col key={service.id} md={6}>
								<ListGroup.Item className='mb-4'>
									<Card>
										<Card.Body>
											<Card.Title>{service.serviceName}</Card.Title>
											{/* <Card.Text>{service.description}</Card.Text> */}
											<ExpandableText
												text={service.description}
												maxLength={maxLength}
											/>
											<Card.Text>Price: {service.price}</Card.Text>
										</Card.Body>
									</Card>
								</ListGroup.Item>
							</Col>
						))}
					</Row>
				</div>
			))}
		</Container>
	)
}

export default Services
