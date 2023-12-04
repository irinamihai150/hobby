import Head from "next/head"
import Layout from "../components/Layout"
import Home from "@/components/Home"

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Layout>
				<Home />
			</Layout>
		</>
	)
}
