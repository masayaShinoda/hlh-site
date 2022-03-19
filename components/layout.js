import LayoutHead from './layout_head'

export default function Layout({ children }) {
    return (
        <>
            <LayoutHead />
            <main>
                {children}
            </main>
        </>
    )
}