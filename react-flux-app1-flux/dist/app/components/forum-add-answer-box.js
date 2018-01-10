
class BaseComponent extends React.Component {
	_bind(...methods) {
		methods.forEach(method => this[method] = this[method].bind(this));
	}
}

class ForumAddAnswerBox extends BaseComponent {

	constructor(props) {

		super(props);

		this.state = {
			value: ''
		};

		this._bind('addAnswer', 'onChange');
		//this.addAnswer = this.addAnswer.bind(this);
		//this.onChange = this.onChange.bind(this);
	}

	addAnswer() {
		var self = this;
		self.props.onAddAnswer(self.state.value);
	}

	onChange(event) {
		var self = this;
		self.setState({
			value: event.target.value
		});
	}

	render() {
		return React.createElement(
			'div',
			null,
			React.createElement('textarea', { id: 'addAnswer', className: 'col-md-6 col-xs-8', onChange: this.onChange }),
			'\xA0',
			React.createElement('input', { type: 'button', className: 'btn btn-primary', value: 'Add', onClick: this.addAnswer })
		);
	}
}