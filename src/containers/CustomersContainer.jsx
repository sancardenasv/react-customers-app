import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from './../components/AppFrame';
import CustomerList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';

const customers = [
    {
        "dni": "656565650",
        "name": "Pedro Salazar",
        "age": 26
    },
    {
        "dni": "9873637643",
        "name": "Maria Cardonado",
        "age": 37
    },
    {
        "dni": "872323646834",
        "name": "Carlos Murcia",
        "age": 43
    }
];

class CustomersContainer extends Component {
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
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        );
    }
}

CustomersContainer.propTypes = {

};

export default CustomersContainer;