// pages/services.js
import Head from "next/head"
import Services from "../components/Services"
import Layout from "../components/Layout"

export default function ServicesPage() {
	return (
		<>
			<Head>
				<title>Services</title>
			</Head>
			<Layout>
				<Services />
			</Layout>
		</>
	)
}
