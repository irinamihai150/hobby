import React from "react"
import { Container, Card, Accordion } from "react-bootstrap"
import nailFaqs from "@/data/nailFaqs"

const NailFaqs = () => {
	return (
		<Container border='0' className='mb-4'>
			<h2 className='mb-4'>Frequently asked questions</h2>
			<Accordion defaultActiveKey='0' flush>
				{nailFaqs.map((faq, index) => (
					<Accordion.Item key={index}>
						<Accordion.Header>
							<h3>{faq.question}</h3>
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
