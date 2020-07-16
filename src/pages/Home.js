import React from 'react'
import Categories from '../components/Categories'
import SortPopUp from '../components/SortPopUp'
import CardItem from '../components/CardItem'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../redux/actions/filters'

const categoryes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }]


const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (

        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryes} />
                <SortPopUp items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item) =>
                    <CardItem key={item.id} {...item} />
                )}
            </div>
        </div>
    )
}

export default Home
