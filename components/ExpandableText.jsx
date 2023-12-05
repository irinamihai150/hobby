import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"

const ExpandableText = ({ text, maxlength }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const truncatedText = isExpanded ? text : text.slice(0, maxlength)

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded)
	}
	// console.log("Render ExpandableText")
	return (
		<div>
			<Card.Text>
				{text.length > maxlength ? (
					<>
						{isExpanded ? text : `${truncatedText}...`}
						<Button variant='link' onClick={toggleExpansion}>
							{isExpanded ? "View Less" : "View More"}
						</Button>
					</>
				) : (
					text
				)}
			</Card.Text>
		</div>
	)
}

export default ExpandableText
