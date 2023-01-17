import { type FC, useState } from "react";
import type { AppSpecs } from "@customTypes";
import { Typography } from "@mui/material";
import "./App.css";
import { useQuery } from "react-query";

type Props = {
	name?: string;
};

export const App: FC<Props> = (props) => {
	const { name } = props;
	console.log(name);

	const [count, setCount] = useState(0);
	const {
		isLoading,
		error,
		data: appSpecs,
	} = useQuery<AppSpecs>("appSpecs", () =>
		fetch("http://localhost:3002/appSpecs").then((res) => res.json())
	);

	const handleClick = () => {
		setCount((count) => count + 1);
	};

	if (isLoading || !appSpecs) {
		return <Typography variant="h3">Fetching to backend...</Typography>;
	}

	if (error) {
		return <Typography variant="h3">Error fetching to backend...</Typography>;
	}

	return (
		<div className="App">
			<Typography variant="h3">
				Hello {appSpecs.name}, Version : {appSpecs.id} (info from backend)
			</Typography>{" "}
			<div className="card">
				<button onClick={handleClick}>count is {count}</button>
			</div>
		</div>
	);
};
