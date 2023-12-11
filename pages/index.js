import Head from "next/head"
import HomeContent from "../components/Home"
import Layout from "@/components/Layout"

export default function Home() {
	return (
		<>
			<Head>
				<title>My Nail Art Website</title>
			</Head>
			<main>
				<Layout>
					<HomeContent />
				</Layout>
			</main>
		</>
	)
}
