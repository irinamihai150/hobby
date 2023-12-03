import MyNavBar from "./MyNavBar.jsx"
import React from "react"

const Layout = ({ children }) => {
	let currentYear = new Date().getFullYear()
	return (
		<div>
			<header>
				<MyNavBar />
			</header>
			<main>{children}</main>
			<footer style={{ backgroundColor: "lightgray", padding: "10px" }}>
				&copy; {currentYear} Nail Art
			</footer>
		</div>
	)
}

export default Layout
