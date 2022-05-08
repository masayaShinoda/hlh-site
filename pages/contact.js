import G_Map from '../components/g_map'
import Layout from '../components/layout'
import styles from '../styles/contact.module.scss'

function Contact({ contactData }) {
    const data = contactData.data.contactInformation

    const icons = {
        telephone: '/icons/old-typical-phone.svg',
        mobile: '/icons/phone-square.svg',
        fbook: '/icons/facebook-round-black.svg',
        email: '/icons/envelope.svg'
    }

    return <Layout activePage={"contact"} page_title={"Contact"}>
    {contactData && 
    <div className={styles.contact_page_container}>
        <div className={styles.contact_page_content}>
            <div>
                <h1>Contact</h1>
                <ul>
                    <li>
                        <img src={icons.telephone} alt="Telephone" 
                        width="16" height="16" />
                        {data.telephone}
                    </li>
                    <li>
                        <img src={icons.mobile} alt="Mobile" 
                        width="16" height="16" />
                        {data.mobile}
                    </li>
                    <li>
                        <a href={data.link}>
                        <img src={icons.fbook} alt="Facebook" 
                        width="16" height="16" />
                        {data.pageName}
                        </a>
                    </li>
                    <li>
                        <a href={`mailto:${data.email}`}>
                            <img src={icons.email} alt="Email" 
                            width="16" height="16" />
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
                contactInformation {
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