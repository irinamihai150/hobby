import React, { useState } from "react"
import { Card, Button } from "react-bootstrap"

const ExpandableText = ({ text, maxLength, onExpandToggle }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const truncatedText = isExpanded ? text : text.slice(0, maxLength)

	const toggleExpansion = () => {
		setIsExpanded(!isExpanded)
		onExpandToggle && onExpandToggle(!isExpanded)
	}

	return (
		<div>
			<Card.Text>
				{text.length > maxLength ? (
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
