import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const Button = ({ onClick, className, outline, cart, add, children }) => {
    return (
        <button onClick={onClick} className={classNames('button', className,
            { 'button--outline': outline },
            { 'button--cart': cart },
            { 'button--add': add },
        )}>{children}</button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
}

export default Button