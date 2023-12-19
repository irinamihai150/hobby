import React from "react"
import { Container, Card } from "react-bootstrap"
import Slider from "react-slick"
import { fakeTestimonials } from "../data/fakeTestimonials"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaStar } from "react-icons/fa"

const Testimonials = () => {
	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<Container>
			<h2 className='mt-4 mb-4 text-center animated-text text-white'>
				Testimonials <FaStar style={{ color: "orange" }} />
				<FaStar style={{ color: "orange" }} />
				<FaStar style={{ color: "orange" }} />
				<FaStar style={{ color: "orange" }} />
				<FaStar style={{ color: "orange" }} />
			</h2>
			<Slider
				{...settings}
				style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
				className='m-4'
			>
				{fakeTestimonials.map((testimonial) => (
					<div key={testimonial.id}>
						<Card
							className='text-center'
							style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
						>
							<Card.Body>
								<Card.Text>{testimonial.testimonial}</Card.Text>
								<Card.Text className='text-muted'>
									- {testimonial.clientName}
								</Card.Text>
							</Card.Body>
						</Card>
					</div>
				))}
			</Slider>
		</Container>
	)
}

export default Testimonials
