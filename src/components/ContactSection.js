import React from "react";
import Button from "./Button";
import "./ContactSection.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import ReCAPTCHA from "react-google-recaptcha";
toast.configure();

function ContactSection() {
	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				"service_oug9vrd",
				"template_sh7pg2n",
				e.target,
				"user_KqkXfrw38kAPok508Ps4u"
			)
			.then(
				(result) => {
					console.log("Printing Toast");
					toast.success("Message sent successfully!", {
						position: "bottom-center",
						theme: "dark",
					});
				},
				(error) => {
					toast.error("Message was not sent :(", {
						position: "bottom-center",
						theme: "dark",
					});
				}
			);
		e.target.reset();
	};

	const onChange = (value) => {
		console.log("Captcha value:", value);
	};

	return (
		<div className="contact-container" id="contact">
			<div className="contact-title">
				<i className="material-icons-outlined">alternate_email</i>
				<h1>Contact</h1>
			</div>
			<div className="contact-content">
				<div className="contact-text">
					This what I am listening to now!
				</div>
				<div className="contact-form">
					<Fade>
						<form className="w-full" onSubmit={sendEmail}>
							<div className="mb-5">
								<label className="block mb-2 text-base font-medium text-theme-primary-font-color">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="text-base rounded-sm block w-72 p-2.5 border bg-theme-bg-color border-theme-dark-pink placeholder-gray-400 text-theme-primary-font-color"
									placeholder="Name"
									required
								/>
							</div>
							<div className="mb-5">
								<label className="block mb-2 text-base font-medium text-theme-primary-font-color">
									Email Address
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="text-base rounded-sm block w-72 p-2.5 border bg-theme-bg-color border-theme-dark-pink placeholder-gray-400 text-theme-primary-font-color"
									placeholder="name@example.com"
									required
								/>
							</div>
							<div className="mb-5">
								<label className="block mb-2 text-base font-medium text-theme-primary-font-color">
									Message
								</label>
								<textarea
									type="text"
									id="message"
									name="message"
									className="text-base rounded-sm block h-28 w-full md:w-3/5 lg:w-2/5 p-2.5 border bg-theme-bg-color border-theme-dark-pink placeholder-gray-400 text-theme-primary-font-color"
									placeholder="Your Message"
									required
								/>
							</div>
							<ReCAPTCHA
								sitekey={
									process.env.REACT_APP_RECAPTCHA_SITE_KEY
								}
								size={"normal"}
								theme={"dark"}
								onChange={onChange}
							/>
							<button type="submit" className="mt-5">
								<Button props={{ text: "Send Message" }} />
							</button>
						</form>
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default ContactSection;
