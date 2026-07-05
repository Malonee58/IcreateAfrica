import React from "react";
import {
	Trophy,
	Zap,
	BadgeDollarSign,
	Users,
	Settings,
	Heart,
} from "lucide-react";
import "./WhyChooseUs.css";

const reasons = [
	{
		icon: Trophy,
		title: "Premium Quality",
		desc: "We use top-tier materials and industry-leading equipment to ensure every print meets professional-grade standards.",
	},
	{
		icon: Zap,
		title: "Fast Delivery",
		desc: "Rush orders available with same-day and next-day turnaround for most print products.",
	},
	{
		icon: BadgeDollarSign,
		title: "Affordable Pricing",
		desc: "Transparent, competitive pricing with no hidden costs. Volume discounts available for all orders.",
	},
	{
		icon: Users,
		title: "Experienced Team",
		desc: "Our designers and print specialists bring years of expertise to every project, large or small.",
	},
	{
		icon: Settings,
		title: "Modern Equipment",
		desc: "State-of-the-art digital and offset presses deliver consistent, vibrant, color-accurate results.",
	},
	{
		icon: Heart,
		title: "Customer Satisfaction",
		desc: "200+ clients trust us to deliver. We don't close a job until you're completely satisfied.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className="why" id="why">
			<div className="why-bg">
				<div className="why-orb" />
			</div>

			<div className="container">
				<div className="why-header">
					<p
						className="section-label reveal"
						style={{ color: "rgba(255,255,255,0.6)" }}
					>
						<span
							style={{
								background: "rgba(139,47,223,0.8)",
								height: "2px",
								width: "24px",
								display: "inline-block",
							}}
						/>
						Why Work With Us
					</p>

					<h2
						className="section-title reveal reveal-delay-1"
						style={{ color: "#fff" }}
					>
						The Difference Is in<span> the Details</span>
					</h2>
				</div>

				<div className="why-grid">
					{reasons.map(({ icon: Icon, title, desc }, i) => (
						<div
							className={`why-card reveal reveal-delay-${(i % 3) + 1}`}
							key={title}
						>
							<div className="why-icon">
								<Icon size={36} strokeWidth={2.2} />
							</div>

							<h3 className="why-title">{title}</h3>
							<p className="why-desc">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
