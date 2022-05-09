import G_Map from './g_map'
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
                <G_Map />
            </div>
        </section>
    )
}