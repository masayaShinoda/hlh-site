import Layout from '../components/layout'
import Hero from '../components/hero'
import HeroBrands from '../components/hero_brands'

export default function Home({ herosData }) {
  return (
    <Layout>
      <Hero data={herosData.data.heroSection} />
      <HeroBrands data={herosData.data.allProductBrands} />
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
          }`
        }),
      }
  )
  const herosData = await res.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      herosData,
    },
  }
}