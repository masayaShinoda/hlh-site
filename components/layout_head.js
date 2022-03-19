import { NextSeo } from 'next-seo'

export default function LayoutHead({page_title}) {
    const siteName = "HLH Auto Parts"
    const siteDesc = "Your best automotive parts provider, we cater quality products from Japan, Germany, UK, USA and more."

    const favIcons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/favicon/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            href: "/favicon/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "16x16",
            href: "/favicon/favicon-16x16.png"
        },
        {
            rel: "manifest",
            href: "/favicon/site.webmanifest"
        }
    ]

    const openGraphMeta = {
        type: 'website',
        // url: 'https://zillionunited.io',
        title: 'HLH Auto',
        description: siteDesc,
        images: [{
            url: '/images/HLH-cover_google-business-size.jpg',
            width: 1500,
            height: 845,
            alt: 'Hong Ly Heng Auto Parts'
        }]
    }

    return <NextSeo 
        title={page_title ? `${page_title} | ${siteName}` : siteName}
        description={siteDesc}
        additionalLinkTags={favIcons}
        // additionalMetaTags={favIconMeta}
        openGraph={openGraphMeta} />
}