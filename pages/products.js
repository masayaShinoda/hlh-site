import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/products.module.scss'

function Products({ productsData }) {
    const router = useRouter()
    const {
      query: { category },
    } = router

    const [activeCateg, setActiveCateg] = useState(null)

    useEffect(() => {
        if(typeof category !== "undefined")
            setActiveCateg(category)
    }, [category])

    const handleChange = e => {
        const target = e.target
        if(target.checked) {
            setActiveCateg(target.value)
            router.push(`/products/?category=${encodeURIComponent(target.value)}`, undefined, { shallow: true })
        }
    }
    
    return <Layout activePage={"products"}>
    <div className={styles.products_page_container}>
        <div className={styles.products_page_content}>
            <div className={styles.categ_upper_section}>
                <h1>Products</h1>
                <label>Select product category to display.</label>
            </div>
            <div className={styles.categ_radio_section}>
            {productsData.data.allProductCategories ? 
            productsData.data.allProductCategories.map((i, order) => 
            {if(i.available === true) 
            return <div className={styles.radio_option_display} key={i.id}>
                <label htmlFor={i.id}>
                    <input
                    type="radio"
                    id={i.id}
                    name="category_selection"
                    value={i.category}
                    checked={activeCateg === i.category}
                    onChange={handleChange}
                    tabIndex={order + 5}
                    />
                        {i.icon ?
                        <img
                        src={i.icon.url} alt={`${i.category} icon`}
                        loading="lazy"
                        width="80" height="80" 
                        style={{background: styles.blue}}
                        />
                        : null}
                        <span>{i.category}</span>
                </label>
            </div>}
            ) : <span>...</span>}
            </div>
            <div className={styles.products_listing_container}>
                <h2>{activeCateg ? activeCateg : "Choose a category."}</h2>
                {activeCateg ?
                <div className={styles.products_listing_grid}>
                    {productsData.data.allProductListings ? 
                    productsData.data.allProductListings.map(i => {
                        if(i.category.category === activeCateg && i.available === true) {
                            return <>
                            <div className={styles.product_box} key={i.id}>
                                <img 
                                className={styles.product_thumbnail}
                                src={i.photos[0]["url"]} alt={`Photo of ${i.name}`} loading="lazy" />
                                <div className={styles.product_box_lower_third}>
                                    <h3>{i.name}</h3>
                                    <p className={styles.brand}>{i.brand ? i.brand.brandName : null}</p>
                                    <p className={styles.price}>{i.price ? `$${i.price}` : null}</p>
                                </div>
                            </div>
                            </>
                        }
                    }
                    ) : <span>...</span>}
                </div>
                : null}
            </div>
        </div>
    </div>

    </Layout>
}

export async function getStaticProps() {
    const token = process.env.DATO_API_TOKEN
    
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch(
        'https://graphql.datocms.com/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({
            query: `{ 
            allProductCategories {
                available
                id
                category
                icon {
                    url
                }
                thumbnail {
                    url
                }
            }
            allProductListings {
                available
                id
                category {
                    id
                    category
                    thumbnail {
                    url
                    }
                }
                name
                photos {
                    url
                }
                price
                updatedAt
                brand {
                    available
                    brandName
                    id
                }
            }
            }`
          }),
        }
    )
    const productsData = await res.json()
    
    return {
      props: {
        productsData,
      },
    }
}

export default Products