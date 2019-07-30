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
import { deleteCustomer } from "./../actions/deleteCustomer";

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

    handleOnDelete = dni => {
        console.log("Handle On Delete");
        this.props.deleteCustomer(dni).then(v => {
            this.handleOnBack();
        });
    }

    renderBody = () =>(
        <Route path="/customers/:dni/edit" children={
            ({match: isEdit}) => (
                <Route path="/customers/:dni/del" children={
                    ({match: isDelete}) => {
                        return this.renderCustomerControl(isEdit, isDelete);
                    }
                }></Route>
            )
        }></Route>
    );

    renderCustomerControl = (isEdit, isDelete) => {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return <CustomerControl {...this.props.customer}
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnBack}
                    onBack={this.handleOnBack}
                    isDeleteAllowed={!!isDelete}
                    onDelete={this.handleOnDelete} />;
    }

    render() {
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`}
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
    deleteCustomer: PropTypes.func.isRequired,
};

// Set properties from state
const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props)
});
const mapDispatchToProps = {
    fetchCustomers,
    updateCustomer,
    deleteCustomer
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainer));