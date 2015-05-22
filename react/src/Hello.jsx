/** @jsx React.DOM */
var React = require('react');

// var Hello = React.createClass({
//   getInitialState: function () {
//     return { name: "not clicked" };
//   },
//   onClick: function () {
//     this.setState( { name: "clicked" });
//   },
//   render: function() {
//     return <div onClick={ this.onClick } >{this.state.name}</div>;
//   }
// });

// module.exports = Hello;

var Hello = React.createClass({
  render: function() {
    return (
      <p>Hello <span>{this.props.name}</span></p>
    );
  }
})

React.render(<Hello name="React" />, document.getElementById("example"));
