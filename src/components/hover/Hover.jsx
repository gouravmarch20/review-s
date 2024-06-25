// Hover.jsx
"use client"
import React, { useState } from 'react';
import Modal from './Modal.jsx';
import './App.css';

const locations = [
	{
		"_id": "667560f0bf4cfc232be440bf",
		"name": "Delhi",
		"rating": null,
		"reviews": "[]",
		"address": "Delhi, India",
		"latitude": 28.7040592,
		"longitude": 77.10249019999999,
		"phone_number": "No phone number available",
		"website": "No website available",
		"city": "Delhi",
		"created_at": "2024-06-21T11:16:00.189Z",
		"updated_at": "2024-06-21T11:16:00.189Z",
		"__v": 0
	},
	{
		"_id": "6675801c7882806404bad1df",
		"name": "Chandni Chowk",
		"rating": null,
		"reviews": "[]",
		"address": "Chandni Chowk, Delhi, India",
		"latitude": 28.6505331,
		"longitude": 77.23033699999999,
		"phone_number": "No phone number available",
		"website": "No website available",
		"city": "Delhi",
		"created_at": "2024-06-21T13:29:00.549Z",
		"updated_at": "2024-06-21T13:29:00.549Z",
		"__v": 0
	},
	{
		"_id": "667560f5bf4cfc232be440cd",
		"name": "Paranthe Wali Gali",
		"rating": 3.7,
		"address": "Paranthe Wali Gali, Chandni Chowk, Delhi, 110006, India",
		"latitude": 28.6560677,
		"longitude": 77.23055839999999,
		"phone_number": "No phone number available",
		"website": "No website available",
		"city": "Delhi",
		"created_at": "2024-06-21T11:16:05.848Z",
		"updated_at": "2024-06-21T11:16:05.848Z",
		"__v": 0
	},
	{
		"_id": "6675836d7882806404bad2e6",
		"name": "Sita Ram Diwan Chand",
		"rating": 4.2,
		"address": "2243, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055, India",
		"latitude": 28.6423777,
		"longitude": 77.21035499999999,
		"phone_number": "099997 63765",
		"website": "http://www.sitaramdiwanchand.co.in/",
		"city": "Delhi",
		"created_at": "2024-06-21T13:43:09.917Z",
		"updated_at": "2024-06-21T13:43:09.917Z",
		"__v": 0
	}
];

const Hover = () => {
	const [hoveredLocation, setHoveredLocation] = useState(null);
	const [showModal, setShowModal] = useState(false);

	const chatGptResponse = `
    Hello there, flavor explorer! Ready to take a culinary journey? When you're in {{{Delhi}}}, you absolutely have to try the city's famed street food. Dive into the lip-smacking chaats at {{{Chandni Chowk}}}, or try the buttery, melt-in-mouth parathas at {{{Paranthe Wali Gali}}}. And don't forget the heart-warming Chhole Bhature at {{{Sita Ram Diwan Chand}}}. Oh, and one small piece of advice - wear stretchy pants! Get ready for a food coma.
  `;

	const handleMouseEnter = (locationName) => {
		const location = locations.find(loc => loc.name === locationName);
		setHoveredLocation(location);
		setShowModal(true);
	};

	const handleMouseLeave = () => {
		setShowModal(false);
	};

	const formattedResponse = chatGptResponse.replace(/\{{3}(.*?)\}{3}/g, (match, p1) => {
		return `<span class="highlight" data-location="${p1}">${p1}</span>`;
	});

	return (
		<div className="App">
			<div
				dangerouslySetInnerHTML={{ __html: formattedResponse }}
				onMouseOver={(e) => {
					if (e.target.matches('.highlight')) {
						console.log("hello", e);

						handleMouseEnter(e.target.getAttribute('data-location'));
					}
				}}
				onMouseOut={(e) => {
					console.log("mouse out", e);

					if (e.target.matches('.highlight')) {
						handleMouseLeave();
					}
				}}
			/>
			{showModal && hoveredLocation && (
				<Modal
					show={showModal}
					handleClose={handleMouseLeave}
					location={hoveredLocation}
				/>
			)}
		</div>
	);
};

export default Hover;
