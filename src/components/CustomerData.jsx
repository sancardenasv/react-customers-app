import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from "./../components/CustomersActions";

const CustomerData = ({name, dni, age, onBack, isDeleteAllowed, onDelete}) => {
    return (
        <>
            <div className="row">
                <h1>Datos del Cliente</h1>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="nameDataLabel">Nombre</span>
                    </div>
                    <input type="text" className="form-control" readOnly id="nameData" value={name}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="dniDataLabel">DNI</span>
                    </div>
                    <input type="text" className="form-control" readOnly id="dniData" value={dni}/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="ageDataLabel">Edad</span>
                    </div>
                    <input type="text" className="form-control" readOnly id="ageData" value={age}/>
                </div>
                <CustomerActions>
                    <button type="button" className="btn btn-secondary mx-1" onClick={onBack}>Regresar</button>
                    {
                        isDeleteAllowed
                        && <button type="button" className="btn btn-secondary mx-1" onClick={() => onDelete(dni)}>Eliminar</button>
                    }
                </CustomerActions>
            </div>
        </>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllowed: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustomerData;