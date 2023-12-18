import { sendContactForm } from "@/lib/api"
import React, { useState } from "react"
import { Container, Form, Row, Col, Button } from "react-bootstrap"
import ContactInfo from "./ContactInfo"

const initValues = { name: "", email: "", subject: "", message: "" }
const initState = { values: initValues }

const ContactForm = () => {
	const [state, setState] = useState(initState)
	const [touched, setTouched] = useState({})
	const { values, isLoading } = state

	const onBlur = ({ target }) =>
		setTouched((prev) => ({
			...prev,
			[target.name]: true,
		}))
	const handleChange = ({ target }) => {
		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value,
			},
		}))
	}

	const onSubmit = async () => {
		setState((prev) => ({
			...prev,
			isLoading: true,
		}))
		await sendContactForm(values)
	}

	return (
		<div>
			<Container
				className='testimonial-container'
				style={{ minHeight: "100vh" }}
			>
				<Col md={8} className='mx-auto'>
					<h2 className='text-center mt-2'>
						<strong>Contact Me</strong>
					</h2>
					<Form onSubmit={onSubmit}>
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formName'>
								<Form.Label>
									<strong>Name:</strong>
								</Form.Label>
								<Form.Control
									isInvalid={touched.name && !values.name}
									type='text'
									name='name'
									value={values.name}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
							</Form.Group>
						</Row>
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formEmail'>
								<Form.Label>
									<strong>Email:</strong>
								</Form.Label>
								<Form.Control
									type='email'
									name='email'
									value={values.email}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
							</Form.Group>
						</Row>
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formMessage'>
								<Form.Label>
									<strong>Subject:</strong>
								</Form.Label>
								<Form.Control
									type='text'
									rows={3}
									name='subject'
									value={values.subject}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
							</Form.Group>
						</Row>
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='formMessage'>
								<Form.Label>
									<strong>Message:</strong>
								</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									name='message'
									value={values.message}
									onChange={handleChange}
									onBlur={onBlur}
									required
								/>
							</Form.Group>
						</Row>
						<Button
							variant='outline'
							type='submit'
							disabled={!values.name || !values.email || !values.message}
							onClick={onSubmit}
							// isLoading={isLoading}
						>
							Submit
						</Button>
					</Form>
				</Col>

				<Col>
					<ContactInfo />
				</Col>
			</Container>
		</div>
	)
}

export default ContactForm
