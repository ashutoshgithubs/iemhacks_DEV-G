import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Stream = () => {
  const { streamId } = useParams();
  
  function randomID(len) {
		let result = "";
		if (result) return result;
		var chars =
				"12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
			maxPos = chars.length,
			i;
		len = len || 5;
		for (i = 0; i < len; i++) {
			result += chars.charAt(Math.floor(Math.random() * maxPos));
		}
		return result;
  }
  
  
  let myMeeting = async (element) => {
    const appID = "your_appid";
		const serverSecret = "your_serverId";
		const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
			appID,
			serverSecret,
			streamId,
			randomID(5),
			randomID(5)
		);
		const zp = ZegoUIKitPrebuilt.create(kitToken);
		zp.joinRoom({
			container: element,
			sharedLinks: [
				{
					name: "Copy Link",
					url:`http://localhost:3000/stream/${streamId}`
				},
			],
			scenario: {
				mode: ZegoUIKitPrebuilt.GroupCall,
			},
		});
	};

	return <div ref={myMeeting}></div>;
};

export default Stream;
