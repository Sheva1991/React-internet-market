import React from 'react'
import ContentLoader from "react-content-loader"

function CardItemPlaceholder() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={0}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="134" cy="118" r="118" />
            <rect x="0" y="255" rx="4" ry="4" width="280" height="25" />
            <rect x="0" y="295" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="404" rx="4" ry="4" width="88" height="30" />
            <rect x="117" y="396" rx="22" ry="22" width="161" height="44" />
        </ContentLoader>
    )
}

export default CardItemPlaceholder
