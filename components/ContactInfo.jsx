import React from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"

const ContactInfo = () => {
	return (
		<Container>
			<Row>
				<Col className='text-center'>
					<div className='contact-info'>
						<p className='contact-detail'>
							<strong>jane@gmail.com</strong>
						</p>
						<p className='contact-detail'>
							<strong>Somewhere</strong>
						</p>
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
