// Modal.jsx
import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, location }) => {
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (!document.querySelector('.modal-content').contains(event.target)) {
				handleClose();
			}
		};

		if (show) {
			document.addEventListener('mousedown', handleOutsideClick);
		} else {
			document.removeEventListener('mousedown', handleOutsideClick);
		}

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, [show, handleClose]);

	if (!show) {
		return null;
	}

	const { name, address, phone_number, website, rating } = location;

	return (
		<div className="modal-overlay bg-red-500">
			<div className="modal-content">
				<button className="modal-close" onClick={handleClose}>
					&times;
				</button>
				<h2>{name}</h2>
				<p>Address: {address}</p>
				<p>Phone: {phone_number}</p>
				<p>Website: <a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
				<p>Rating: {rating}</p>
			</div>
		</div>
	);
};

export default Modal;
