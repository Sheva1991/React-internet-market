import React, { useState } from 'react'
import Button from './Button'
import classNames from 'classnames'
import PropTypes from 'prop-types'


const CardItem = ({ id, name, imageUrl, price, types, sizes, onClickAddPizza, addedCount }) => {
    const typeNames = ['тонкое', 'традиционное']
    const sizesName = [26, 30, 40]
    const [activeType, setActiveType] = useState(types[0])
    const [activeSize, setActiveSize] = useState(0)

    const selectType = (index) => {
        setActiveType(index)
    }
    const selectSize = (index) => {
        setActiveSize(index)
    }
    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            size: sizesName[activeSize],
            type: typeNames[activeType]
        }
        onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <div className='pizza-block__image'>
                <img
                    src={imageUrl}
                    alt="Pizza"
                />
            </div>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typeNames.map((type, index) => <li key={type} onClick={() => selectType(index)}
                        className={classNames({
                            active: activeType === index,
                            disabled: !types.includes(index),

                        })}>{type}</li>)}
                </ul>
                <ul>
                    {sizesName.map((size, index) => <li key={size} onClick={() => selectSize(index)}
                        className={classNames({
                            'active': activeSize === index,
                            'disabled': !sizes.includes(size),

                        })}>{`${size} см.`}</li>)}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} грн</div>
                <Button outline add
                    onClick={onAddPizza}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {addedCount && <i>{addedCount}</i>}
                </Button>
            </div>
        </div >

    )
}

CardItem.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onAddPizza: PropTypes.func,
    addedCount: PropTypes.number
}

CardItem.defaultProps = {
    name: '',
    price: 0,
    imageUrl: '',
    types: [],
    sizes: []
}

export default CardItem
