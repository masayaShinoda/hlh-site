import { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/layout'
import Search from '../components/search'
import styles from '../styles/search.module.scss'

function SearchPage({ productsData }) {

    const [searchString, setSearchString] = useState("")
    // const [searchResult, setSearchResult] = useState([])

    return <Layout activePage={"products"} page_title={"Search"}>
    <div className={styles.search_page_container}>
        <div className={styles.search_page_content}>
            <h2>Search Products</h2>
            <Search productsData={productsData} />
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


export default SearchPage