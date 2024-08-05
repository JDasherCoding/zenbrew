"use client";
import { useEffect } from "react";

// Components
import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testomonials from "@/components/Testomonials";
import OpeningHours from "@/components/OpeningHours";

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
			<Explore />
			<About />
			<Menu />
			<OpeningHours />
			<Testomonials />
			{/* <div className="h-[4000px]"></div> */}
		</div>
	);
};

export default Home;
