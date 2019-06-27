import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const CustomerListItem = ({name, editAction, delAction, urlPath, dni}) => {
    return (
        <>
            <div className="col-7">
                <Link to={`${urlPath}${dni}`}>{name}</Link>
            </div>
            <div className="col-2">
                <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
            </div>
            <div className="col-3">
                <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
            </div>
        </>
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