import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainer from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';
import NewCustomerContainer from './containers/NewCustomerContainer';

class App extends Component {
    renderHome = () => <h1>Home</h1>;
    renderCustomerListContainer = () => <h1>Customer List Container</h1>;
    renderCustomerNewContainer = () => <h1>Customer New Container</h1>;
    renderCustomerContainer = (props) => <CustomerContainer dni={props.match.params.dni}/>;

    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={HomeContainer} />
                    <Route exact path="/customers/" component={CustomersContainer} />
                    <Switch>
                        <Route path="/customers/new" component={NewCustomerContainer} />
                        <Route path="/customers/:dni" render={this.renderCustomerContainer} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;