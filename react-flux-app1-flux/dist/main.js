ReactDOM.render(React.createElement(Forum, null), mountNode);

var myEmitter = new EventEmitter();

myEmitter.on('event_app_started', function () {
	console.log('started the app');
});

myEmitter.emit('event_app_started');

ForumDispatcher.register(function (action) {
	console.log('received an action');
	console.log(action);
});