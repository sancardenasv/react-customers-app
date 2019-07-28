import { handleActions } from "redux-actions";
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER } from "../constants";

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
    }
}, []);