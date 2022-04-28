import LayoutHead from './layout_head'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children, activePage, page_title }) {

    return (
        <>
            <LayoutHead page_title={page_title} />
            <Nav activePage={activePage} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}