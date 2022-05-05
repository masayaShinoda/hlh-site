import G_Map from '../components/g_map'
import Layout from '../components/layout'

function Contact({ contactData }) {
    const data = contactData.data.allContactInformations[0]

    return <Layout activePage={"contact"} page_title={"Contact"}>
        {contactData && 
        <div>
            <div>
                <h1>Contact</h1>
                <ul>
                    <li>
                        {data.telephone}
                    </li>
                    <li>
                        {data.mobile}
                    </li>
                    <li>
                        <a href={data.link}>
                        {data.pageName}
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${data.email}`}>
                        {data.email}
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Location</h2>
                <p>{data.location}</p>
                <G_Map />
            </div>

        </div>}

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
                allContactInformations {
                    location
                    mobile
                    mobileAdditional
                    telephone
                    pageName
                    link
                    email
                }
            }`
          }),
        }
    )
    const contactData = await res.json()
    
    return {
      props: {
        contactData,
      },
    }
}

export default Contact