import React from "react"
import { FaEnvelope, FaMobileAlt } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap"

const ContactInfo = () => {
	return (
		<Container>
			<Row>
				<Col className='text-center'>
					<div className='contact-info'>
						<address className='contact-detail'>
							<FaEnvelope />
							<a href='mailto:jane@gmail.com' className='email-link p-2'>
								jane@gmail.com
							</a>
						</address>
						<p className='p-2'>
							<FaMobileAlt />
							<a href='tel:0044724348554' className='p-2'>
								0044724348554
							</a>
						</p>
						<address className='contact-detail'>
							<strong>Somewhere</strong>
						</address>
						<p className='contact-detail'>
							<strong>Monday-Saturday: 09:00 AM - 06:00 PM</strong>
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ContactInfo
