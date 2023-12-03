import Head from "next/head"
import Testimonials from "../components/Testimonials"
import Layout from "../components/Layout.jsx"

export default function TestimonialsPage() {
	return (
		<>
			<Head>
				<title>Testimonials</title>
			</Head>
			<Layout>
				<Testimonials />
			</Layout>
		</>
	)
}
