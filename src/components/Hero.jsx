import heroImageWebp from "../assets/images/Hero.webp";
import heroImageJpg from "../assets/images/Hero.jpg";
import { scrollToSection } from "../utils/scroll";
import "./Hero.css";

export default function Hero() {
	const scrollTo = (id) => scrollToSection(id);

	return (
		<section className="hero" id="home">
			<div className="hero-bg">
				<div className="hero-orb hero-orb-1" />
				<div className="hero-orb hero-orb-2" />
				<div className="hero-slash" />
			</div>

			<div className="hero-inner container">
				<div className="hero-left">
					<p className="hero-eyebrow">
						<span className="eyebrow-dot" />
						Premium Print &amp; Brand Studio
					</p>
					<h1 className="hero-headline">
						Premium Printing
						<span className="hero-headline-accent"> &amp; Branding</span>
						<br />
						Solutions for Businesses
					</h1>
					<p className="hero-sub">
						From business cards and banners to corporate branding and
						promotional materials — we help your brand cut through the noise
						with precision-crafted print.
					</p>
					<div className="hero-actions">
						<button className="btn-primary" onClick={() => scrollTo("contact")}>
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
							>
								<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.5 19.79 19.79 0 010 2.85 2 2 0 012 .67h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
							</svg>
							Request Quote
						</button>
						<button
							className="btn-outline hero-outline"
							onClick={() => scrollTo("portfolio")}
						>
							View Portfolio
							<svg
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
							>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</button>
					</div>
					<div className="hero-stats">
						{[
							["1000+", "Projects"],
							["100%", "Client Satisfaction"],
							["7+", "Years"],
							["24hr", "Turnaround"],
						].map(([n, l]) => (
							<div className="hero-stat" key={l}>
								<span className="hero-stat-num">{n}</span>
								<span className="hero-stat-label">{l}</span>
							</div>
						))}
					</div>
				</div>

				<div className="hero-right">
					<div className="hero-image-wrap">
						<div className="img-placeholder hero-img">
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
								<picture>
									<source srcSet={heroImageWebp} type="image/webp" />
									<img
										src={heroImageJpg}
										alt="Icreate Africa Ltd"
										className="Heroim"
										width="1200"
										height="800"
										fetchPriority="high"
										decoding="async"
									/>
								</picture>
							</span>
							
						</div>
						<div className="hero-badge">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
							</svg>
							<span>Award-Winning Quality</span>
						</div>
					</div>
				</div>
			</div>

			<div className="hero-scroll-hint" onClick={() => scrollTo("about")}>
				<div className="scroll-line" />
				<span>Scroll</span>
			</div>
		</section>
	);
}
