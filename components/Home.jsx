import React from "react"
import Testimonials from "./Testimonials"
import { Container, Card, Image } from "react-bootstrap"

const Home = () => {
	const mainImagePath = "/images/mainimage.jpg"
	return (
		<Container>
			<Card>
				<Image src={mainImagePath} fluid></Image>
				<Card.Body>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
					perferendis maiores nulla praesentium. Incidunt, et ducimus. Itaque
					magni nulla officia sunt pariatur exercitationem, sed, quam id facere
					numquam doloribus odit adipisci hic, reprehenderit cum fugiat
					necessitatibus veniam obcaecati voluptatum! Rem ullam voluptate vero
					neque cumque suscipit molestias at aspernatur pariatur?
				</Card.Body>
			</Card>
			<Testimonials />
		</Container>
	)
}

export default Home
