import React from "react";
import { User, Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
	{
		name: "Amaka Osei",
		role: "CEO, Lagos Retail Co.",
		review:
			"Outstanding printing quality and excellent customer service. Our branded packaging completely transformed how customers perceive our products. Highly recommended.",
		rating: 5,
	},
	{
		name: "Tunde Adewale",
		role: "Marketing Director, BuildFast Nigeria",
		review:
			"Fast turnaround, professional results. They delivered 500 business card sets and 20 banners in under 48 hours for our trade show. Incredible team.",
		rating: 5,
	},
	{
		name: "Ngozi Eze",
		role: "Founder, NE Fashion House",
		review:
			"The vehicle branding they did for our delivery fleet was absolutely stunning. Multiple clients have commented on how professional and consistent our brand looks now.",
		rating: 5,
	},
];

export default function Testimonials() {
	return (
		<section className="testimonials" id="testimonials">
			<div className="container">
				<div className="testimonials-header">
					<p className="section-label reveal">Client Stories</p>

					<h2 className="section-title reveal reveal-delay-1">
						What Our<span> Clients Say</span>
					</h2>
				</div>

				<div className="testimonials-grid">
					{testimonials.map(({ name, role, review, rating }, i) => (
						<div
							className={`testimonial-card reveal reveal-delay-${i + 1}`}
							key={name}
						>
							<div className="testimonial-stars">
								{Array.from({ length: rating }).map((_, index) => (
									<Star
										key={index}
										size={18}
										fill="currentColor"
										strokeWidth={1.8}
									/>
								))}
							</div>

							<p className="testimonial-review">"{review}"</p>

							<div className="testimonial-author">
								<div className="img-placeholder testimonial-photo">
									<User size={26} strokeWidth={2.2} />
								</div>

								<div>
									<p className="testimonial-name">{name}</p>
									<p className="testimonial-role">{role}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
