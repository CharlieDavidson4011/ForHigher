import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, variant = 'primary', onClick }) => {
    const className = `btn btn-${variant}`;
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    variant: 'primary',
    onClick: () => { },
};

export default Button;
