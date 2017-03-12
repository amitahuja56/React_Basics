// This file should have the extension .jsx so that plunker compiles all the JSX
// The index.html file will include this file as script.js (not .jsx) however
var Card=React.createClass({
  getInitialState: function(){
    return  { id: 1 };
    },
    
  componentDidMount:function(){
    this.setState({id:4})
  },
  render: function(){
    return(
      <h2>{this.state.id}</h2>
      
      )
  }
});



// Define a component:
var Main = React.createClass({
  render: function() {
    return (
      <div>
        hi
      <Card />
      </div>
      
    );
  }
});

// Render a component to the browser:
ReactDOM.render(
  <Main />, // What to render (an instance of the Main component)
  document.getElementById('container') // Where to render it
);

// If nothing appears in the browser, check the dev-tools console for errors.

// *******************************************************************
// *  For an alternative playground tool, check out jsComplete Editor  *
// *  http://jscomplete.com/interactive-learning-demo/               *
// *******************************************************************