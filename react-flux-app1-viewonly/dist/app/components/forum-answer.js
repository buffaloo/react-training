class ForumAnswer extends React.Component {

	render() {
		var answer = this.props.answer;

		return React.createElement(
			"div",
			{ className: "panel panel-default" },
			React.createElement(
				"div",
				{ className: "panel-body" },
				answer.body
			)
		);
	}
}