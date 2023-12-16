import { transporter } from "../../config/nodemailer"

const handler = async (req, res) => {
	if (req.method === "POST") {
		const data = req.body
		// Check if required fields are present
		if (!data.name || !data.email || !data.message) {
			return res.status(400).json({ message: "Bad request" })
		}

		// Define your mail options
		const mailOptions = {
			from: `${process.env.EMAIL}`,
			to: `${process.env.EMAIL}`,
			subject: data.subject || "Default Subject",
			html: "<h1>Test Title</h1><p>Some body text</p>",
		}

		try {
			await transporter.sendMail(mailOptions)
			return res.status(200).json({ success: true })
		} catch (error) {
			return res.status(400).json({ message: error.message })
		}
	}
	return res.status(400).json({
		message: "Bad request",
	})
}

export default handler
