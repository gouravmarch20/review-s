"use client"
import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const Chat = () => {
	const socket = useMemo(
		() =>
			io("http://localhost:8000", {
				withCredentials: true,
			}),
		[]
	);

	const [privateMsg, setPrivateMsg] = useState([]);
	const [message, setMessage] = useState("");
	const [room, setRoom] = useState("");
	const [socketID, setSocketId] = useState("");
	const [roomName, setRoomName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		socket.emit("message", message);
		setMessage("");

	};

	const handleSubmit1 = (e) => {
		e.preventDefault();
		socket.emit("private-room", { message, room });
		setMessage("");
	};

	const joinRoomHandler = (e) => {
		e.preventDefault();
		socket.emit("join-room", roomName);
		setRoomName("");
	};

	useEffect(() => {
		socket.on("connect", () => {
			setSocketId(socket.id);
			console.log("connected", socket.id);
		});

		socket.on("receive-message", (data) => {
			console.log("receive-message", data);
			setPrivateMsg((messages) => [...messages, data]);
		});

		// socket.on(" ", (data) => {
		// 	console.log(data);
		// 	setMessages((messages) => [...messages, data]);
		// });


		// return () => {
		// 	socket.disconnect();
		// };
	}, []);

	return (
		<div>
			<h5 className="text-green-400 ">
				{socketID}
			</h5>
			<h2>Broadcast Chat </h2>
			<form onSubmit={handleSubmit}>
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="outlined-basic"
					label="Message"
					className="border-2 border-indigo-500/100 mr-1"
					placeholder="type text"
				/>

				<button type="submit" >
					Send
				</button>
			</form>
			<h2>Private  Chat - <span className="text-red-600  ">Room Concept</span> </h2>

			<form onSubmit={handleSubmit1}>
				<input
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					id="outlined-basic"
					label="Message"
					className="border-2 border-indigo-500/100 mr-1"
					placeholder="type text"

				/>
				<input
					value={room}
					onChange={(e) => setRoom(e.target.value)}
					id="outlined-basic"
					label="Room"
					className="border-2 border-indigo-500/100 mr-1"
					placeholder="type Room name"

				/>
				<button type="submit" >
					Send
				</button>
			</form>
			<div>
				{
					privateMsg?.map((p, i) => (
						<p key={i} className="bg-gray-700 text-white">
							{p}
						</p>
					))
				}
			</div>
			{/*  */}
			<h2>Group  Chat - <span className="text-red-900  ">Join Concept</span> </h2>

			<div>
				<input
					value={roomName}
					onChange={(e) => setRoomName(e.target.value)}
					id="outlined-basic"
					label="room name"
					className="border-2 border-indigo-500/100 mr-1"
					placeholder="type room name"
				/>
				<button type="submit" onClick={joinRoomHandler} >
					Send
				</button>
			</div>

			<form onSubmit={handleSubmit1} >

				<div>
					<input
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						id="outlined-basic"
						label="Message"
						className="border-2 border-indigo-500/100 mr-1"
						placeholder="type text"

					/>
					<input
						value={room}
						onChange={(e) => setRoom(e.target.value)}
						id="outlined-basic"
						label="Room"
						className="border-2 border-indigo-500/100 mr-1"
						placeholder="type Room name"

					/>
					<button type="submit" >
						Send
					</button>



				</div>

			</form>

		</div >

	)
}

export default Chat