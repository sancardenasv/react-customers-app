import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { SubmissionError } from "redux-form";
import AppFrame from "./../components/AppFrame";
import CustomerEdit from '../components/CustomerEdit';
import { insertCustomer } from "./../actions/insertCustomers";

class NewCustomerContainer extends Component {
    handleSubmit = (values) => {
        console.log(JSON.stringify(values));
        return this.props.insertCustomer(values).catch(e => {
            console.log("CATCH", e);
            throw new SubmissionError({dni: e});
        });

    };
    handleOnsSubmitSuccess = () => {
        this.props.history.goBack();
    };
    
    handleOnBack = () => {
        this.props.history.goBack();
    };

    renderBody = () => {
        return <CustomerEdit 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnsSubmitSuccess}
                    onBack={this.handleOnBack}>
                </CustomerEdit>
    };

    render() {
        return (
            <div>
                <AppFrame
                    header={`Creación de cliente`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,

};

export default withRouter(connect(null, {insertCustomer})(NewCustomerContainer));