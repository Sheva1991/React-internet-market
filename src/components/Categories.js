import React, { useState } from 'react'

const Categories = React.memo(({ items, onClickItem }) => {
    const [active, setActive] = useState(null)

    const SelectCategories = (index) => {
        setActive(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={active === null ? 'active' : ''} onClick={() => SelectCategories(null)}>Все</li>
                {items && items.map((item, index) => {
                    return (
                        <li className={active === index ? 'active' : ''}
                            onClick={() => SelectCategories(index)} key={`${item}_${index}`}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
})



export default Categories
