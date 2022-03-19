import Image from 'next/image'
import styles from '../styles/coming_soon.module.scss'
import hlh_logo from '../public/images/SVG/hlh-logo-no-bg.svg'
import fb_logo from '../public/icons/fb-icon-margins.png'

export default function ComingSoon() {
    return (
        <div className={styles.container}>
            <Image
            src={hlh_logo}
            width="200"
            height="200"
            />
            <h1>
                Hong Ly Heng Auto Parts
            </h1>
            <h2 lang="khm">
                លក់គ្រឿងបន្លាស់រថយន្តគ្រប់ប្រភេទ។
            </h2>

            <p>Website coming soon.</p>
            <p lang="khm">គេហទំព័រនឹងមកដល់ឆាប់ៗនេះ។</p>
            <a 
            className={styles.social_link}
            href="https://www.facebook.com/hlhautopart">
                <Image 
                src={fb_logo}
                width="36"
                height="36"
                className={styles.fb_logo}
                />
                <span>
                Follow us on Facebook
                </span>
            </a>
        </div>
    )
}