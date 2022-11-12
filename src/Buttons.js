import React from "react";

export default function Buttons() {
	return (
		<div id="App-buttons">
			<a href="ale.galach@gmail.com" target="_blank">
				<button type="button" className="btn" id="mail-btn">
					Email
				</button>
			</a>
			<a
				href="https://github.com/Rachelkakoderka"
				rel="noreferrer"
				target="_blank"
			>
				<button type="button" className="btn" id="git-btn">
					{/* <i class="icon-github-squared btn-icon"></i> */}
					GitHub
				</button>
			</a>
		</div>
	);
}
