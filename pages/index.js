import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { Testimonials } from "@/components/Testimonials"
import Gallery from "@/components/Gallery"
import Services from "@/components/Services"
import About from "@/components/About"

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>My Nail Art Website</title>
			</Head>
			<main>
				<About />
				<Gallery />
				<Services />
				<Testimonials />
			</main>
		</div>
	)
}
