
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/nav.module.scss'

export default function Nav({ activePage }) {

    const logos = {
        full: '/images/SVG/hlh-logo-no-bg.svg',
        mini: '/images/SVG/hlh-logo-mini.svg',
    }

    const icons = {
        products: '/icons/shopping-basket.svg',
        contact: '/icons/contact-book-line.svg',
        about: '/icons/info-circle.svg',
        menu: '/icons/list-view.svg',
        search: '/icons/search.svg',
        close: '/icons/close.svg'
    }

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        const mobileMenu = document.getElementById("mobile_menu")
        if(menu) {
            mobileMenu.style.display = "flex"
        } else {
            mobileMenu.style.display = "none"
        }
    }, [menu])

    useEffect(() => {
        typeof window !== 'undefiend' && (
            window.onscroll = function() {scrollFunction()}       
        )
    }, [])

    function scrollFunction() {
        const nav_container = document.getElementById("nav_container")
        const nav_content = document.getElementById("nav_content")
        // const nav_items = document.getElementById("nav_items")
        const logo_text = document.getElementById("logo_text")

        if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
            nav_container.style.height = styles.desktop_nav_height_mini
            nav_container.style.maxHeight = styles.desktop_nav_height_mini
            nav_container.style.alignItems = "center"
            nav_container.style.padding = "0"

            nav_container.classList.add("animate__animated")
            nav_container.classList.add("animate__slideInDown")
            nav_container.classList.add("animate__fast")

            nav_content.style.height = styles.desktop_nav_height_mini
            nav_content.style.maxHeight = styles.desktop_nav_height_mini
            nav_content.style.alignItems = "center"


            logo_text.style.display = "none"
            // nav_content.style.background = styles.dark_blue
            document.getElementById("main_logo").src = logos.mini
        } else {
            nav_container.style.height = styles.desktop_nav_height
            nav_container.style.maxHeight = styles.desktop_nav_height
            nav_container.style.alignItems = "flex-end"
            nav_container.style.padding = styles.desktop_nav_padding

            nav_container.classList.remove("animate__animated")
            nav_container.classList.remove("animate__slideInDown")
            nav_container.classList.remove("animate__fast")


            nav_content.style.height = styles.desktop_nav_height
            nav_content.style.maxHeight = styles.desktop_nav_height
            nav_content.style.alignItems = "flex-end"


            logo_text.style.display = "inline"
            document.getElementById("main_logo").src = logos.full
        }
    }


    return (
    <>
    <div className={styles.nav_container} id="nav_container">
        <div className={styles.nav_content} id="nav_content">
            <div className={styles.logo_container}>
                <Link href="/">
                    <a tabIndex={1}>
                    <img 
                    src={logos.full}
                    // width="80" height="80"
                    alt="Logo"
                    className={styles.nav_logo}
                    id="main_logo"
                    />
                    <span id="logo_text">
                        Hong Ly Heng <br />
                        Auto Parts
                    </span>
                    </a>
                </Link>
            </div>
            <nav id="nav_items">
                <Link href="/products">
                <a className={activePage === "products" ? styles.active : null} tabIndex={2}>
                {/* <a style={activePage === "products" ? {color: styles.blue} : null}> */}
                    <Image
                    src={icons.products}
                    width="16" height="16"
                    alt="Products icon"
                    className={styles.nav_icon}
                    />
                    Products
                </a>
                </Link>
                <Link href="/contact">
                <a className={activePage === "contact" ? styles.active : null} tabIndex={3}>
                    <Image
                    src={icons.contact}
                    width="16" height="16"
                    alt="Contact icon"
                    className={styles.nav_icon}
                    />
                    Contact
                </a>
                </Link>
                <Link href="/about">
                <a className={activePage === "about" ? styles.active : null} tabIndex={4}>
                    <Image
                    src={icons.about}
                    width="16" height="16"
                    alt="About icon"
                    className={styles.nav_icon}
                    />
                    About
                </a>
                </Link>
                <Link href="/search">
                <a className={activePage === "search" ? styles.active : null} tabIndex={5}>
                    <Image
                    src={icons.search}
                    width="16" height="16"
                    alt="About icon"
                    className={styles.nav_icon}
                    />
                </a>
                </Link>
            </nav>
        </div>
    </div>
    <div className={styles.mobile_nav}>
        <button 
        aria-label="Menu"
        className={styles.mobile_nav_btn}
        onClick={() => {
            setMenu(!menu)
        }}
        >
            <Image 
            src={icons.menu}
            alt="Menu"
            width="24" height="24"
            />
        </button>
        <div className={styles.mobile_logo_container}>
            <Link href="/">
                {/* <Image 
                src="/images/SVG/hlh-logo-no-bg.svg"
                width="60" height="60"
                alt="Logo"
                className={styles.nav_logo}
                /> */}
                <img 
                src={logos.full}
                width="60" height="60"
                alt="Logo"
                className={styles.nav_logo}
                id="main_logo"
                />
            </Link>
        </div>
        <Link href="/search">
            <button
            aria-label="Search"
            className={styles.mobile_nav_btn}
            >
                <Image 
                src={icons.search}
                alt="Search"
                width="24" height="24"
                />
            </button>
        </Link>

    </div>
    <div
    id="mobile_menu"
    className={styles.mobile_nav_expanded}>
        <button
        aria-label="Close"
        className={styles.mobile_close_btn}
        onClick={() => {
            setMenu(!menu)
        }}>
            <Image 
            src={icons.close}
            alt="Close"
            width="24" height="24"
            />
        </button>
        <Link href="/search">
            <button
            aria-label="Search"
            className={styles.mobile_search_btn}
            onClick={() => setMenu(!menu)}>
                <Image 
                src={icons.search}
                alt="Close"
                width="24" height="24"
                />
            </button>
        </Link>
        <nav onClick={() => setMenu(!menu)}>
            <Link href="/products">
                Products
            </Link>
            <Link href="/contact">
                Contact
            </Link>
            <Link href="/about">
                About
            </Link>
        </nav>
    </div>
    </>
    )
}