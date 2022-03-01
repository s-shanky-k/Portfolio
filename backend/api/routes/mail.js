const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { body, validationResult } = require("express-validator");

const dotenv = require("dotenv");
const request = require("request");
dotenv.config();

const secretKey = process.env.SECRET_KEY;

function verifyCaptcha(req, callback) {
	const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.socket.remoteAddress}`;
	request(verifyURL, (err, res, body) => {
		body = JSON.parse(body);
		if (body.success !== undefined && !body.success) {
			callback(false);
		} else {
			callback(true);
		}
	});
}

router.post(
	"/",
	body("name").notEmpty().withMessage("Name cannot be empty"),
	body("from").isEmail().withMessage("Invalid Email"),
	body("message").notEmpty().withMessage("Message cannot be empty"),
	(req, res, next) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.json({ status: false, message: errors.errors[0].msg });
		}

		if (
			req.body.captcha === undefined ||
			req.body.captcha === "" ||
			req.body.captcha === null
		) {
			return res.json({ status: false, message: "Captcha not selected" });
		}

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
		verifyCaptcha(req, function (verify) {
			if (verify) {
				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {
						res.json({
							status: false,
							message: "Error in sending message",
						});
						console.log(error);
					} else {
						res.json({
							status: true,
							message: "Message sent successfully",
						});
					}
				});
			} else {
				res.json({
					status: false,
					message: "Failed Captcha Verification",
				});
			}
		});
	}
);

module.exports = router;
