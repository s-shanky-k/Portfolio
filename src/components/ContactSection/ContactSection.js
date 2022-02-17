import React, { useState } from "react";
import Button from "../Button/Button";
import "./ContactSection.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Fade from "react-reveal/Fade";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
toast.configure();

function ContactSection() {
	const [email, setEmail] = useState({
		from: "",
		name: "",
		message: "",
		captcha: "",
	});

	// const { from, name, message, captcha } = email;

	const onInputChange = (e) => {
		setEmail({ ...email, [e.target.name]: e.target.value });
	};

	const sendEmail = async (e) => {
		const toastID = toast.loading("Sending Message ...", {
			position: "bottom-center",
			theme: "dark",
		});
		e.preventDefault();
		await axios
			.post("http://localhost:5000/mail/", email)
			.then((response) => {
				if (response.data.status) {
					toast.success(response.data.message, {
						position: "bottom-center",
						theme: "dark",
					});
				} else {
					toast.error(response.data.message, {
						position: "bottom-center",
						theme: "dark",
					});
				}
			})
			.catch((error) => {
				toast.dismiss(toastID);
				toast.error("Message was not sent :(", {
					position: "bottom-center",
					theme: "dark",
				});
			});
		toast.dismiss(toastID);
		e.target.reset();
	};

	const onChange = (value) => {
		setEmail({ ...email, captcha: value });
	};

	return (
		<div className="contact-container" id="contact">
			<div className="contact-title">
				<i className="material-icons-outlined">alternate_email</i>
				<h1>Contact</h1>
			</div>
			<div className="contact-content">
				{/* <div className="contact-text">
					This what I am listening to now!
				</div> */}
				<div className="contact-form">
					<Fade>
						<form
							className="w-full lg:w-2/3 xl:w-1/2 py-4 flex flex-col"
							onSubmit={sendEmail}
						>
							<div className="mb-5 w-3/5 flex flex-col">
								<label className="mb-2 text-base font-medium text-theme-primary-font-color">
									Full Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="text-lg font-medium rounded-sm w-full p-2.5 border bg-theme-bg-color border-theme-dark-pink placeholder-gray-400 text-theme-primary-font-color"
									placeholder="Name"
									required
									onChange={onInputChange}
								/>
							</div>
							<div className="mb-5 w-3/5 flex flex-col">
								<label className="mb-2 text-base font-medium text-theme-primary-font-color">
									Email Address
								</label>
								<input
									type="email"
									id="from"
									name="from"
									className="text-lg font-medium rounded-sm w-full p-2.5 border bg-theme-bg-color border-theme-dark-pink placeholder-gray-400 text-theme-primary-font-color"
									placeholder="name@example.com"
									required
									onChange={onInputChange}
								/>
							</div>
							<div className="mb-5 flex flex-col">
								<label className="mb-2 text-base font-medium text-theme-primary-font-color">
									Message
								</label>
								<textarea
									type="text"
									id="message"
									name="message"
									className="text-lg font-medium rounded-sm h-36 w-full p-2.5 border bg-theme-bg-color border-theme-dark-pink placeholder-gray-400 text-theme-primary-font-color"
									placeholder="Your Message"
									required
									onChange={onInputChange}
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
