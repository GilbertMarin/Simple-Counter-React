import React from "react";
import propTypes from "prop-types";

export const Counter = props => {
	return (
		<div className="row" id="BigCounter">
			<div className="far fa-clock"></div>
			<div className="contador">{props.numberOne}</div>
			<div className="contador">{props.numberTwo}</div>
			<div className="contador">{props.numberThree}</div>
			<div className="contador">{props.numberFour}</div>
			<div className="contador">{props.numberFive}</div>
			<div className="contador">{props.numberSix}</div>
		</div>
	);
};
Counter.propTypes = {
	numberOne: propTypes.number,
	numberTwo: propTypes.number,
	numberThree: propTypes.number,
	numberFour: propTypes.number,
	numberFive: propTypes.number,
	numberSix: propTypes.number
};
