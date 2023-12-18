import React from "react"
import Head from "next/head"
import ContactComponent from "../components/ContactPage"
import Layout from "../components/Layout"

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>Contact</title>
			</Head>
			<Layout>
				<ContactComponent />
			</Layout>
		</>
	)
}

export default ContactPage
