import React from 'react';

function NavBar(props) {
	return (
		<svg
			id="curve-seperator"
			xmlns="http://www.w3.org/2000/svg"
			width="100%"
			height={props.height}
			viewBox="0 0 100 100"
			preserveAspectRatio="none"
		>
			<path d="M 0 0 H 100 V 25 Q 75 90 50 50 Q 25 10 0 75 Z" fill={props.fill} />
		</svg>
	);
}

export default NavBar;
