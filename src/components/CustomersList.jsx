import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomersList = ({customers, urlPath}) => {
    return (
        <table className="table table-striped table-hover">
            <tbody>
            {
                customers.map( c => 
                    <CustomerListItem
                        key={c.dni}
                        name={c.name}
                        dni={c.dni}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </CustomerListItem>
                )
            }
            </tbody>
        </table>
    );
};

CustomersList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomersList;