import React from 'react';

const ListItems = ({ items, className }) => {
	return (

		items.map((item, index) => (
			<div key={index} className={className} >{item}</div>
		))

	);
};

const App = () => {
	const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

	return (
		<div className="flex   bg-stone-300 space-x-2 h-[100vh] ">
			<div className="overflow-x-scroll w-[50vw]">
				<ListItems items={items} className="h-[30vh] m-1 bg-orange-500" />
			</div>
			<div className="overflow-x-scroll w-[50vw] ">
				<ListItems items={items} className="h-[30vh] m-1 bg-green-400" />
			</div>
		</div>
	);
};

export default App;
