var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
// components have:
// state
// lifecycle events
// UI

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <h1>Hello Or</h1>
            </React.Fragment>
        )
    }//END render

}

ReactDOM.render(
    <App />,// render this component to the id=app
    document.getElementById('app')
);