class ForumAnswer extends React.Component {

	constructor(props) {

		super(props);

		this.markCorrect = this.markCorrect.bind(this);
	}

	markCorrect() {
		this.props.onMarkCorrect(this.props.id);
	}

	render() {
		var answer = this.props.answer;
		var classNames = "panel-body";
		var markAnswer;

		if (!answer.correct) {
			markAnswer = React.createElement(
				"div",
				{ className: "pull-right" },
				React.createElement(
					"small",
					null,
					React.createElement(
						"a",
						{ href: "#", onClick: this.markCorrect },
						"Mark as correct"
					)
				)
			);
		} else {
			classNames += " bg-success";
		}

		return React.createElement(
			"div",
			{ className: "panel panel-default" },
			React.createElement(
				"div",
				{ className: classNames },
				answer.body,
				markAnswer
			)
		);
	}
}