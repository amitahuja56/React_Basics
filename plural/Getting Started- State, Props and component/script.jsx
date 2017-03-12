// This file should have the extension .jsx so that plunker compiles all the JSX
// The index.html file will include this file as script.js (not .jsx) however

// Define a component:
var Button = React.createClass({
  localHandler: function(){
    this.props.localHandler(this.props.incrementBy)
    
  },
  render: function() {
    return ( 
    <button onClick = {
      this.localHandler
    } > Click to Add {this.props.incrementBy} </button>);
  }
});

var Result = React.createClass({

  render: function() {
    return ( <div> value is= {this.props.value} </div>

    );
  }

});


var Main = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    }
  },
  clickHandler: function(increment) {
    this.setState({
      counter: this.state.counter + increment
    })
  },
 render: function() {
  return (
        <div>
          < Button localHandler={this.clickHandler} incrementBy={1} />
          < Button localHandler={this.clickHandler} incrementBy={5} />
          < Button localHandler={this.clickHandler} incrementBy={10} />
          
          < Result value={this.state.counter} />
        </div>
      );  
    }
  });
  // Render a component to the browser:
ReactDOM.render( < Main /> , // What to render (an instance of the Main component)
  document.getElementById('container') // Where to render it
);