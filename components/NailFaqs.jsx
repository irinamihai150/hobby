import React from "react"
import { Container, Card } from "react-bootstrap"
import nailFaqs from "@/data/nailFaqs"

const NailFaqs = () => {
	return (
		<Container>
			<h1>Frequently asked questions</h1>
			{nailFaqs.map((faq, index) => (
				<Card key={index} className='faq-item'>
					<div className='faq-question'>
						<h3>{faq.question}</h3>
					</div>
					<div className='faq-answer'>
						<p>{faq.answer}</p>
					</div>
				</Card>
			))}
		</Container>
	)}

export default NailFaqs
