"use client";

import Hero from "@/components/Hero";
import { useEffect } from "react";
const Home = () => {
	// TODO: Add Locomitve Scroll
	useEffect(() => {
		const loadLocomotiveScroll = async () => {
			const LocoMotiveSCroll = (await import("locomotive-scroll")).default;
			new LocoMotiveSCroll();
		};

		loadLocomotiveScroll();
	}, []);

	return (
		<div className="h-full overflow-x-hidden">
			<Hero />
			{/* Temporary Div */}
			<div className="h-[4000px]"></div>
		</div>
	);
};

export default Home;
