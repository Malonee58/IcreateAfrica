import { MessageCircle, PencilLine, Printer, Truck } from "lucide-react";
import "./Process.css";

const steps = [
	{
		num: "01",
		icon: MessageCircle,
		title: "Consultation",
		desc: "We discuss your goals, brand identity, and requirements to build a clear brief before any work begins.",
	},
	{
		num: "02",
		icon: PencilLine,
		title: "Design Approval",
		desc: "Our design team develops concepts for your review. We refine until you're 100% satisfied.",
	},
	{
		num: "03",
		icon: Printer,
		title: "Production",
		desc: "Approved designs go to press on our modern equipment, with strict quality checks at every stage.",
	},
	{
		num: "04",
		icon: Truck,
		title: "Delivery",
		desc: "Your finished prints are packaged and dispatched nationwide — on time, every time.",
	},
];

export default function Process() {
	return (
		<section className="process" id="process">
			<div className="container">
				<div className="process-header">
					<p className="section-label reveal">How It Works</p>

					<h2 className="section-title reveal reveal-delay-1">
						From Brief to<span> Delivered</span>
					</h2>

					<p
						className="section-subtitle reveal reveal-delay-2"
						style={{ marginTop: "0.75rem" }}
					>
						A streamlined 4-step process designed to save you time and deliver
						outstanding results.
					</p>
				</div>

				<div className="process-timeline">
					{steps.map(({ num, icon: Icon, title, desc }, i) => (
						<div
							className={`process-step reveal reveal-delay-${i + 1}`}
							key={num}
						>
							<div className="process-num">{num}</div>

							<div className="process-icon-wrap">
								<div className="process-icon">
									<Icon size={34} strokeWidth={2.2} />
								</div>
							</div>

							<h3 className="process-title">{title}</h3>

							<p className="process-desc">{desc}</p>

							{i < steps.length - 1 && <div className="process-connector" />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
