import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import parse from 'html-react-parser'

function Product({ productData }) {

    const router = useRouter();
    const {id} = router.query

    const product_data = productData.data.allProductListings[0]
    console.log(product_data.description)

    const currency = "$"


    return (
        <Layout>
            <div style={{padding: `5rem 5%`}}>
                <p>{id}</p>
                {product_data && <>
                    <h2>{product_data.name}</h2>
                    <p>{product_data.category.category}</p>
                    <p>{currency}{product_data.price}</p>
                    <p>{product_data.brand.brandName}</p>
                    <>{parse(product_data.description)}</>
                    <img src={product_data.photos[0].url} alt={`Photo of ${product_data.name}`} />
                
                </>}
            </div>
        </Layout>
    )
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

    console.log(data.data)

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
                    available
                    brandName
                    id
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