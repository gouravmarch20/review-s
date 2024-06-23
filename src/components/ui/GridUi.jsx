import React from 'react'
const ListItems = ({ items, className }) => {
	return (

		items.map((item, index) => (
			<div key={index} className={className} >{item}</div>
		))

	);
};

const GridUi = () => {
	const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
	const items2 = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

	return (

		<div class="grid gap-2 grid-cols-12 bg-stone-300  h-[100vh] overflow-hidden">
			<div class=" col-span-9 overflow-x-scroll">
				<ListItems items={items} className="h-[30vh] m-1 bg-orange-500" />

			</div>
			<div class="  col-span-3 overflow-x-scroll">
				<ListItems items={items2} className="h-[30vh] m-1 bg-green-500" />

			</div>
		</div>


	)
}

export default GridUi