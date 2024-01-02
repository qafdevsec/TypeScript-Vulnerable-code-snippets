import React from "react";
import Highlight from "react-highlight";

const MyComponent: React.FC = () => (
    <>
        <Highlight />
        <Highlight className="javascript" />
        <Highlight className="typescript">console.log("Hello, world!");</Highlight>
        <Highlight innerHTML />
        <Highlight innerHTML={true} />
        <Highlight innerHTML={false} />
    </>
);

export default MyComponent;
