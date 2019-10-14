import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return <li>{tech}<button type="button" onClick={onDelete}>Delete</button></li>
}

TechItem.defaultProps = {
    tech: 'Secreta'
}

TechItem.propTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default TechItem;
