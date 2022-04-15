import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'

import styles from '../styles/hero.module.scss'

export default function HeroBrands({ data }) {
    // const defaultBrands = [
    //     {},
    //     {},
    //     {},
    // ]

    // const [brands, setBrands] = useState({ defaultBrands })
    // useEffect(() => {
    //     if(data) {
    //         setBrands(data)
    //         console.log(data)
    //     } else {
    //         setBrands(defaultBrands)
    //     }
    // }, [data])

    return (
        <div className={styles.hero_products_container}>
            <div className={styles.hero_products_content 
                + " animate__animated animate__backInRight animate__fast"}>
                <h2>Products</h2>
                <div className={styles.brands_slideshow}>
                {data && data.map(i => 
                    <img
                    loading="lazy"
                    key={i.id}
                    src={i.brandLogo.url} alt={i.brandName} />
                )}
                </div>
            </div>

        </div>
    )
}