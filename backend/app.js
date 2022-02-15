const morgan = require("morgan");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const dotenv = require("dotenv");
dotenv.config();

const mailRoutes = require("./api/routes/mail");
// const verifyRoutes = require("./api/routes/verify");

//Handling CORS Errors
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); //Basically allows all domains to access our API
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
	); //Basically we only allow the above mentioned headers in our req
	if (req.method === "OPTIONS") {
		res.header(
			"Access-Control-Allow-Methods",
			"PUT, POST, PATCH, GET, DELETE"
		);
		return res.status(200).json({});
	}
	next();
});

//Routes which should handle requests
app.use("/mail", mailRoutes);
// app.use("/verify", verifyRoutes);

app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
// app.post("/mail", (req, res) => {
// 	var transporter = nodemailer.createTransport({
// 		service: "gmail",
// 		auth: {
// 			email: process.env.MAILER_EMAIL_ID,
// 			password: process.env.MAILER_EMAIL_PWD,
// 		},
// 	});

// 	var mailOptions = {
// 		from: req.body.from,
// 		to: process.env.EMAIL_ID,
// 		subject: "New Message Via Portfolio",
// 		text: req.body.message,
// 		html: `
//             <div style='padding:10px; border-style: ridge>
//             <h2>You have a new message via your portfolio website</h2>
//             <h3>Details</h3>
//             <ul>
//                 <li><b>Email:</b> ${req.body.from}</li>
//                 <li><b>Name:</b> ${req.body.name}</li>
//                 <li><b>Message:</b> ${req.body.message}</li>
//             </ul>
//         `,
// 	};

// 	transporter.sendMail(mailOptions, function (error, info) {
// 		if (error) {
// 			res.json({ status: false, message: "Error in sending mail" });
// 		} else {
// 			res.json({ status: true, message: "Email sent successfully" });
// 		}
// 	});
// });
