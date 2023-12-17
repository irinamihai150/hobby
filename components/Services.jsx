import React from "react"
import { fakeNailServiceData } from "../data/fakeNailServiceData"
import { Container, ListGroup, Button, Row, Col, Card } from "react-bootstrap"
import ExpandableText from "./ExpandableText"

const Services = () => {
	const maxLength = 150

	return (
		<div>
			<Container>
				{/* <Row className='d-flex justify-content-center align-items-center position-relative'>
					<Col className='text-center'>
						<Card.Img
							className='background-image'
							variant='top'
							src='/images/mainimage.jpg'
							alt='Card image'
							style={{ width: "100%", height: "auto" }}
						/>
					</Col>
					<Col className='position-absolute text-center w-100'>
						<h2 className='mb-4 about-header'>My services price list</h2>

						<div className='text-center'>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button variant='light'>Book Here</Button>
							</a>
						</div>
					</Col>
				</Row> */}
				<h3 className='about-header p-3'>
					I ask you to give me 24 hours notice if you need to cancel your
					appointment.
				</h3>
				{fakeNailServiceData.map((category) => (
					<div key={category.category} className='mt-4'>
						<h2 className='text-center'>{category.category}</h2>
						<ListGroup className='mb-2'>
							{category.items.map((service, index) => (
								<ListGroup.Item
									key={service.id}
									className='border-0 list-group'
								>
									<div style={{ margin: "1em" }}>
										<h5>{service.serviceName}</h5>
										<ExpandableText
											text={service.description}
											maxLength={maxLength}
										/>
										<p>Price: {service.price}</p>
									</div>
								</ListGroup.Item>
							))}
						</ListGroup>
					</div>
				))}
			</Container>
		</div>
	)
}

export default Services
