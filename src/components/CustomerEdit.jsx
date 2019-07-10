import React from 'react';
import PropTypes from 'prop-types';

const CustomerEdit = ({name, dni, age}) => {
    return (
        <>
            <div className="row">
                <h1>Edición del Cliente</h1>
            </div>
            <div className="row">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="nameDataLabel">Nombre</span>
                    </div>
                    <input type="text" className="form-control" id="nameData" value={name}/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="dniDataLabel">DNI</span>
                    </div>
                    <input type="text" className="form-control" id="dniData" value={dni}/>
                </div>
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="ageDataLabel">Edad</span>
                    </div>
                    <input type="text" className="form-control" id="ageData" value={age}/>
                </div>
            </div>
        </>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number
};

export default CustomerEdit;