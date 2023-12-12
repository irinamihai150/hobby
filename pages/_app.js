// import "@/styles/globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css"
import "react-image-gallery/styles/css/image-gallery.css"

export default function App({ Component, pageProps }) {
	return (
		<div
			style={
				{
					// background:
					// 	"linear-gradient(111.4deg, rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58%)",
					// minHeight: "100vh",
					// overflow: "hidden",
				}
			}
		>
			<Component {...pageProps} />
		</div>
	)
}
