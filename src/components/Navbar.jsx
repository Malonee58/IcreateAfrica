import { useState, useEffect, useRef } from "react";
import logoImage from "../assets/images/Icreate-africa.png";
import { scrollToSection } from "../utils/scroll";
import "./Navbar.css";

const links = ["Home", "About", "Services", "Portfolio", "Why Us", "Contact"];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const tickingRef = useRef(false);

	useEffect(() => {
		// Throttle scroll handling with requestAnimationFrame so we run the
		// state update at most once per frame instead of on every scroll event.
		const onScroll = () => {
			if (tickingRef.current) return;
			tickingRef.current = true;
			requestAnimationFrame(() => {
				setScrolled(window.scrollY > 40);
				tickingRef.current = false;
			});
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNav = (e, label) => {
		e.preventDefault();
		const id = label
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace("why-us", "why");
		scrollToSection(id);
		setOpen(false);
	};

	return (
		<nav className={`navbar${scrolled ? " scrolled" : ""}`}>
			<div className="nav-inner container">
				<a
					href="#home"
					className="nav-logo"
					onClick={(e) => handleNav(e, "Home")}
				>
					<div className="logo-placeholder">
						<span>
							<img
								src={logoImage}
								alt="Icreate Africa Ltd"
								className="Logoimg"
								width="180"
								height="60"
								decoding="async"
							/>
						</span>
					</div>
				</a>

				<button
					className={`nav-burger${open ? " active" : ""}`}
					onClick={() => setOpen(!open)}
					aria-label="Menu"
				>
					<span />
					<span />
					<span />
				</button>

				<ul className={`nav-links${open ? " open" : ""}`}>
					{links.map((label) => (
						<li key={label}>
							<a
								href={`#${label.toLowerCase().replace(/\s+/g, "-")}`}
								onClick={(e) => handleNav(e, label)}
							>
								{label}
							</a>
						</li>
					))}
					<li>
						<a
							href="#contact"
							className="btn-primary nav-cta"
							onClick={(e) => handleNav(e, "Contact")}
						>
							Get a Quote
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
