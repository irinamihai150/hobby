import Head from "next/head"
// import styles from "@/styles/Home.module.css"
import Gallery from "../components/Gallery"
import Services from "../components/Services"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Layout from "@/components/Layout"

export default function Home() {
	return (
		<>
			<Head>
				<title>My Nail Art Website</title>
			</Head>
			<main>
				<Layout>
					<About />
					{/* <Gallery />
					<Services />
					<Testimonials /> */}
				</Layout>
			</main>
		</>
	)
}
