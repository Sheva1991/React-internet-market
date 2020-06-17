import React from 'react'
import classNames from 'classnames'


const Button = (props) => {
    return (
        <button className={classNames('button',
            { 'button--outline': props.outline },
            { 'button--cart': props.cart },
            { 'button--add': props.add },
        )}>{props.children}</button>
    )
}

export default Button