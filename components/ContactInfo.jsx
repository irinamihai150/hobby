import React from "react"
import { FaEnvelope, FaMobileAlt } from "react-icons/fa"
import { Container, Row, Col } from "react-bootstrap"

const ContactInfo = () => {
	return (
		<Container>
			<Row>
				<Col className='text-center mt-5'>
					<div className='contact-info text-light'>
						{/* Email Section */}
						<div className='contact-section'>
							<h4 className='contact-heading hover-orange'>Gmail:</h4>
							<address className='contact-detail hover-orange'>
								<FaEnvelope />
								<a href='mailto:jane@gmail.com' className='email-link p-2'>
									jane@gmail.com
								</a>
							</address>
						</div>

						{/* Phone Section */}
						<div className='contact-section'>
							<h4 className='contact-heading hover-orange'>Phone:</h4>
							<p className='p-2'>
								<FaMobileAlt />
								<a href='tel:0044724348554' className='p-2 hover-orange'>
									0044724348554
								</a>
							</p>
						</div>

						{/* Address Section */}
						<div className='contact-section'>
							<h4 className='contact-heading hover-orange'>Address:</h4>
							<address className='contact-detail hover-orange'>
								<strong>Birmingham</strong>
							</address>
						</div>

						{/* Opening Times Section */}
						<div className='contact-section'>
							<h4 className='contact-heading fw-bold hover-orange underline-orange'>
								Opening Times
							</h4>
							<p className='contact-detail hover-orange'>
								<strong>
									Mon-Fri: 09:00 AM - 05:00 PM
									<br />
									Sat: 09:00 AM - 03:00 PM
								</strong>
							</p>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default ContactInfo
