import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"
import NailFaqs from "./NailFaqs"

const About = () => {
	return (
		<Container className='testimonial-container'>
			<Row className='d-flex justify-content-center align-items-center'>
				<Row className='mb-5'>
					<Col md={8}>
						<Card.Img
							className='rounded-circle'
							variant='top'
							src='/images/manicure.jpg'
							alt='Card image'
							style={{ width: "80%", height: "auto" }}
						/>
					</Col>
					<Col className='mt-5'>
						<h3 className='text-center'> Get to know me</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nam
							debitis, non alias voluptate odio dolor perspiciatis dolore,
							maxime deleniti, natus quis vitae reiciendis sequi! Reprehenderit
							qui ad ea autem.
						</p>
					</Col>
				</Row>

				<Col>
					<Row className='mb-4'>
						<Card.Title className='fs-1 text-center mb-3'>Watch me</Card.Title>
						<iframe
							width='560'
							height='315'
							src='https://www.youtube.com/embed/WBqnnX4hcP8?si=Qg8oR6o6l9BZSxiU'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						></iframe>
					</Row>
					<Card border='0'>
						<Card.Body>
							<Card.Title className='text-center fs-1'>My Story</Card.Title>
							<Card.Text className='p-3 card-about'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
								distinctio excepturi non, saepe deserunt ipsa sed exercitationem
								repellendus cum aliquid at. Quo laborum, earum accusamus fugiat
								consequatur perferendis iusto corrupti praesentium ipsam
								pariatur, magnam aspernatur quia a suscipit molestiae ullam
								culpa totam sunt. Sint ad quos quia culpa soluta, aliquam
								quisquam id explicabo quasi repellat architecto tempore error
								voluptates quidem laborum omnis officia fugiat sit facilis
								accusamus eveniet. Maiores eius facilis dolorem, dicta autem
								molestiae voluptas ipsa, delectus accusantium ex blanditiis
								temporibus reprehenderit reiciendis pariatur unde ipsum beatae
								ut distinctio sit alias nulla esse! Iusto dolore obcaecati
								commodi iste voluptates!
							</Card.Text>
							<Card.Title className='fs-1 text-center'>My Mission</Card.Title>

							<Card.Text className='p-3 card-about'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti, ipsam, aliquam quibusdam fugit consequuntur minus
								asperiores et pariatur quidem beatae, facilis nesciunt obcaecati
								in maxime quas ducimus aperiam debitis rerum! Commodi minima
								sapiente hic ea nulla sint culpa voluptas! Aspernatur, molestias
								recusandae aut fuga quidem voluptatum illo repellendus
								voluptatem consequuntur delectus officiis, placeat quam nisi
								vitae quae autem quos vero sed blanditiis dicta. Aliquid, maxime
								ut nulla sit tempora molestias sint fugiat consequatur esse
								facere blanditiis libero accusamus ad velit quis dignissimos
								nobis distinctio, cum, quam porro facilis quod? Dolorum
								laboriosam, optio quisquam libero iusto ducimus repudiandae
								aliquid mollitia animi?
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Col>
				<NailFaqs />
			</Col>
		</Container>
	)
}

export default About
