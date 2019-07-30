import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from "../constants";

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        const newCustomers = state.reduce((acc, customer) => {
            if(customer.dni === action.payload.dni) {
                return [...acc, action.payload];
            }
            return [...acc, customer];
        }, []);

        return newCustomers;
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter(c => c.dni !== action.payload)
}, []);