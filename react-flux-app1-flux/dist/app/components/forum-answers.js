class ForumAnswers extends React.Component {

	constructor(props) {

		super(props);

		this.onMarkCorrect = this.onMarkCorrect.bind(this);
	}

	render() {

		var allAnswers = this.props.allAnswers;
		var answers = [];

		for (var key in allAnswers) {
			answers.push(React.createElement(ForumAnswer, { key: key, id: key, answer: allAnswers[key], onMarkCorrect: this.onMarkCorrect }));
		}

		return React.createElement(
			"div",
			null,
			answers
		);
	}

	onMarkCorrect(id) {
		ForumActions.markAnswerCorrect(id);
	}
}