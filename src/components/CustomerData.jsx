import React from 'react';
import PropTypes from 'prop-types';

const CustomerData = ({name, dni, age}) => {
    return (
        <>
            <div className="row">
                <h1>Datos del CLiente</h1>
            </div>
            <div className="row">
                <form>
                    <div class="form-group">
                        <label for="nameData">Nombre</label>
                        <input type="text" class="form-control disabled" id="nameData" value={name}/>
                    </div>
                    <div class="form-group">
                        <label for="dniData">DNI</label>
                        <input type="text" class="form-control disabled" id="dniData" value={dni} />
                    </div>
                    <div class="form-group">
                        <label for="ageData">Edad</label>
                        <input type="text" class="form-control disabled" id="ageData" value={age} />
                    </div>
                </form>
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