import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
 html, body {
	position: relative;
	width: 100%;
	height: 100%;
	font-size: 18px;
}

body {
	color: white;
	background: black;
	margin: 0;
	padding: 8px;
	box-sizing: border-box;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.bar-show {
  box-shadow: none;
}


.valid {
  color: yellowgreen;
}

.invalid {
  color: orangered;
}

a {
	color: rgb(0,100,200);
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

a:visited {
	color: rgb(0,80,160);
}

label {
	display: block;
}

input, button, select, textarea {
	font-family: inherit;
	font-size: inherit;
	padding: 0.4em;
	margin: 0 0 0.5em 0;
	box-sizing: border-box;
	border: 1px solid #ccc;
	border-radius: 2px;
}

input:disabled {
	color: #ccc;
}

input[type="range"] {
	height: 0;
}

button {
	color: #333;
	background-color: #f4f4f4;
	outline: none;
}

button:disabled {
	color: #999;
}

button:not(:disabled):active {
	background-color: #ddd;
}

button:focus {
	border-color: #666;
}
`;