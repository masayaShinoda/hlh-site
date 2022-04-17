import styles from '../styles/home_map.module.scss'

export default function HomeMap() {
    return (
        <section className={styles.home_map_container}>
            <div className={styles.home_map_content}>
                <div className={styles.text_container}>
                    <img src="/images/icons/location-pin.svg" alt="Location" />
                    <span>
                        <h2>Visit our Shop</h2>
                        <p>No.178-182 St 128 Kampuchea Krom Road</p>
                    </span>
                </div>
                <iframe 
                className={styles.map_embed}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.766247522929!2d104.91303691443618!3d11.568607891786955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095141d563715b%3A0xe1ab99114aefc415!2sHong%20Ly%20Heng%20Auto%20Part!5e0!3m2!1sen!2skh!4v1650188746719!5m2!1sen!2skh" 
                width="400" height="300" 
                style={{border: 0 }}
                allowFullscreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" />
            </div>
        </section>
    )
}