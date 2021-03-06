import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import { navigate } from "@reach/router";
import { restockThunk } from "../../thunk";
import "./styles.css";

const restockFormConfig = [
	{
		name: "name",
		type: "text"
	},
	{
		name: "quantity",
		type: "number",
		placeHolder: "0",
		min: "0"
	},
	{
		name: "price",
		type: "number",
		placeHolder: "0",
		min: "0"
	},
	{
		name: "type",
		type: "text",
		placeHolder: "Example: Lunch, Supper"
	}
];

class RestockForm extends Component {
	static propTypes = {
		dispatch: PropTypes.func
	};

	handleSubmit = (state, setState) => e => {
		e.preventDefault();
		const mealData = state.formData;
		restockThunk(this.props.dispatch, mealData).then(result => {
			if (Boolean(result)) {
				navigate("/");
			}
		});
	};

	render() {
		return (
			<Form
				config={restockFormConfig}
				handleSubmit={this.handleSubmit}
				cta="Update"
			/>
		);
	}
}

export default RestockForm;
