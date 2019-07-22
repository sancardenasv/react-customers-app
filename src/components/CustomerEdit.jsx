import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from "redux-form";
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import CustomerActions from "./../components/CustomersActions";
import { Prompt } from "react-router-dom";

const isNumber = value => {
    return isNaN(Number(value));
};

const dangerAlert = msg => (
    <div className="alert alert-danger mb-0" role="alert">
        {msg}
    </div>
);

const validate = values => {
    const error = {};
    if (!values.name) {
        error.name = "El campo nombre es requerido.";
    }

    if (!values.dni) {
        error.dni = "El DNI es un campo obligatorio.";
    }

    if (isNumber(values.age)) {
        error.age = "La edad debe ser numérica."
    }

    return error;
};

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

const toNumber = value => value && Number(value);
const onlyGreater = (value, prev, values) => value && (!prev || value > prev ? value : prev);

const CustomerEdit = ({name, dni, age, handleSubmit, submitting, invalid, onBack, pristine, submitSucceeded}) => {
    return (
        <>
            <div className="row">
                <form name="CustomerEdit" noValidate onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <Field
                            name="name"
                            component={MyField}
                            // validate={isRequired}
                            lable="Nombre">
                        </Field>
                    </div>
                    <div className="input-group mb-3">
                        <Field
                            name="dni"
                            component={MyField}
                            // validate={[isRequired, isNumber]}
                            lable="DNI">
                        </Field>
                    </div>
                    <div className="input-group mb-3">
                        <Field
                            name="age"
                            type="number"
                            component={MyField}
                            // validate={isNumber}
                            lable="Edad"
                            parse={toNumber}
                            normalize={onlyGreater}>
                        </Field>
                    </div>
                    <CustomerActions>
                        <button type="submit" className="btn btn-success" disabled={invalid || submitting || pristine}>Guardar</button>
                        <button type="button" className="btn btn-secondary" onClick={onBack} disabled={submitting}>Cancelar</button>
                    </CustomerActions>
                    <Prompt when={!pristine && !submitSucceeded} message="Se perderan los datos. Está seguro?"></Prompt>
                </form>
            </div>
        </>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

export default setPropsAsInitial(reduxForm({form: 'CustomerEdit', validate})(CustomerEdit));