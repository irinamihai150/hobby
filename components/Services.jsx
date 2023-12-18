import React from "react"
import { fakeNailServiceData } from "../data/fakeNailServiceData"
import { Container, Button, Row, Col, Card, Table } from "react-bootstrap"
// import ExpandableText from "./ExpandableText"
import Testimonials from "./Testimonials"

const Services = () => {
	const maxLength = 150

	return (
		<div>
			<Container
				style={{
					backgroundImage: `url('/images/polish.jpg')`,
					backgroundColor: "rgba(255, 255, 255, 0.3)",
				}}
			>
				<Row style={{ backgroundColor: "orange" }}>
					<Col className='text-white text-center p-5'>
						<h2 className='m-4 text-center fw-bold'>My services price list</h2>
						<div className='text-center'>
							<a
								href='https://www.instagram.com/'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Button variant='dark hover-orange'>Book Here</Button>
							</a>
						</div>
					</Col>
				</Row>

				<h3 className='about-header p-3 m-4'>
					I ask you to give me 24 hours notice if you need to cancel your
					appointment.
				</h3>
				{fakeNailServiceData.map((category) => (
					<React.Fragment key={category.category}>
						<h2 className='text-center text-white'>{category.category}</h2>
						<Table striped responsive>
							<thead>
								<tr>
									<th>Service</th>
									<th>Description</th>
									<th>Price</th>
									{/* <th>Duration</th> */}
								</tr>
							</thead>
							<tbody>
								{category.items.map((service) => (
									<tr key={service.id}>
										<td>{service.serviceName}</td>
										<td>{service.description}</td>
										<td>{service.price}</td>
										{/* <td>{service.duration || "-"}</td> */}
									</tr>
								))}
							</tbody>
						</Table>
					</React.Fragment>
				))}
				<Row>
					<Testimonials />
				</Row>
			</Container>
		</div>
	)
}

export default Services
