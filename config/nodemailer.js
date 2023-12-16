import nodemailer from "nodemailer"
import smtpTransport from "nodemailer-smtp-transport"

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS

export const transporter = nodemailer.createTransport(
	smtpTransport({
		service: "gmail",
		auth: {
			user: email,
			pass: pass,
		},
	})
)

export const mailOptions = {
	from: email,
	to: email,
}
