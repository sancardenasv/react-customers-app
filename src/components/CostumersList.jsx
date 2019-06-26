import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CostumersList = ({costumers, urlPath}) => {
    return (
        <div>
            {
                costumers.map( c => 
                    <CustomerListItem
                        key={c.dni}
                        name={c.name}
                        editAction={'Editar'}
                        delAction={'Eliminar'}
                        urlPath={urlPath}>
                    </CustomerListItem>
                )
            }
        </div>
    );
};

CostumersList.propTypes = {
    costumers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CostumersList;