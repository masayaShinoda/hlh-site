import Link from 'next/link'
import styles from '../styles/categories.module.scss'

export default function Categories({ data }) {
    const thumbnail_alt = "/images/SVG/img-placeholder.svg"

    return (
    <section className={styles.categories_container}>
        <div className={styles.categories_content}>
            <h2>Categories</h2>
            <div className={styles.grid_category}>
            {data && data.map(i => (
                <Link href={{
                    pathname: '/products',
                    query: { category: i.category },
                }}
                key={i.id}>
                <a
                className={styles.box_category}
                >
                    {i.thumbnail ? 
                    <img src={i.thumbnail.url} alt={i.category + " thumbnail"} /> 
                    : <img src={thumbnail_alt} alt="Thumbnail unavailable." />}
                    <div className={styles.title_third}>
                        {i.icon ? 
                        <img src={i.icon.url} alt={i.category + " icon"} /> : null}
                        <h3>{i.category}</h3>
                    </div>
                </a>
                </Link>
            ))}
            </div>
        </div>
    </section>
    )
}