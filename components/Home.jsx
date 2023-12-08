import React from "react"
import Testimonials from "./Testimonials"
import { Container, Card, Image } from "react-bootstrap"
import NailFaqs from "./NailFaqs"

const Home = () => {
	const mainImagePath = "/images/mainimage.jpg"
	// const cardStyle = {
	// 	boxShadow: "0 8px 16px rgba(255, 255, 0, 0.2)",
	// }

	return (
		<Container className='p-4'>
			<Card
				className='border-0'
				// style={cardStyle}
			>
				<h3 className='mb-4 p-3'>
					We believe beauty is personal. Welcome to a space where your unique
					style and individuality are celebrated. I am dedicated to crafting
					personalized nail designs that reflect your personality and enhance
					your natural beauty.
				</h3>
				<Image src={mainImagePath} fluid className='rounded'></Image>
				<Card.Body className='p-4 shadow-lg mb-4'>
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
					necessitatibus quod maxime, ipsam accusantium consectetur. Facere
					accusamus provident vel, veniam quam unde ducimus id. Doloremque, ad!
					Molestias, dolores minima deserunt voluptas quaerat, nisi ratione
					eveniet illum, explicabo rerum fugiat reiciendis error nobis
					consequuntur dolorem vitae accusantium eum veritatis ipsa sunt.
					Voluptatum, ipsum sequi! Reiciendis quam facere ex veniam nesciunt
					excepturi aut odit assumenda non repellendus, aspernatur
					necessitatibus vel in facilis harum nulla quaerat eligendi at numquam
					culpa. Porro cupiditate laborum voluptate perferendis quia quidem
					atque maxime libero quo aspernatur reiciendis dolorem delectus quas
					illo enim, nobis odio, necessitatibus corporis eum? Consequatur, sit.
				</Card.Body>
			</Card>
			<NailFaqs />
			<Testimonials />
		</Container>
	)
}

export default Home
