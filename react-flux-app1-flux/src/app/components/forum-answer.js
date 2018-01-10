class ForumAnswer extends React.Component {

	constructor(props){

		super(props);

		this.markCorrect = this.markCorrect.bind(this);

	}

	propTypes: {
		answer: React.PropTypes.object.isRequired,
		onMarkCorrect: React.PropTypes.func.isRequired,
	};

	markCorrect() {
		this.props.onMarkCorrect(this.props.id);
	}

	render() {
		var answer = this.props.answer;
		var classNames = "panel-body";
		var markAnswer;

		if(!answer.correct) {
			markAnswer = 	<div className="pull-right">
								<small><a href="#" onClick={ this.markCorrect }>Mark as correct</a></small>
							</div>;			
		}
		else
		{
			classNames += " bg-success"
		}



		return (
			<div className="panel panel-default">
				<div className={ classNames }>
					{ answer.body }
					{ markAnswer }
				</div>
			</div>
		);
	};
}
