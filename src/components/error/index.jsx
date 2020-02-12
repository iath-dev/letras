import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
    <p className="alert alert-danger text-center p-2">{message}</p>
)

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default ErrorMessage;
