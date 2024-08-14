import React, { useRef, useState } from "react";
import { io } from "socket.io-client";

const Chat = () => {
	const socket = useRef(
		io("http://localhost:8000", {
			withCredentials: true,
		})
	).current;

	const [message, setMessage] = useState("");
	const [socketID, setSocketId] = useState("");
	const [currentVal, setCurrentVal] = useState("nothing");
	const currentValRef = useRef(currentVal);

	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit("message", message);
		setMessage("");
	};

	// Handle WebSocket events
	React.useEffect(() => {
		socket.on("connect", () => {
			setSocketId(socket.id);
			console.log("connected", socket.id);
		});

		socket.on("testing", (data) => {
			console.log("hero_", currentValRef.current);
		});

		// Cleanup on unmount
		return () => {
			socket.off("testing");
		};
	}, [socket]);

	// Update currentVal and currentValRef in a single call
	const handleChange = () => {
		// setCurrentVal((prevVal) => {
		// 	return "changed"; // Update state
		// });
		currentValRef.current = "changed"; // Update ref directly

	};

	return (
		<div>
			<h5 className="text-green-400 ">{socketID}</h5>
			<button onClick={handleChange}>change state</button>
			<h2>Broadcast Chat</h2>
			{/* <h1>{currentVal}</h1> */}
			<form onSubmit={handleSubmit}>
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="outlined-basic"
					label="Message"
					className="border-2 border-indigo-500/100 mr-1"
					placeholder="type text"
				/>
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default Chat;
