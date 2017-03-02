import React, {Component} from 'react';
import {render} from 'react-dom';
import Button from 'react-bootstrap/lib/Button';

class App extends Component {
    render() {
        return (<div className="app">
            <h1>Hello worldd</h1>
            <Button bsStyle="danger">Test</Button>
        </div>);
    }
}

render((<App/>), document.getElementById('app'));
