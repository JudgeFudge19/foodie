import React, { Component } from "react";
import PropTypes from "prop-types";
import MapArray from "../MapArray";
import Button from "../Button";
import "./styles.css";

const buttonMap = props => ({
	...props,
	label: `${props.name} ${props.quantity}`,
	[props.quantity < 1 && "disabled"]: true
});

class FoodMenu extends Component {
	static propTypes = {
		stockData: PropTypes.array,
		dispatch: PropTypes.func
	};

	handleClick = e => {
		const foodId = e.target.id;
		this.props.dispatch({ type: "ADD_ORDER", payload: { id: foodId } });
	};

	applyFilter = e => {
		const type = e.target.value;
		this.props.dispatch({ type: "APPLY_FILTER", payload: { data: { type } } });
	};

	render() {
		return (
			<div className="menu">
				<div className="title with-filter">
					<h2>Menu</h2>
					<div className="food-sort">
						<label>Type:</label>
						<select onChange={this.applyFilter}>
							<option value="All">All</option>
							<option value="Breakfast">Breakfast</option>
							<option value="Lunch">Lunch</option>
							<option value="Supper">Supper</option>
						</select>
					</div>
				</div>
				<div className="menu_button-group">
					<MapArray from={this.props.stockData} map={buttonMap}>
						<Button onClick={this.handleClick} />
					</MapArray>
				</div>
			</div>
		);
	}
}

export default FoodMenu;
