import React from "react"
import { Container, Card, Accordion } from "react-bootstrap"
import nailFaqs from "@/data/nailFaqs"
import { FaQuestionCircle } from "react-icons/fa"

const NailFaqs = () => {
	return (
		<Container className='mb-4'>
			<h2 className='mt-4 mb-4 text-center animated-text'>
				Frequently asked questions
			</h2>
			<Accordion flush>
				{nailFaqs.map((faq, index) => (
					<Accordion.Item key={index} eventKey={index.toString()}>
						<Accordion.Header
							style={{
								backgroundColor: "#E2725B",
								color: "#fff",
							}}
						>
							<h3>
								{faq.question} <FaQuestionCircle className='ml-2' />
							</h3>
						</Accordion.Header>
						<Accordion.Body>
							<Card className='faq-item'>
								<p className='p-3'>{faq.answer}</p>
							</Card>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion>
		</Container>
	)
}

export default NailFaqs
