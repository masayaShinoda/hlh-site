import LayoutHead from './layout_head'
import Nav from './nav'

export default function Layout({ children }) {
    return (
        <>
            <LayoutHead />
            <Nav />
            <main>
                {children}
            </main>
        </>
    )
}