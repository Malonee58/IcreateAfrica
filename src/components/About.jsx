import React from "react";
import { Printer, Users, BadgeCheck, Truck } from "lucide-react";
import "./About.css";
import companyImage from "../assets/images/Icreateimg.png";

const stats = [
	{
		num: "1000+",
		label: "Projects Completed",
		icon: <Printer size={28} />,
	},
	{
		num: "100%",
		label: "Happy Clients",
		icon: <Users size={28} />,
	},
	{
		num: "7+",
		label: "Years Experience",
		icon: <BadgeCheck size={28} />,
	},
	{
		num: "NW",
		label: "Nationwide Delivery",
		icon: <Truck size={28} />,
	},
];

export default function About() {
	return (
		<section className="about" id="about">
			<div className="container">
				<div className="about-grid">
					<div className="about-image-col reveal">
						<div className="about-img-frame">
							<div className="img-placeholder about-img">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1.5"
								>
									<rect x="3" y="3" width="18" height="18" rx="2" />
									<circle cx="8.5" cy="8.5" r="1.5" />
									<path d="M21 15l-5-5L5 21" />
								</svg>
								<span>
									<img
										src={companyImage}
										alt="Icreate Africa Ltd"
										className="Himage"
									/>
								</span>
							</div>
							<div className="about-experience-badge">
								<span className="exp-num">7+</span>
								<span className="exp-text">Years of Excellence</span>
							</div>
						</div>
					</div>

					<div className="about-content-col">
						<p className="section-label reveal">Who We Are</p>
						<h2 className="section-title reveal reveal-delay-1">
							Crafting Brands That<span> Leave a Mark</span>
						</h2>
						<p
							className="section-subtitle reveal reveal-delay-2"
							style={{ marginTop: "1rem", marginBottom: "1.5rem" }}
						>
							We are a professional printing and branding company dedicated to
							helping businesses create lasting impressions through high-quality
							print products and innovative branding solutions.
						</p>
						<p className="about-body reveal reveal-delay-3">
							From idea to delivery, we work alongside you at every stage —
							designing, producing, and shipping print that represents your
							brand with confidence. Our team combines cutting-edge equipment
							with decades of craft knowledge to deliver results that
							consistently exceed expectations.
						</p>

						<div className="about-stats reveal reveal-delay-4">
							{stats.map(({ num, label, icon }) => (
								<div className="about-stat-card" key={label}>
									<span className="stat-icon">{icon}</span>
									<span className="stat-num">{num}</span>
									<span className="stat-label">{label}</span>
								</div>
							))}
						</div>

						<div className="about-actions reveal reveal-delay-5">
							<a
								href="#contact"
								className="btn-primary"
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("contact")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Work With Us
							</a>
							<a
								href="#services"
								className="btn-outline"
								onClick={(e) => {
									e.preventDefault();
									document
										.getElementById("services")
										?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Our Services
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
