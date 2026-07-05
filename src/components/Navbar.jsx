import React, { useState, useEffect } from "react";
import logoImage from "../assets/images/Icreate-africa.png";
import "./Navbar.css";

const links = ["Home", "About", "Services", "Portfolio", "Why Us", "Contact"];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleNav = (e, label) => {
		e.preventDefault();
		const id = label
			.toLowerCase()
			.replace(/\s+/g, "-")
			.replace("why-us", "why");
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
			setOpen(false);
		}
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
