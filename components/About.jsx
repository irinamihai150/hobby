import React from "react"
import { Container, Card, Row, Col } from "react-bootstrap"

const About = () => {
	return (
		<Container className='mt-4 mb-4 container-about'>
			<Row className='d-flex justify-content-center align-items-center'>
				<Row className='d-flex justify-content-center align-items-center position-relative'>
					<Col className='text-center'>
						<Card.Img
							className='rounded'
							variant='top'
							src='/images/mainimage.jpg'
							alt='Card image'
							style={{ width: "100%", height: "auto" }}
						/>
					</Col>
					<Col className='position-absolute text-center w-100'>
						{/* <h2 className='text-light'>Get to know Me</h2> */}
						<h2 className='about-header'>
							Friendly Nail Service at an Affordable Price
						</h2>
					</Col>
				</Row>

				<Col>
					<Card border='0'>
						<Card.Body>
							<Card.Title style={{ fontSize: "2em", textAlign: "center" }}>
								My Story
							</Card.Title>
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
							<Card.Title style={{ fontSize: "2em", textAlign: "center" }}>
								My Mission
							</Card.Title>

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
							<Card.Title style={{ fontSize: "2em", textAlign: "center" }}>
								My Values
							</Card.Title>
							<Card.Text className='p-3 card-about'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptatem recusandae maiores repudiandae unde ea, doloremque
								maxime veniam, non consectetur pariatur quibusdam dolorum
								facilis exercitationem itaque libero nihil consequuntur. Iure
								nam possimus ab, ullam error eius delectus dolores architecto,
								veritatis nulla provident placeat explicabo assumenda saepe
								quidem, harum voluptatem libero laborum? Voluptatum consequuntur
								debitis amet, sed voluptatem, atque temporibus nisi blanditiis
								aperiam est saepe illo dolore? Tempora cupiditate suscipit
								assumenda qui eius. Eveniet odit quis ad beatae doloremque
								aliquam. Voluptates repellat cupiditate eos modi. Nemo tempore
								quia eum fugit tenetur animi accusantium beatae facere ratione
								enim ab eius, ducimus est rerum!
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Card.Title style={{ fontSize: "2em", textAlign: "center" }}>
					Watch me
				</Card.Title>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/WBqnnX4hcP8?si=Qg8oR6o6l9BZSxiU'
					title='YouTube video player'
					frameborder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					// allowfullscreen
				></iframe>
			</Row>
		</Container>
	)
}

export default About
