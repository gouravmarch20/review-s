import React, { useState, useEffect } from 'react';

import PopupCard from './PopupCard';


const Hover = ({ chatItem,  show, location }) => {
	console.log(` chatItem` , chatItem)

	const [hoveredLocation, setHoveredLocation] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [bottomRightSheet, setBottomRightSheet] = useState("");
	const [currentHoveredLocation, setCurrentHoveredLocation] = useState(null);

	const isMobileView = () => window.innerWidth <= 576;

	useEffect(() => {
		if (isMobileView() && hoveredLocation) {
			setBottomRightSheet("Sorting");
		}
	}, [hoveredLocation]);
  const [popup, setPopup] = useState({ content: null, position: null });






	// const handleMouseEnter = (event, locationName) => {
	// 	if (currentHoveredLocation === locationName) return;

	// 	const location = chatItem?.placesData.find(loc => loc.name === locationName);
	// 	setHoveredLocation(location);
	// 	setShowModal(true);
	// 	setCurrentHoveredLocation(locationName);

	// 	const parentDiv = document.getElementById('parent-div');
	// 	if (!parentDiv) return;

	// 	const rect = event.target.getBoundingClientRect();
	// 	const parentRect = parentDiv.getBoundingClientRect();

	// 	// Define modal dimensions and margin
	// 	const modalWidth = 280;
	// 	const modalHeight = 300;
	// 	const modalMargin = 10;

	// 	let position = {};

	// 	// Calculate left and transformX based on available space
	// 	if (rect.right + modalWidth + modalMargin <= parentRect.right) {
	// 		console.log(`hello`)

	// 		position.left = rect.right + modalMargin;
	// 		position.transformX = "0%";
	// 	} else if (rect.left - modalWidth - modalMargin >= parentRect.left) {
	// 		console.log(`hello`)

	// 		position.left = rect.left - modalWidth - modalMargin;
	// 		position.transformX = "-100%";
	// 	} else {
	// 		console.log(`hello`)

	// 		// Default to showing on the right side of the link if no space on either side
	// 		position.left = rect.right + modalMargin;
	// 		position.transformX = "0%";
	// 	}

	// 	// Calculate top and transformY based on available space
	// 	if (rect.bottom + modalHeight + modalMargin <= parentRect.bottom) {
	// 		position.top = rect.bottom + modalMargin;
	// 		position.transformY = "0%";
	// 	} else if (rect.top - modalHeight - modalMargin >= parentRect.top) {
	// 		position.top = rect.top - modalHeight - modalMargin;
	// 		position.transformY = "-100%";
	// 	} else {
	// 		// Default to showing above the link if no space below
	// 		position.top = rect.top - modalHeight - modalMargin;
	// 		position.transformY = "-100%";
	// 	}
	// 	console.log(`position_44` , position)

	// 	setPopup({
	// 		content: locationName,
	// 		position: position,
	// 	});
	// };

	const handleMouseEnter = (event, locationName) => {
		if (currentHoveredLocation === locationName) return;

		const location = chatItem?.placesData.find(loc => loc.name === locationName);
		setHoveredLocation(location);
		setShowModal(true);
		setCurrentHoveredLocation(locationName);

		const parentDiv = document.getElementById('parent-div');
		if (!parentDiv) return;

		const rect = event.target.getBoundingClientRect();
		// const parentRect = parentDiv.getBoundingClientRect();

		// // Define modal dimensions and margin
		// const modalWidth = 280;
		// const modalHeight = 300;
		// const modalMargin = 10;



    const viewportWidth = parentDiv.innerWidth;
    const viewportHeight = parentDiv.innerHeight;

    let left = rect.right + 10;
    let top = rect.top;
    let transformX = "0%";
    let transformY = "0%";

    if (rect.right + 200 > viewportWidth) {
      left = rect.left - 210;
      transformX = "-10%";
    }
    if (rect.bottom + 150 > viewportHeight) {
      top = rect.bottom - 160;
      transformY = "250%";
    }

    setPopup({
      content  : "hello",
      position: { top, left, transformX, transformY },
    });


		let position = {};

		// // Calculate left and transformX based on available space
		// if (rect.right + modalWidth + modalMargin <= parentRect.right) {
		// 	position.left = rect.right + modalMargin;
		// 	position.transformX = "0%";
		// } else if (rect.left - modalWidth - modalMargin >= parentRect.left) {
		// 	position.left = rect.left - modalWidth - modalMargin;
		// 	position.transformX = "-100%";
		// } else {
		// 	// Default to showing on the right side of the link if no space on either side
		// 	position.left = rect.right + modalMargin;
		// 	position.transformX = "0%";
		// }

		// // Calculate top and transformY based on available space
		// if (rect.bottom + modalHeight + modalMargin <= parentRect.bottom) {
		// 	position.top = rect.bottom + modalMargin;
		// 	position.transformY = "0%";
		// } else if (rect.top - modalHeight - modalMargin >= parentRect.top) {
		// 	position.top = rect.top - modalHeight - modalMargin;
		// 	position.transformY = "-100%";
		// } else {
		// 	// Default to showing below the link if no space above
		// 	position.top = rect.bottom + modalMargin;
		// 	position.transformY = "0%";
		// }

		// setPopup({
		// 	content: locationName,
		// 	// position: position,
    //   position: { top, left, transformX, transformY },

		// });
	};



	const handleMouseLeave = () => {
		setShowModal(false);
		setCurrentHoveredLocation(null);
		setPopup({ content: null, position: null });

	};



	const formattedResponse = chatItem?.message
		.replace(/\{{3}(.*?)\}{3}/g, (match, p1) => `<span class="text-indigo-700 pickLinkTag" data-location="${p1}">${p1}</span>`)
		.replace(/\n/g, "<br />")
		.replace(/\\n/g, "<br />");

	return (
		<div>
			{/* FOR PC */}
			<div
				className='d-none d-sm-block'
				dangerouslySetInnerHTML={{ __html: formattedResponse }}
				onMouseOver={(e) => {
					if (e.target.matches('.pickLinkTag')) {
						handleMouseEnter(e , e.target.getAttribute('data-location'));
					}
				}}
				onMouseOut={(e) => {
					if (e.target.matches('.pickLinkTag')) {
						handleMouseLeave();
					}
				}}
			/>
						{showModal && hoveredLocation && (

				<PopupCard content={popup.content} position={popup.position} />

			)}



		</div>
	);
};

export default Hover;
