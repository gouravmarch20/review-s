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
  //   if (currentHoveredLocation === locationName) return;

  //   const location = chatItem?.placesData.find(loc => loc.name === locationName);
  //   setHoveredLocation(location);
  //   setShowModal(true);
  //   setCurrentHoveredLocation(locationName);

  //   const parentDiv = document.getElementById('parent-div');
	// 	console.log(`parentDiv` , parentDiv)

  //   if (!parentDiv) return;

  //   const rect = event.target.getBoundingClientRect();
  //   const parentRect = parentDiv.getBoundingClientRect();
	// 	console.log(`parentDiv_1` , parentRect)
	// 	console.log(`child_1` , rect)


	// 	let top = rect.top - parentRect.top;
  //   let left = rect.right - parentRect.left + 10;
	// 	let bottom = rect.bottom - parentRect.bottom + 10;
  //   let right = rect.left - parentRect.right + 10;

  //   let transformX = "0%";
  //   let transformY = "0%";

  //   if (left + 200 > parentRect.width) {
  //     left = rect.left - parentRect.left - 210;
  //     // transformX = "-10%";
  //   }
  //   if (top + 150 > parentRect.height) {
  //     top = rect.bottom - parentRect.top - 160;
  //     // transformY = "250%";
  //   }

  //   setPopup({
  //     content: locationName,
  //     position: { top, left, transformX, transformY },
  //   });
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
		const parentRect = parentDiv.getBoundingClientRect();

		// Define modal dimensions and margin
		const modalWidth = 280;
		const modalHeight = 300;
		const modalMargin = 10;

		let position = {};

		// Calculate left and transformX based on available space
		if (rect.right + modalWidth + modalMargin <= parentRect.right) {
			position.left = rect.right + modalMargin;
			position.transformX = "0%";
		} else if (rect.left - modalWidth - modalMargin >= parentRect.left) {
			position.left = rect.left - modalWidth - modalMargin;
			position.transformX = "-100%";
		} else {
			// Default to showing on the right side of the link if no space on either side
			position.left = rect.right + modalMargin;
			position.transformX = "0%";
		}

		// Calculate top and transformY based on available space
		if (rect.bottom + modalHeight + modalMargin <= parentRect.bottom) {
			position.top = rect.bottom + modalMargin;
			position.transformY = "0%";
		} else if (rect.top - modalHeight - modalMargin >= parentRect.top) {
			position.top = rect.top - modalHeight - modalMargin;
			position.transformY = "-100%";
		} else {
			// Default to showing above the link if no space below
			position.top = rect.top - modalHeight - modalMargin;
			position.transformY = "-100%";
		}

		setPopup({
			content: locationName,
			position: position,
		});
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
