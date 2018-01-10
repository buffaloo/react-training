class Forum extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			allAnswers: ForumStore.getAnswers()
		};

		this.onAddAnswer = this.onAddAnswer.bind(this);

		// this.componentDidMounnt = () => this.componentDidMounnt();
		// this.componentWillUnmount = () => this.componentWillUnmount();
		// this.onChange = () => this.onChange();

		this.componentDidMounnt = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	render() {
		return React.createElement(
			"div",
			null,
			React.createElement(ForumHeader, null),
			React.createElement(
				"div",
				{ className: "container" },
				React.createElement(ForumQuestion, null),
				React.createElement("hr", null),
				React.createElement(ForumAnswers, { allAnswers: this.state.allAnswers }),
				React.createElement("hr", null),
				React.createElement(
					"h4",
					null,
					"Add an answer"
				),
				React.createElement(ForumAddAnswerBox, { onAddAnswer: this.onAddAnswer })
			)
		);
	}

	componentDidMount() {
		ForumStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		ForumStore.removeListener(this.onChange);
	}

	onChange() {
		this.setState({ allAnswers: ForumStore.getAnswers() });
	}

	onAddAnswer(answerText) {
		ForumActions.addNewAnswer(answerText);
	}
}