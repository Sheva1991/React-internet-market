import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import SortPopUp from '../components/SortPopUp'
import CardItem from '../components/CardItem'
import { useSelector, useDispatch } from 'react-redux'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizza';
import CardItemPlaceholder from '../components/CardItemPlaceholder'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryes = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }]


const Home = () => {
    const [menuActive, setmenuActive] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const cardItems = useSelector(({ cart }) => cart.items)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    const setMenuCategoiesClose = () => {
        setmenuActive(!menuActive)
    }

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
        setmenuActive(false)
    }, [dispatch])

    const selectSortBy = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [dispatch])
    const handleAddPizzaToCart = React.useCallback((obj) => {
        dispatch(addPizzaToCart(obj))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [dispatch, category, sortBy])

    return (

        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryes}
                    onHandlerCategoies={setMenuCategoiesClose}
                    menuActive={menuActive}
                />
                <SortPopUp activeSortType={sortBy.type} items={sortItems} onClickSortBy={selectSortBy} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item, index) => {
                    if (isLoaded) {
                        return (
                            <CardItem key={item.id} {...item}
                                onClickAddPizza={handleAddPizzaToCart}
                                addedCount={cardItems[item.id] && cardItems[item.id].items.length}
                            />)
                    } else {
                        return (<CardItemPlaceholder key={index} />)
                    }
                }
                )
                    //  :
                    //     Array(items.length).fill(0).map((item, index) =>
                    //         <CardItemPlaceholder key={index} />)
                }
            </div>
        </div>
    )
}

export default Home
