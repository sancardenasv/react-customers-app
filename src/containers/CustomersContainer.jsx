import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "./../actions/fetchCustomers";
import AppFrame from './../components/AppFrame';
import CustomerList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';
import { getCustomers } from '../selectors/customers';

class CustomersContainer extends Component {
    componentDidMount() {
        if (this.props.customers.length === 0) {
            this.props.fetchCustomers();
        }
    };

    handleAddNew = () => {
        this.props.history.push('/customers/new');
    };

    renderBody = customers => (
        <div className="row justify-content-center">
            <CustomerList customers={customers}
                urlPath={'customers/'}>
            </CustomerList>
            <CustomersActions>
                <button type="button" className="btn btn-secondary"
                    onClick={this.handleAddNew}>Nuevo Cliente
                </button>
            </CustomersActions>
        </div>
    );

    render() {
        return (
            <div className="row">
                <AppFrame header={'Listado de clientes'}
                    body={this.renderBody(this.props.customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

// Inject properties
const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers())
});

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

CustomersContainer.defaultProps = {
    customers: []
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomersContainer));