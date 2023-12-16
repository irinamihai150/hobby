import { useState } from "react"
import { Row, Col, Button, Modal } from "react-bootstrap"
import { FaQuestionCircle } from "react-icons/fa"
import ContactForm from "./ContactForm"

const HelpButton = () => {
	const [showContactForm, setShowContactForm] = useState(false)

	const handleHelpClick = () => {
		setShowContactForm(true)
	}

	const handleClose = () => {
		setShowContactForm(false)
	}
	return (
		<Row>
			<Col>
				<Button
					onClick={handleHelpClick}
					className='help-button'
					variant='secondary'
				>
					<FaQuestionCircle size={30} /> Help
				</Button>
				<Modal show={showContactForm} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Contact Form</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ContactForm />
					</Modal.Body>
				</Modal>
			</Col>
		</Row>
	)
}

export default HelpButton
