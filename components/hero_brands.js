import Link from 'next/link'
import styles from '../styles/hero.module.scss'

export default function HeroBrands({ data }) {

    function scroll_div(direction, element) {
        if(direction === "left") {
            document.getElementById(element).scrollLeft -= 240;
        }
        if(direction === "right") {
            document.getElementById(element).scrollLeft += 240;
        }
    }    

    return (
    <div className={styles.hero_products_container}>
        <div className={styles.hero_products_content}>
            <h2>Products</h2>
            <div className={styles.brands_slideshow_container}>
                <button 
                onClick={() => scroll_div("left", "brands_slideshow")}
                className={styles.hero_products_arrow_left}>
                <i className="arrow arrow_left" />
                </button>
                <div 
                id="brands_slideshow"
                className={styles.brands_slideshow}>
                {data && data.map(i => 
                    <img
                    loading="lazy"
                    key={i.id}
                    src={i.brandLogo.url} alt={i.brandName}
                    className={" animate__animated animate__slideInRight animate__delay-2s"} />
                )}
                </div>
                <button 
                onClick={() => scroll_div("right", "brands_slideshow")}
                className={styles.hero_products_arrow_right}>
                <i className="arrow arrow_right" />
                </button>
            </div>
            <div
            style={{display: "flex", justifyContent: "center", width: "100%", padding: "1.5rem 0"}}
            >
                <Link href="/about#available_brands">
                    <a
                    className="link_dotted">
                    See all available brands</a>
                </Link>
            </div>
        </div>

    </div>
    )
}