import React from "react";
import Zoom from "react-reveal/Zoom";
import { ReactComponent as Diamond } from "./assets/diamond.svg";
import { useEffect, useState } from "react";

function Loader() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 1800);
	}, []);

	return (
		<div className="h-screen w-screen z-1 flex justify-center items-center bg-theme-bg-color">
			<div className="animate-spin-med">
				<Zoom opposite when={loading}>
					<div className="flex h-64 w-64 relative justify-center items-center">
						<Diamond className="h-full animate-pulse fill-theme-cyan absolute" />
						<Diamond className="h-10 animate-ping fill-theme-medium-pink object-center" />
					</div>
				</Zoom>
			</div>
		</div>
	);
}

export default Loader;
