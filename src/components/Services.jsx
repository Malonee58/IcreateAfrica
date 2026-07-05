import React from "react";
import "./Services.css";

const services = [
	{
		title: "Commercial Printing",
		desc: "High-quality business cards, flyers, brochures, letterheads, invoices, calendars, magazines, and other professional print materials tailored to your business.",
		image: "/images/services/Lf-printing.jpg",
	},
	{
		title: "Large Format & Signages",
		desc: "Custom banners, billboards, shop signage, roll-up banners, exhibition displays, window graphics, and other large-format print solutions that maximize your visibility.",
		image: "/images/services/signage.jpg",
	},
	{
		title: "Item Customization",
		desc: "Personalize T-shirts, mugs, caps, pens, gift items, corporate merchandise, promotional products, and branded apparel with high-quality printing and finishing.",
		image: "/images/services/Item-cust.jpg",
	},
	{
		title: "Branding & Packaging",
		desc: "Complete branding solutions including logos, corporate identity, product packaging, custom boxes, shopping bags, labels, and stickers that elevate your brand.",
		image: "/images/services/branding.jpg",
	},
];
export default function Services() {
	return (
		<section className="services" id="services">
			<div className="services-bg">
				<div className="services-orb" />
			</div>

			<div className="container">
				<div className="services-header">
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
						What We Do
					</p>

					<h2
						className="section-title reveal reveal-delay-1"
						style={{ color: "#fff" }}
					>
						Print &amp; Brand Services<span> Built for Impact</span>
					</h2>

					<p
						className="section-subtitle reveal reveal-delay-2"
						style={{
							color: "rgba(255,255,255,0.55)",
							marginTop: "0.75rem",
						}}
					>
						Every service we offer is precision-crafted to help your business
						look its absolute best.
					</p>
				</div>

				<div className="services-grid">
					{services.map(({ title, desc, image }, i) => (
						<div
							key={title}
							className={`service-card reveal reveal-delay-${(i % 4) + 1}`}
							style={{
								backgroundImage: `linear-gradient(rgba(10,10,15,.35), rgba(10,10,15,.65)), url(${image})`,
							}}
						>
							<h3 className="service-title">{title}</h3>

							<p className="service-desc">{desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
