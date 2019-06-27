import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

const AppFrame = ({header, body, footer}) => {
    return (
        <div className="card col-12">
            <div className="card-header">
                <AppHeader title={header}></AppHeader>
            </div>
            <div className="card-body">
                <div>{body}</div>
            </div>
            <div className="card-footer">
                <div>Applicación simple de ejemplo</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;