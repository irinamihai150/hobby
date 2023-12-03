import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { fakeTestimonials } from "../data/fakeTestimonials"

const Testimonials = () => {
	return (
		<Container>
			<h2 className='mt-4'>Testimonials</h2>
			<Row className='testimonial-container'>
				{fakeTestimonials.map((testimonial) => (
					<Col key={testimonial.id} lg={4} className='mb-4'>
						<Card>
							<Card.Body>
								<Card.Text>{testimonial.testimonial}</Card.Text>
								<Card.Text className='text-muted'>
									- {testimonial.clientName}
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	)
}

export { Testimonials }
