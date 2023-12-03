import Head from "next/head"
import About from "../components/About"
import Layout from "../components/Layout"

export default function AboutPage() {
	return (
		<>
			<Head>
				<title>About Us</title>
			</Head>
			<Layout>
				<About />
			</Layout>
		</>
	)
}
