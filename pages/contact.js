import React from "react"
import ContactForm from "../components/ContactForm"
import { Container } from "react-bootstrap"

const ContactPage = () => {
	return (
		<Container>
			<h1 className='text-center mt-5 mb-5'>
				<strong>Contact Me</strong>
			</h1>
			<ContactForm />
		</Container>
	)
}

export default ContactPage
