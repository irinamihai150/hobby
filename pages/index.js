import Head from "next/head"
// import styles from "@/styles/Home.module.css"
import About from "../components/About"
import Layout from "@/components/Layout"

export default function Home() {
	return (
		<>
			<Head>
				<title>My Nail Art Website</title>
			</Head>
			<main>
				<Layout>
					<Home />
				</Layout>
			</main>
		</>
	)
}
