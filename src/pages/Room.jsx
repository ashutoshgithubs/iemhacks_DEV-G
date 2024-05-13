import React, { useState } from "react";
import HighlightedText from "../components/core/HomePage/HighlightedText";
import { useNavigate } from "react-router-dom";

const Room = () => {
	const [streamId, setStreamId] = useState()
	const navigate=useNavigate()
	const handleJoin = () => { 
		navigate(`/stream/${streamId}`)
	}
	return (
		<>
			<div className="flex flex-col items-center justify-center h-screen bg-richblack-900">
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
						<div className="text-center md:text-left md:col-span-2">
							<div className="text-4xl font-semibold mt-7">
								<HighlightedText
									text={"Video calls and meetings for everyone"}
									size="lg"
								/>
							</div>
							<div className="mt-4 w-[90%] md:w-full text-center md:text-left text-lg font-bold text-richblack-300">
								Empowering educators to deliver live lectures, facilitate
								interactive sessions, and foster student engagement seamlessly
								across all devices.
							</div>
							<div className="flex items-center justify-center md:justify-start border rounded-md px-3 py-2 mt-4">
								<input
									className="ml-2 border-blue-50 bg-transparent outline-none text-richblack-300"
									placeholder="Enter RoomId"
									type="text"
									value={streamId}
									onChange={e=>setStreamId(e.target.value)}

								/>
								<button onClick={handleJoin} className="ml-4 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
									Join
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Room;
