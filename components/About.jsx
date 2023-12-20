// import React from "react"
// import { Container, Card, Row, Col } from "react-bootstrap"
// import NailFaqs from "./NailFaqs"

// const About = () => {
// 	return (
// 		<Container fluid className='testimonial-container m-'>
// 			{/* <Row className=''> */}
// 			<div className='mb-5'>
// 				{/* <Col md={8} className='max-width-col'>
// 						<Card.Img
// 							className='rounded-circle'
// 							// variant='top'
// 							src='/images/manicure.jpg'
// 							alt='Card image'
// 							style={{ width: "70%", height: "auto" }}
// 						/>
// 					</Col> */}
// 				<Col className='mt-5 text-center'>
// 					<h2 className='text-center'> Get to know me</h2>
// 					<p>
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
// 						debitis, non alias voluptate odio dolor perspiciatis dolore, maxime
// 						deleniti, natus quis vitae reiciendis sequi! Reprehenderit qui ad ea
// 						autem.
// 					</p>
// 				</Col>
// 			</div>
// 			{/*
// 				<Col> */}
// 			<Col className='mb-4 max-width-col'>
// 				<Card.Title className='fs-1 text-center mb-3'>Watch me</Card.Title>
// 				<iframe
// 					width='560'
// 					height='415'
// 					src='https://www.youtube.com/embed/WBqnnX4hcP8?si=Qg8oR6o6l9BZSxiU'
// 					title='YouTube video player'
// 					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
// 				></iframe>
// 			</Col>
// 			<Card border='0' className='max-width-col'>
// 				<Card.Body>
// 					<Card.Title className='text-center fs-1'>My Story</Card.Title>
// 					<Card.Text className='p-3 card-about'>
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
// 						distinctio excepturi non, saepe deserunt ipsa sed exercitationem
// 						repellendus cum aliquid at. Quo laborum, earum accusamus fugiat
// 						consequatur perferendis iusto corrupti praesentium ipsam pariatur,
// 						magnam aspernatur quia a suscipit molestiae ullam culpa totam sunt.
// 						Sint ad quos quia culpa soluta, aliquam quisquam id explicabo quasi
// 						repellat architecto tempore error voluptates quidem laborum omnis
// 						officia fugiat sit facilis accusamus eveniet. Maiores eius facilis
// 						dolorem, dicta autem molestiae voluptas ipsa, delectus accusantium
// 						ex blanditiis temporibus reprehenderit reiciendis pariatur unde
// 						ipsum beatae ut distinctio sit alias nulla esse! Iusto dolore
// 						obcaecati commodi iste voluptates!
// 					</Card.Text>
// 					<Card.Title className='fs-1 text-center'>My Mission</Card.Title>

// 					<Card.Text className='p-3 card-about'>
// 						Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
// 						ipsam, aliquam quibusdam fugit consequuntur minus asperiores et
// 						pariatur quidem beatae, facilis nesciunt obcaecati in maxime quas
// 						ducimus aperiam debitis rerum! Commodi minima sapiente hic ea nulla
// 						sint culpa voluptas! Aspernatur, molestias recusandae aut fuga
// 						quidem voluptatum illo repellendus voluptatem consequuntur delectus
// 						officiis, placeat quam nisi vitae quae autem quos vero sed
// 						blanditiis dicta. Aliquid, maxime ut nulla sit tempora molestias
// 						sint fugiat consequatur esse facere blanditiis libero accusamus ad
// 						velit quis dignissimos nobis distinctio, cum, quam porro facilis
// 						quod? Dolorum laboriosam, optio quisquam libero iusto ducimus
// 						repudiandae aliquid mollitia animi?
// 					</Card.Text>
// 				</Card.Body>
// 			</Card>
// 			{/* </Col> */}
// 			{/* </Row> */}

// 			<NailFaqs />
// 		</Container>
// 	)
// }

// export default About

import React from "react"
import { Container, Card, Col } from "react-bootstrap"
import NailFaqs from "./NailFaqs"

const About = () => {
	return (
		<Container fluid className='testimonial-container m-'>
			{/* Get to know me section */}
			<Col className='mb-5 text-center'>
				<h2 className='text-center text-light'>Get to know me</h2>
				<Card.Img
					className='rounded-circle mx-auto'
					variant='top'
					src='/images/manicure.jpg'
					alt='Card image'
					style={{ width: "40%", height: "auto", marginBottom: "20px" }}
				/>
				<p style={{ width: "70%", margin: "auto" }}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
					debitis, non alias voluptate odio dolor perspiciatis dolore, maxime
					deleniti, natus quis vitae reiciendis sequi! Reprehenderit qui ad ea
					autem.
				</p>
			</Col>

			{/* Watch me section */}
			<Col className='mb-4 text-center'>
				<h2 className='fs-1 mb-3 text-light'>Watch me</h2>
				<iframe
					width='560'
					height='415'
					src='https://www.youtube.com/embed/WBqnnX4hcP8?si=Qg8oR6o6l9BZSxiU'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				></iframe>
			</Col>

			{/* My Story section */}
			<Card border='0' className='mb-4 max-width-col'>
				<Card.Body>
					<Card.Title className='text-center fs-1'>My Story</Card.Title>
					<Card.Text className='p-3 card-about'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta atque
						facilis id nemo est perspiciatis repellendus illo corporis modi vel
						voluptas voluptatum, molestias animi ratione aperiam nihil sunt
						autem molestiae corrupti odio odit accusamus doloribus. Nobis,
						dolore? Rerum debitis voluptatem iusto atque reprehenderit sapiente
						ipsa harum magni! Cum, eius expedita! Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Architecto quam fugiat dolorem in
						facere quibusdam harum vero veritatis? Eum ab voluptates accusamus
						est excepturi culpa molestiae consectetur veritatis labore ea quae
						molestias tempora aliquid, saepe odit commodi optio veniam magnam
						itaque quidem soluta velit. Quaerat, accusantium autem. Quia, qui
						dolore.
					</Card.Text>
				</Card.Body>
			</Card>

			{/* My Mission section */}
			<Card border='0' className='mb-4 max-width-col'>
				<Card.Body>
					<Card.Title className='text-center fs-1'>My Mission</Card.Title>
					<Card.Text className='p-3 card-about'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor
						non rem nostrum voluptates? Laborum beatae amet corporis eius harum
						repellat magnam possimus quasi quis quam, nemo quidem officia
						facilis rerum sunt ipsam aut sequi veritatis sint. Dolor nesciunt
						aspernatur libero ipsa delectus? Dolorem maiores perferendis magnam
						quis quia qui. Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Porro accusamus unde saepe, assumenda sed cum repellat dolore
						perspiciatis similique facere laudantium odio odit eos reiciendis
						dolorem necessitatibus, et a dolor?
					</Card.Text>
				</Card.Body>
			</Card>

			{/* Nail FAQs section */}
			<Col>
				<NailFaqs />
			</Col>
		</Container>
	)
}

export default About
