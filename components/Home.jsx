import React from "react"
import Testimonials from "./Testimonials"
import { Container, Card, Image } from "react-bootstrap"
import NailFaqs from "./NailFaqs"

const Home = () => {
	const mainImagePath = "/images/mainimage.jpg"

	return (
		<Container className='p-4'>
			<Card className='border-0'>
				<p className='mb-4 p-3 animatedText'>
					I am dedicated to crafting personalized nail designs that reflect your
					personality and enhance your natural beauty.
				</p>

				<Card.Body className='p-4 mb-4 animatedLargeText'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, nisi
					repudiandae! Temporibus nisi nemo quis facilis dolor repellat a
					placeat totam, eos ab libero quas, quod tempora distinctio adipisci
					quisquam eius? Atque, voluptas? Corporis possimus dolore consectetur
					deleniti eius! Placeat repudiandae repellat perferendis! Unde nihil,
					iure officia obcaecati delectus doloremque. Doloribus, dolore.
					Suscipit distinctio rem nostrum, nisi dolor ex velit, rerum numquam
					minus ducimus quaerat praesentium, ipsum aliquid saepe eius!
					Reiciendis odio neque similique magni dolores laudantium corporis cum
					eius nobis natus ad, perferendis non suscipit itaque sunt veritatis
					doloremque quae nihil praesentium. Fugit excepturi beatae nostrum
					dolore rerum nihil magnam dicta inventore! Nam tempora dolor rem
					necessitatibus quod maxime, ipsam accusantium consectetur.
				</Card.Body>
			</Card>
			<NailFaqs />
			<Testimonials />
		</Container>
	)
}

export default Home
