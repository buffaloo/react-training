class Forum extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		  allAnswers: ForumStore.getAnswers()
		};

		this.onAddAnswer = this.onAddAnswer.bind(this);
		
		// this.componentDidMount = () => this.componentDidMount();
		// this.componentWillUnmount = () => this.componentWillUnmount();
		// this.onChange = () => this.onChange();

		this.componentDidMount = this.componentDidMount.bind(this);
		this.componentWillUnmount = this.componentWillUnmount.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	render() {
		return (
			<div>
				<ForumHeader />
					<div className="container">
					<ForumQuestion />
					<hr />
					<ForumAnswers allAnswers={ this.state.allAnswers } />
					<hr />
					<h4>Add an answer</h4>
					<ForumAddAnswerBox  onAddAnswer={ this.onAddAnswer }/>
					</div>
			</div>
		)
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

