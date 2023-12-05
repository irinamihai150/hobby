import React from "react"
import Testimonials from "./Testimonials"
import { Container, Card, Image } from "react-bootstrap"
import NailFaqs from "./NailFaqs"

const Home = () => {
	const mainImagePath = "/images/mainimage.jpg"
	return (
		<Container>
			<Card>
				<Image src={mainImagePath} fluid></Image>
				<Card.Body>
					About Me Welcome to [Your Name]'s BIAB Nail Studio, where strength
					meets beauty in the world of nail care. I am more than just a nail
					artist – I am a dedicated professional committed to enhancing the
					natural beauty of your nails with BIAB. My Mission At [Your Name]'s
					BIAB Nail Studio, my mission is to provide exceptional nail services
					that not only beautify but also strengthen your natural nails. I
					believe in the transformative power of BIAB, creating a lasting and
					beautiful foundation for your unique style. My Values Strength and
					Beauty: I specialize in BIAB, a revolutionary technique that combines
					strength and beauty. Your nails deserve to be both durable and
					stunning, and I'm here to deliver just that. Quality: I am committed
					to using high-quality BIAB products and techniques to ensure your
					nails not only look fantastic but also remain healthy and resilient.
					Client Satisfaction: Your satisfaction is my priority. I strive to
					create a welcoming and comfortable environment where you can relax and
					leave with confidence in your BIAB-enhanced nails. Innovation: I stay
					abreast of the latest developments in BIAB techniques, ensuring you
					receive the best and most innovative nail care services available. Who
					I Am Founded in [Year], [Your Name]'s BIAB Nail Studio has been a
					trusted destination for individuals seeking professional and
					specialized BIAB services. As a solo nail artist focused on BIAB, I am
					dedicated to delivering top-notch services tailored to your unique
					style. Whether you're looking for a BIAB overlay, maintenance, or
					exploring the benefits of BIAB for natural nail growth, [Your Name]'s
					BIAB Nail Studio is here to elevate your nail experience. Discover the
					strength and beauty that lies at your fingertips with [Your Name]'s
					BIAB Nail Studio – where each nail tells a story of resilience and
					elegance.
				</Card.Body>
			</Card>
			<NailFaqs />
			<Testimonials />
		</Container>
	)
}

export default Home
