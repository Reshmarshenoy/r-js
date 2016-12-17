var Carts = React.createClass({
  render: function() {
    return (
    	<div>
      	<CounterLogicWrapper />
      </div>
    );
  }
});


var CounterLogicWrapper = React.createClass({
	getInitialState: function() {
  	return {
    	counter: 0
    };
  },
	increment: function() {
  	this.setState({
    	counter: this.state.counter + 1
    });
  },  
  render: function() {
    return (
    	<div>
      	<Counter counter={this.state.counter} />
    		<button onClick={this.increment}>increment</button>
      </div>
    );
  }
});

var Counter = React.createClass({
  render: function() {
    return <div className="badge">{this.props.counter}</div>;
  }
});

