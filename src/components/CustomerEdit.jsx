import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => (
    !value && "Este campo es reuqerido"
);

const isNumber = value => (
    isNaN(Number(value)) && "El campo debe ser numérico"
);

const dangerAlert = msg => (
    <div className="alert alert-danger mb-0" role="alert">
        {msg}
    </div>
);

const MyField = ({input, meta, type, lable}) => (
    <>
        <div className="input-group-prepend">
            <span className="input-group-text" id={`${lable}Label`}>{lable}</span>
        </div>
        <div>
            <input {...input} type={ type ? type : "text"} className="form-control"></input>
            {meta.touched && meta.error && dangerAlert(meta.error)}
        </div>
    </>
);
const CustomerEdit = ({name, dni, age}) => {
    return (
        <>
            <div className="row">
                <h1>Edición del Cliente</h1>
            </div>
            <div className="row">
                <form name="CustomerEdit">
                    <div className="input-group mb-3">
                        <Field
                            name="name"
                            component={MyField}
                            validate={isRequired}
                            lable="Nombre">
                        </Field>
                    </div>
                    <div className="input-group mb-3">
                        <Field
                            name="dni"
                            component={MyField}
                            validate={[isRequired, isNumber]}
                            lable="DNI">
                        </Field>
                    </div>
                    <div className="input-group mb-3">
                        <Field
                            name="age"
                            type="number"
                            component={MyField}
                            validate={isNumber}
                            lable="Edad">
                        </Field>
                    </div>
                </form>
            </div>
        </>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number
};

export default setPropsAsInitial(reduxForm({form: 'CustomerEdit'})(CustomerEdit));