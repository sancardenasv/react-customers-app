import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <>
            <div className="row">
                <h1>Datos del Cliente</h1>
            </div>
            <div className="row">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="nameDataLabel">Nombre</span>
                    </div>
                    <input type="text" className="form-control" readOnly id="nameData" value={name}/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="dniDataLabel">DNI</span>
                    </div>
                    <input type="text" className="form-control" readOnly id="dniData" value={dni}/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="ageDataLabel">Edad</span>
                    </div>
                    <input type="text" className="form-control" readOnly id="ageData" value={age}/>
                </div>
            </div>
        </>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomerData;