import React from "react"
import { fakeNailServiceData } from "../data/fakeNailServiceData"
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap"

const Services = () => {
	return (
		<Container>
			{fakeNailServiceData.map((category) => (
				<Row key={category.category} className='mt-4'>
					<h2>{category.category}</h2>
					<ListGroup>
						{category.items.map((service) => (
							<ListGroup.Item key={service.id}>
								<Card>
									<Card.Body>
										<Card.Title>{service.serviceName}</Card.Title>
										<Card.Text>{service.description}</Card.Text>
										<Card.Text>Price: {service.price}</Card.Text>
									</Card.Body>
								</Card>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Row>
			))}
		</Container>
	)
}

export default Services
