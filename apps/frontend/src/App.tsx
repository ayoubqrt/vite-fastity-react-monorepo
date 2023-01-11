import { type FC, useEffect, useState } from "react";
import type { AppSpecs } from "@customTypes";
import { Typography } from "@mui/material";
import "./App.css";

type Props = {
	name?: string;
};

export const App: FC<Props> = (props) => {
	const { name } = props;

	const [count, setCount] = useState(0);
	const [appSpecs, setAppSpecs] = useState<AppSpecs | null>();

	const handleClick = () => {
		setCount((count) => count + 1);
	};

	// Ne pas reproduire cette partie, il faut utiliser react-query
	// pour faire du data fetching
	useEffect(() => {
		fetch("http://localhost:3000/appSpecs")
			.then((res) => res.json())
			.then((res: AppSpecs) => {
				setAppSpecs(res);
			});
	}, []);

	const landingPageText = appSpecs ? (
		<Typography variant="h3">
			Hello {appSpecs.name}, Version : {appSpecs.id} (info from backend)
		</Typography>
	) : (
		<Typography variant="h3">Fetching to backend...</Typography>
	);

	return (
		<div className="App">
			{landingPageText}
			<div className="card">
				<button onClick={handleClick}>count is {count}</button>
			</div>
		</div>
	);
};
