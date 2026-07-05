import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, CircleCheckBig, CircleX } from "lucide-react";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
// Optional: only used if you've set up a separate auto-reply template in EmailJS.
const AUTO_REPLY_TEMPLATE_ID = import.meta.env
	.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const services = [
	"Business Cards",
	"Large Format Printing",
	"Banner Printing",
	"Vehicle Branding",
	"Corporate Branding",
	"Promotional Materials",
	"T-Shirt Printing",
	"Custom Packaging",
	"Other",
];

const SocialIcon = ({ href, label, children }) => (
	<a
		href={href}
		aria-label={label}
		className="social-icon"
		target="_blank"
		rel="noopener noreferrer"
	>
		{children}
	</a>
);

export default function Contact() {
	const formRef = useRef(null);

	// Guards against double-submits (e.g. double-click or double-tap)
	// in addition to the disabled button state.
	const isSubmittingRef = useRef(false);

	const [status, setStatus] = useState("idle"); // idle | loading | success | error

	const [errors, setErrors] = useState({});

	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});

	// Initialize EmailJS once, on mount.
	useEffect(() => {
		if (PUBLIC_KEY) {
			emailjs.init(PUBLIC_KEY);
		} else if (import.meta.env.DEV) {
			// eslint-disable-next-line no-console
			console.error(
				"EmailJS public key is missing. Set VITE_EMAILJS_PUBLIC_KEY in your .env file.",
			);
		}
	}, []);

	const validate = () => {
		const e = {};

		if (!form.name.trim()) e.name = "Name is required";

		if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
			e.email = "Valid email is required";

		if (!form.message.trim()) e.message = "Message is required";

		return e;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));

		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prevent duplicate submissions while a request is already in flight.
		if (isSubmittingRef.current || status === "loading") return;

		const errs = validate();

		if (Object.keys(errs).length) {
			setErrors(errs);
			return;
		}

		if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
			if (import.meta.env.DEV) {
				// eslint-disable-next-line no-console
				console.error(
					"EmailJS is not configured. Check VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env file.",
				);
			}
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
			return;
		}

		isSubmittingRef.current = true;
		setStatus("loading");

		// Template params map directly to the EmailJS template variables:
		// {{from_name}}, {{from_email}}, {{subject}}, {{message}}
		const templateParams = {
			from_name: form.name,
			from_email: form.email,
			subject: form.service || "General Inquiry",
			message: form.message,
		};

		try {
			// Notification to you
			await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
				publicKey: PUBLIC_KEY,
			});

			// Optional auto-reply to the customer. Failure here shouldn't
			// block the success state, since the primary notification
			// already went through.
			if (AUTO_REPLY_TEMPLATE_ID) {
				try {
					await emailjs.send(
						SERVICE_ID,
						AUTO_REPLY_TEMPLATE_ID,
						templateParams,
						{ publicKey: PUBLIC_KEY },
					);
				} catch (autoReplyError) {
					if (import.meta.env.DEV) {
						// eslint-disable-next-line no-console
						console.error("Auto-reply email failed:", autoReplyError);
					}
				}
			}

			setStatus("success");

			// Reset the form only after a successful submission.
			setForm({
				name: "",
				email: "",
				phone: "",
				service: "",
				message: "",
			});

			setErrors({});

			setTimeout(() => setStatus("idle"), 5000);
		} catch (error) {
			// Log useful info in development without exposing sensitive
			// details (like keys/IDs) in production.
			if (import.meta.env.DEV) {
				// eslint-disable-next-line no-console
				console.error("EmailJS send failed:", error);
			}

			setStatus("error");

			setTimeout(() => setStatus("idle"), 5000);
		} finally {
			isSubmittingRef.current = false;
		}
	};

	return (
		<section className="contact" id="contact">
			<div className="container">
				<div className="contact-header">
					<p className="section-label reveal">Get In Touch</p>
					<h2 className="section-title reveal reveal-delay-1">
						Let's Start Your<span> Next Project</span>
					</h2>
				</div>
				<div className="contact-grid">
					<div className="contact-info reveal">
						<p className="contact-intro">
							Ready to take your brand to the next level? Reach out — we'd love
							to hear about your project and discuss how we can help.
						</p>
						<div className="contact-details">
							<div className="contact-item">
								<div className="contact-item-icon">
									<Phone size={22} strokeWidth={2} />
								</div>
								<div>
									<p className="contact-item-label">Phone</p>
									<a href="tel:+2348106258125" className="contact-item-value">
										+234 810 625 8125
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-item-icon">
									<Mail size={22} strokeWidth={2} />
								</div>
								<div>
									<p className="contact-item-label">Email</p>
									<a
										href="mailto:icreateafrica25@gmail.com"
										className="contact-item-value"
									>
										icreateafrica25@gmail.com
									</a>
								</div>
							</div>
							<div className="contact-item">
								<div className="contact-item-icon">
									<MapPin size={22} strokeWidth={2} />
								</div>
								<div>
									<p className="contact-item-label">Address</p>
									<p className="contact-item-value">
										Shop D41, Murg Plaza, Opposite UTC Plaza, Area10 Garki, FCT
										Abuja, Nigeria
									</p>
								</div>
							</div>
						</div>
						<div className="contact-socials">
							<p className="socials-label">Follow Us</p>
							<div className="socials-row">
								<SocialIcon href="#" label="Facebook">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
									</svg>
								</SocialIcon>
								<SocialIcon href="#" label="Instagram">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<rect x="2" y="2" width="20" height="20" rx="5" />
										<circle cx="12" cy="12" r="4" />
										<circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
									</svg>
								</SocialIcon>
								<SocialIcon href="#" label="LinkedIn">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
										<circle cx="4" cy="4" r="2" />
									</svg>
								</SocialIcon>
								<SocialIcon href="#" label="WhatsApp">
									<svg
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="currentColor"
									>
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
									</svg>
								</SocialIcon>
							</div>
						</div>
					</div>

					<div className="contact-form-wrap reveal reveal-delay-2">
						<form ref={formRef} onSubmit={handleSubmit} noValidate>
							<div className="form-row">
								<div className="form-group">
									<label htmlFor="name">Full Name *</label>
									<input
										id="name"
										name="name"
										type="text"
										placeholder="Full Name"
										value={form.name}
										onChange={handleChange}
										className={errors.name ? "error" : ""}
									/>
									{errors.name && (
										<span className="form-error">{errors.name}</span>
									)}
								</div>
								<div className="form-group">
									<label htmlFor="email">Email *</label>
									<input
										id="email"
										name="email"
										type="email"
										placeholder="Email Address"
										value={form.email}
										onChange={handleChange}
										className={errors.email ? "error" : ""}
									/>
									{errors.email && (
										<span className="form-error">{errors.email}</span>
									)}
								</div>
							</div>
							<div className="form-row">
								<div className="form-group">
									<label htmlFor="phone">Phone</label>
									<input
										id="phone"
										name="phone"
										type="tel"
										placeholder="Phone Number"
										value={form.phone}
										onChange={handleChange}
									/>
								</div>
								<div className="form-group">
									<label htmlFor="service">Service Required</label>
									<select
										id="service"
										name="service"
										value={form.service}
										onChange={handleChange}
									>
										<option value="">Select a service...</option>
										{services.map((s) => (
											<option key={s} value={s}>
												{s}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="form-group">
								<label htmlFor="message">Message *</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									placeholder="Tell us about your project..."
									value={form.message}
									onChange={handleChange}
									className={errors.message ? "error" : ""}
								/>
								{errors.message && (
									<span className="form-error">{errors.message}</span>
								)}
							</div>

							{status === "success" && (
								<div className="form-alert success">
									<CircleCheckBig size={20} />
									<span>
										Message sent! We'll get back to you within 2 business hours.
									</span>
								</div>
							)}

							{status === "error" && (
								<div className="form-alert error-alert">
									<CircleX size={20} />
									<span>
										Something went wrong. Please try again or call us directly.
									</span>
								</div>
							)}

							<button
								type="submit"
								className="btn-primary form-submit"
								disabled={status === "loading"}
							>
								{status === "loading" ? (
									<>
										<span className="spinner" /> Sending...
									</>
								) : (
									<>
										Send Message{" "}
										<svg
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2.5"
										>
											<line x1="22" y1="2" x2="11" y2="13" />
											<polygon points="22 2 15 22 11 13 2 9 22 2" />
										</svg>
									</>
								)}
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
