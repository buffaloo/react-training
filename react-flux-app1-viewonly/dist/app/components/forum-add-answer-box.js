class ForumAddAnswerBox extends React.Component {

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement("textarea", { id: "addAnswer", className: "col-md-6 col-xs-8" }),
			"\xA0",
			React.createElement("input", { type: "button", className: "btn btn-primary", value: "Add" })
		);
	}
}