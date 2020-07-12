import React from 'react'
import Categories from '../components/Categories'
import SortPopUp from '../components/SortPopUp'
import CardItem from '../components/CardItem'

const Home = ({ data }) => {
    return (

        <div className="container">
            <div className="content__top">
                <Categories items={[
                    'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
                ]} />
                <SortPopUp items={[{ name: 'популярности', type: 'popular' },
                { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' }]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {data.map((item) =>
                    <CardItem key={item.id} {...item} />

                )}
            </div>
        </div>
    )
}

export default Home
