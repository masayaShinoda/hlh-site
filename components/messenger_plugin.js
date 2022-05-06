import { MessengerChat } from "react-messenger-chat-plugin"
import styles from '../styles/nav.module.scss'

export default function MessengerPlugin() {
    const page_id = "153896371634318"

    return <MessengerChat
        pageId={page_id}
        themeColor={styles.blue}
        bottomSpacing={24}
    />
    // <div className={styles.messenger_plugin_container}>
    
}