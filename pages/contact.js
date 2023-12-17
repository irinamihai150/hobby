import React from "react"
import Head from "next/head"
import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Layout>
				<ContactForm />
			</Layout>
		</>
	)
}

export default ContactPage
