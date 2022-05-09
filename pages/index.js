import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroBrands from '../components/hero_brands'
import Categories from '../components/categories'
import HomeMap from '../components/home_map'

function Home({ homeData }) {
  return (
    <Layout>
      <Hero data={homeData.data.heroSection} />
      <HeroBrands data={homeData.data.allProductBrands} />
      <Categories data={homeData.data.allProductCategories} />
      <HomeMap />
    </Layout>
  )
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
            heroSection {
              createdAt
              id
              heading
              body
              actionLink
              actionButtonText
              gallery {
                id
                url
                alt
                format
                mimeType
                blurUpThumb
              }
            }
            allProductBrands {
              id
              brandName
              brandLogo {
                url
              }
            }
            allProductCategories {
              id
              category
              thumbnail {
                id
                url
              }
              icon {
                id
                url
              }
            }
          }`
        }),
      }
  )
  const homeData = await res.json()
  
  return {
    props: {
      homeData,
    },
  }
}

export default Home