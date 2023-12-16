import React from "react"
import ContactForm from "../components/ContactForm"
import { Container } from "react-bootstrap"
import Layout from "../components/Layout"

const ContactPage = () => {
	return (
		<Container>
			<Layout>
				<h1 className='text-center mt-5 mb-5'>
					<strong>Contact Me</strong>
				</h1>
				<ContactForm />
			</Layout>
		</Container>
	)
}

export default ContactPage
