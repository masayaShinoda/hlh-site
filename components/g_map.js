import styles from '../styles/home_map.module.scss'

export default function G_Map() {
    return <div className={styles.map_embed}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.766247522929!2d104.91303691443618!3d11.568607891786955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095141d563715b%3A0xe1ab99114aefc415!2sHong%20Ly%20Heng%20Auto%20Part!5e0!3m2!1sen!2skh!4v1650188746719!5m2!1sen!2skh" 
        width="100%" height="300" 
        style={{border: 0 }}
        allowFullScreen="" 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" />
    </div> 
    
}
