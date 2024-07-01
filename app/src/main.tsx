import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout.tsx";
import "./styles/tailwind.css";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Layout />
	</React.StrictMode>,
);
