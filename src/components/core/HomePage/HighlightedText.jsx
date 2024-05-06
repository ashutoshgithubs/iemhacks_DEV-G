import React from "react";

export default function HighlightedText({ text }) {
  return (
    <div>
      <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold">
        {" "}
        {text}
      </span>
    </div>
  );
}
