console.log("Hello");
import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => {
    return (
        <div className="title">
        <h1>Heading one</h1>
        <h2>Heading Two</h2>
        <h3>Heading Three</h3>
    </div>
    )
}

const FunctionalComponent = () => {
    return (
        <div className="title">
            <h1>Heading with component function</h1>
            {/* {heading()} */}
            <Heading />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />);