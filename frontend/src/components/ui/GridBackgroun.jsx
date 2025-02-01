import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const GridBackground = ({ children }) => {
	const particlesInit = useCallback(async (engine) => {
		await loadSlim(engine);
	}, []);

	return (
		<div className="relative w-full min-h-screen bg-black overflow-hidden">
			{/* Star Animation */}
			<Particles
				init={particlesInit}
				options={{
					fullScreen: { enable: false },
					particles: {
						number: { value: 100, density: { enable: true, area: 800 } },
						color: { value: "#ffffff" },
						opacity: { value: 1, random: true, anim: { enable: true, speed: 0.5 } },
						size: { value: 2, random: true },
						move: {
							enable: true,
							direction: "bottom",
							speed: 0.5,
							outModes: { default: "out" },
						},
					},
					background: { color: "#000000" },
				}}
				className="absolute inset-0 z-0"
			/>

			{/* Content & Transactions */}
			<div className="relative z-10 flex flex-col items-center">
				{children}
			</div>
		</div>
	);
};

export default GridBackground;
