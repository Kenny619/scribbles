import Quill from "quill";
import "quill/dist/quill.core.css";
import hljs from "highlight.js";

const toolbarOptions = [
	[{ font: [] }],
	[{ size: ["small", false, "large", "huge"] }],
	["bold", "italic", "underline", "strike"], // toggled buttons
	["blockquote", "code-block"],
	[{ header: 1 }, { header: 2 }, { header: 3 }, { header: 4 }], // custom button values
	[{ color: [] }, { background: [] }], // dropdown with defaults from theme
	[{ align: [] }],
];

const historyOptions = {
	delay: 2000,
	maxStack: 100,
	userOnly: true,
};

const options = {
	modules: {
		toolbar: toolbarOptions,
		history: historyOptions,
		syntax: { hljs },
	},
	placeholder: "Scribble your way",
	theme: "snow",
};

const quill = new Quill("#editor", options);
