import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'
import { Carousel } from 'react-responsive-carousel'
import { MessengerChat, showMessenger, hideMessenger, showDialog, hideDialog, setMessengerHeight } from "react-messenger-chat-plugin"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from '../../styles/products.module.scss'

function Product({ productData }) {

    const router = useRouter();
    const {id} = router.query

    const product_data = productData.data.allProductListings[0]
    // console.log(product_data.description)

    const currency = "$"

    return <Layout>
        <div className={styles.product_page_container}>
            <div className={styles.product_page_content}>
            {product_data && <div className={styles.product_details}>
                <div className={styles.details_container}>
                    <span className={styles.categ_brand_section}>
                        <p className={styles.category}>
                            {product_data.category.category}
                        </p>
                        <img
                        className={styles.brandLogo} 
                        src={product_data.brand.brandLogo.url} 
                        alt={product_data.brand.brandName} />
                    </span>
                    <h1 key={id}>{product_data.name}</h1>
                    <span className={styles.description}>
                        {parse(product_data.description)}
                    </span>
                    <span className={styles.price_action_section}>
                        <p className={styles.price}>
                            {currency}{product_data.price}
                        </p>
                        <button
                        className="action_btn"
                        onClick={() => {showMessenger(true)}}>
                            Send Message
                        </button>
                    </span>
                </div>
                <div className={styles.gallery_container}>
                    {product_data.photos ? 
                        <Carousel
                        showThumbs={false}
                        showStatus={false}
                        autoPlay
                        infiniteLoop
                        interval={4000}>
                        {product_data.photos.map(i => 
                        <img key={id}
                        src={i.url} 
                        alt={`Photo of ${product_data.name}`} 
                        />)}
                        </Carousel>
                    : null}
                </div>
            </div>}
            </div>
        </div>
    </Layout>
}



export async function getStaticPaths() {
    const token = process.env.DATO_API_TOKEN
    
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
                allProductListings {
                    id
                }
            }`
          }),
        }
    )

    const data = await res.json()
    // console.log(data.data)

    const paths = data && data.data.allProductListings.map(product => {
        return {
            params: { 
                id: `${product.id}` 
            }
        }
    })

    return { paths, fallback: false }
}

export async function getStaticProps(context) {
    const token = process.env.DATO_API_TOKEN
    
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
            allProductListings(filter: {id: {eq: "${context.params.id}"}}) {
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
                    id
                    available
                    brandName
                    brandLogo {
                        url
                    }
                }
                description
            }
            }`
          }),
        }
    )
    const productData = await res.json()

    return {
        props: {
          productData,
        },
    }
}

export default Product