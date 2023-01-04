import { FC, useState } from 'react';
import './App.css';

type Props = {
	name?: string;
};

export const App: FC<Props> = (props) => {
	const { name } = props;
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount((count) => count + 1);
	};

	return (
		<div className="App">
			{name ? <h1>Hello {name}</h1> : <h1>Hello World</h1>}
			<div className="card">
				<button onClick={() => handleClick()}>count is {count}</button>
			</div>
		</div>
	);
};
