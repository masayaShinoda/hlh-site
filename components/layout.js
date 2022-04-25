import LayoutHead from './layout_head'
import Nav from './nav'
import Footer from './footer'

export default function Layout({ children, activePage }) {
    return (
        <>
            <LayoutHead />
            <Nav activePage={activePage} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}