import { FC, useEffect, useState } from "react";
import type { AppSpecs } from "@customTypes";
import "./App.css";

type Props = {
	name?: string;
};

export const App: FC<Props> = (props) => {
	const { name } = props;

	const [count, setCount] = useState(0);
	const [appSpecs, setAppSpecs] = useState<AppSpecs | null>();

	const hsandleClick = () => {
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

	return (
		<div className="App">
			{}
			{appSpecs && (
				<h1>
					Hello {appSpecs.name}, Version : {appSpecs.id}
				</h1>
			)}
			<div className="card">
				<button onClick={hsandleClick}>count is {count}</button>
			</div>
		</div>
	);
};
