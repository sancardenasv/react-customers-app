import React from 'react';
import PropTypes from 'prop-types';
import CustomerActions from "./../components/CustomersActions";

const CustomerData = ({name, dni, age, onBack}) => {
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
                    <button type="button" className="btn btn-secondary" onClick={onBack}>Regresar</button>
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
};

export default CustomerData;