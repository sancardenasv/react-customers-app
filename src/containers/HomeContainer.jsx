import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import AppFrame from "./../components/AppFrame";
import CustomersActions from "./../components/CustomersActions";

class HomeContainer extends Component {
    customersListOnClick = () => {
        console.log("customersListOnClick");
        this.props.history.push('/customers');
    };

    render() {
        return (
            <div className="row">
                <AppFrame
                    header='Home'
                    body={
                        <div className="row justify-content-center">
                            Esta es la pantalla inicial
                            <CustomersActions>
                                <button type="button" className="btn btn-secondary"
                                    onClick={this.customersListOnClick}>Listado de clientes
                                </button>
                            </CustomersActions>
                        </div>
                    }>
                </AppFrame>
            </div>
        );
    }
}

export default withRouter(HomeContainer);