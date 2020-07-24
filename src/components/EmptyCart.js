import React from 'react'
import cartEmpty from '../assets/img/empty-cart.png'

function EmptyCart() {
    return (
        <div class="cart cart--empty">
            <h2>Корзина пустая <span role="img" ariaLabel='sad smile'>😕</span></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmpty} alt="Empty cart" />
            <a href="/" class="button button--black">
                <span>Вернуться назад</span>
            </a>
        </div>
    )
}

export default EmptyCart
