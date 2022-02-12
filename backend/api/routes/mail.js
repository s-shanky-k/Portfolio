const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const dotenv = require("dotenv");
dotenv.config();

router.post("/", (req, res, next) => {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MAILER_EMAIL_ID,
			pass: process.env.MAILER_EMAIL_PWD,
		},
	});

	const mailOptions = {
		from: req.body.from,
		to: process.env.EMAIL_ID,
		subject: `Portfolio Message from ${req.body.name}`,
		text: req.body.message,
		html: `<div style='padding:10px; border-style: ridge'>
            <h2>You have a new message via your portfolio website</h2>
            <h3>Details</h3>
            <ul>
                <li><b>Email:</b> ${req.body.from}</li>
                <li><b>Name:</b> ${req.body.name}</li>
                <li><b>Message:</b> ${req.body.message}</li>
            </ul>
            </div>
        `,
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			res.json({ status: false, message: "Error in sending mail" });
			console.log(error);
		} else {
			res.json({ status: true, message: "Email sent successfully" });
		}
	});
});

module.exports = router;
