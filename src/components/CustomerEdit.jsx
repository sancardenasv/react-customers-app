import React, {Component} from 'react';
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

const toNumber = value => value && Number(value);
const onlyGreater = (value, prev, values) => value && (!prev || value > prev ? value : prev);

class CustomerEdit extends Component {
    componentDidMount() {
        if (this.txt) {
            this.txt.focus();
        }
    }

    renderField = ({input, meta, type, lable, withFocus}) => (
        <>
            <div className="input-group-prepend">
                <span className="input-group-text" id={`${lable}Label`}>{lable}</span>
            </div>
            <div>
                <input
                    {...input} type={ type ? type : "text"} className="form-control"
                    ref={withFocus && (txt => this.txt = txt)}>
                </input>
                {meta.touched && meta.error && dangerAlert(meta.error)}
            </div>
        </>
    );

    render() {
        const {handleSubmit, submitting, invalid, onBack, pristine, submitSucceeded} = this.props;
        return (
            <>
                <div className="row">
                    <form name="CustomerEdit" noValidate onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <Field
                                withFocus
                                name="name"
                                component={this.renderField}
                                // validate={isRequired}
                                lable="Nombre">
                            </Field>
                        </div>
                        <div className="input-group mb-3">
                            <Field
                                name="dni"
                                component={this.renderField}
                                // validate={[isRequired, isNumber]}
                                lable="DNI">
                            </Field>
                        </div>
                        <div className="input-group mb-3">
                            <Field
                                name="age"
                                type="number"
                                component={this.renderField}
                                // validate={isNumber}
                                lable="Edad"
                                parse={toNumber}
                                normalize={onlyGreater}>
                            </Field>
                        </div>
                        <CustomerActions>
                            <button type="submit" className="btn btn-success mx-1" disabled={invalid || submitting || pristine}>Guardar</button>
                            <button type="button" className="btn btn-secondary mx-1" onClick={onBack} disabled={submitting}>Cancelar</button>
                        </CustomerActions>
                        <Prompt when={!pristine && !submitSucceeded} message="Se perderan los datos. Está seguro?"></Prompt>
                    </form>
                </div>
            </>
        );
    }

};



CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

export default setPropsAsInitial(reduxForm({form: 'CustomerEdit', validate})(CustomerEdit));