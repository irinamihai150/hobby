import Head from "next/head"
import Gallery from "../components/Gallery"
import Layout from "../components/Layout"

export default function GalleryPage() {
	return (
		<>
			<Head>
				<title>Gallery</title>
			</Head>
			<Layout>
				<Gallery />
			</Layout>
		</>
	)
}
