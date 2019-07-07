import { FETCH_CUSTOMERS } from "./../constants";
import { createAction } from "redux-actions";

const customerList = [
    {
        "dni": "656565650",
        "name": "Pedro Salazar",
        "age": 26
    },
    {
        "dni": "9873637643",
        "name": "Maria Cardonado",
        "age": 37
    },
    {
        "dni": "872323646834",
        "name": "Carlos Murcia",
        "age": 43
    }
];

export const fetchCustomers = createAction(FETCH_CUSTOMERS, () => customerList);