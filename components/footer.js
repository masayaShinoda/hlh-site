import Image from 'next/image'
import styles from '../styles/footer.module.scss'

export default function Footer() {
    const icons = {
        telephone: '/icons/old-typical-phone.svg',
        fbook: '/icons/facebook-round-black.svg',
        email: '/icons/envelope.svg',
        location: '/icons/address-location.svg'
   }

   const contact_details = {
        phone_num: {
            display: '023 884 008',
            link: 'tel:+85523884008',
            icon: icons.telephone
        },
        fbook: {
            display: 'Hong Ly Heng Auto Parts Cambodia',
            link: 'https://www.facebook.com/hlhautopart',
            icon: icons.fbook
        },
        email: {
            display: 'honglyheng@gmail.com',
            link: 'mailto:honglyheng@gmail.com',
            icon: icons.email
        }
    }

    const location = {
        display: "No.178-182 St 128 Kampuchea Krom Road",
        link: 'https://goo.gl/maps/iyUpRBJdsmfEt2NN6',
        icon: icons.location
    }

    return <>        
    <footer className={styles.footer_container}>
        <div className={styles.footer_content}>
            <div>
                <h3>Contact</h3>
                <ul>
                {Object.keys(contact_details).map(i => 
                    <li key={i}>                            
                        <a href={contact_details[i]["link"]} className={styles.footer_link}>
                            <div className={styles.footer_icon}>
                            <Image 
                            src={contact_details[i]["icon"]} alt={contact_details[i]["display"]}
                            width="14" height="14"
                            />
                            </div>
                            {contact_details[i]["display"]}
                        </a>
                    </li>
                )}
                </ul>
            </div>
            <div>
                <h3>Location</h3>
                <a href={location["link"]} className={styles.footer_link}>
                    <div className={styles.footer_icon}>
                    <Image 
                        src={location["icon"]} alt="Location icon"
                        width="14" height="14"
                    />
                    </div>
                    {location["display"]}
                </a>
            </div>

        </div>
    </footer>
    <div className={styles.copyright_container}>
        <p>
        Copyright © {new Date().getFullYear()} Hong Ly Heng Auto Parts
        </p>
    </div>
    </>
}