class ForumAnswer extends React.Component {
	
	displayName: "ForumAnswer";

	propTypes: {
		answer: React.PropTypes.object.isRequired
	};

	render() {
		var answer = this.props.answer;

		return (
			<div className="panel panel-default">
				<div className="panel-body">
					{ answer.body }
				</div>
			</div>
		);
	};
}
