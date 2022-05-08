import Layout from '../components/layout'
import styles from '../styles/about.module.scss'

function About({ aboutData }) {
    const data = aboutData.data.aboutInformation
    const brands = aboutData.data.allProductBrands


    return <Layout activePage={"about"} page_title={"About"}>
        <div className={styles.about_page_container}>
            <div className={styles.about_page_content}>
                <div className={styles.text_content}>
                    <img
                    src="/images/SVG/hlh-logo-no-bg.svg"
                    alt="Hong Ly Heng Auto Parts logo"
                    width="100" height="100"
                    style={{marginBottom: "2.5rem"}}
                    />
                    <h1 style={{paddingBottom: "1rem", marginBottom: "2.5rem", borderBottom: "2px solid #ddd"}}>
                        {/* <span style={{color: "#666", display: "block", fontWeight: 400, margin: 0}}>
                        About
                        </span> */}
                        Hong Ly Heng Auto Parts
                    </h1>
                    {data && <>
                        <p>{data.slogan}</p>
                        <p>{data.description}</p>                
                    </> 
                    }
                </div>
                {/* <img 
                src="/images/HLH-cover_google-business-size_result.jpg"
                alt="HLH cover photo with car part companies' brand logos."
                className={styles.aboutCoverPhoto}
                /> */}
                <div className={styles.brands_container} id="available_brands">
                    <h2 style={{margin: `0`}}>Available Brands</h2>
                    <div className={styles.brand_logos_grid}>
                        {brands && brands.map(i => <img src={i.brandLogo.url} alt={i.brandName} key={i.id} loading="lazy" />)}
                    </div>
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
                aboutInformation {
                    slogan
                    description
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
    const aboutData = await res.json()
    
    return {
      props: {
        aboutData,
      },
    }
}

export default About