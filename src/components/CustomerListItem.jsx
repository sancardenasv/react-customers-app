import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CustomerListItem = ({name, editAction, delAction, urlPath, dni}) => {
    return (
        <tr>
            <th scope="row">
                <Link to={`${urlPath}${dni}`}>{name}</Link>
            </th>
            <td>
                <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
            </td>
            <td>
                <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
            </td>
        </tr>
    );
};

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
};

export default CustomerListItem;