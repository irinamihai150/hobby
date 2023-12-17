// import React from "react"
// import { Container, Card, Accordion } from "react-bootstrap"
// import nailFaqs from "@/data/nailFaqs"

// const NailFaqs = () => {
// 	return (
// 		<Container
// 			className='mb-4'
// 			style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
// 		>
// 			<h2 className='mt-4 mb-4 text-center animated-text'>
// 				Frequently asked questions
// 			</h2>
// 			<Accordion flush style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
// 				{nailFaqs.map((faq, index) => (
// 					<Accordion.Item key={index} eventKey={index.toString()}>
// 						<Accordion.Header>
// 							<h3>{faq.question}</h3>
// 						</Accordion.Header>
// 						<Accordion.Body>
// 							<Card className='faq-item'>
// 								<p className='p-3'>{faq.answer}</p>
// 							</Card>
// 						</Accordion.Body>
// 					</Accordion.Item>
// 				))}
// 			</Accordion>
// 		</Container>
// 	)
// }

// export default NailFaqs

import React, { useState } from "react"
import { Container, Card } from "react-bootstrap"
import nailFaqs from "@/data/nailFaqs"

const NailFaqs = () => {
	const [activeIndex, setActiveIndex] = useState(null)

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index)
	}

	return (
		<Container
			className='mb-4'
			style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
		>
			<h2 className='mt-4 mb-4 text-center animated-text'>
				Frequently asked questions
			</h2>
			<div>
				{nailFaqs.map((faq, index) => (
					<Card
						key={index}
						className='faq-item'
						style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
					>
						<Card.Body>
							<h3
								onClick={() => handleToggle(index)}
								style={{ cursor: "pointer" }}
							>
								{faq.question}
							</h3>
							{activeIndex === index && <p className='p-3'>{faq.answer}</p>}
						</Card.Body>
					</Card>
				))}
			</div>
		</Container>
	)
}

export default NailFaqs
