import React from 'react'
import PropTypes from 'prop-types'

export const MyButton = ({ backgroundColor, primary, count, label, onclick }) => {
    return <button style={{ background: backgroundColor, color: primary ? 'red' : 'black' }} onClick={onclick}>
        {count}{label}
    </button>
}

MyButton.propTypes = {
    label: PropTypes.string,
    backgroundColor: PropTypes.string,
    primary: PropTypes.bool,
    onclick: PropTypes.func,
    count: PropTypes.number.isRequired
}

MyButton.defaultProps = {
    backgroundColor: null,
    primary: false
}