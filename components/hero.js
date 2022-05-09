import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from '../styles/hero.module.scss'

export default function Hero({ data }) {

    const defaultHero = {
        heading: 'Hong Ly Heng  Auto Parts',
        body: 'We focus in providing you with the best Automotive parts, both Stock and Aftermarket, coming from Japan, Germany, UK, and more.',
        actionLink: '/products',
        actionButtonText: 'Browse products'
    }
    const [hero, setHero] = useState({ defaultHero })

    useEffect(() => {
        if(data) {
            setHero(data)
            console.log("CMS connection successful.")
        } else {
            setHero(defaultHero)
            console.log("Unable to connect to CMS.")
        }
    }, [data])


    return (
        <section className={styles.hero_container}>
            <div className={styles.hero_content 
                + " animate__animated animate__slideInUp animate__fast"}>
                <div className={styles.hero_text_container}>
                    <h2>{hero.heading}</h2>
                    <p>
                        {hero.body}
                    </p>
                    {hero.actionButtonText || hero.actionLink ? 
                        <a 
                        href={hero.actionLink}
                        className="action_btn"
                        >{hero.actionButtonText} 🡒</a> 
                    : null}                    
                </div>
                <div className={styles.hero_gallery}>
                    {hero.gallery ? 
                        <Carousel
                        showThumbs={false}
                        showStatus={false}
                        autoPlay
                        infiniteLoop
                        interval={4000}>
                        {hero.gallery.map(i => 
                            <Image
                            key={i.id}
                            width="900"  height="600"
                            objectFit="contain"
                            src={i.url}
                            alt={i.alt ? i.alt : "Homepage image"}
                        />)}
                        </Carousel>
                    : null}
                </div>
            </div>
        </section>
    )
}