import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Route, withRouter } from "react-router-dom";
import { SubmissionError } from "redux-form";
import AppFrame from "./../components/AppFrame";
import { getCustomerByDni } from '../selectors/customers';
import CustomerEdit from "./../components/CustomerEdit";
import CustomerData from "./../components/CustomerData";
import { fetchCustomers } from "./../actions/fetchCustomers";
import { updateCustomer } from "./../actions/updateCustomers";

class CustomerContainer extends Component {
    componentDidMount() {
        if (!this.props.customer) {
            this.props.fetchCustomers();
        }
    };

    handleSubmit = values => {
        console.log(JSON.stringify(values));
        return this.props.updateCustomer(values.dni, values).catch(e => {
            console.log("CATCH", e);
            throw new SubmissionError({age: e});
        });
    };

    handleOnBack = () => {
        this.props.history.goBack();
    };

    renderBody = () =>(
        <Route path="/customers/:dni/edit" children={
            ({match}) => {
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl
                        {...this.props.customer}
                        onSubmit={this.handleSubmit}
                        onSubmitSuccess={this.handleOnBack}
                        onBack={this.handleOnBack} />
                }
        }></Route>
    );

    render() {
        return (
            <div>
                <AppFrame header={`Edición del cliente ${this.props.dni}`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

// Set properties from state
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});
const mapDispatchToProps = {
    fetchCustomers,
    updateCustomer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));