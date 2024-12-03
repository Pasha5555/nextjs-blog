import Navigation from "./navigation";

const Layout = (props) => {
    return (
        <>
            <Navigation />
            <main>
                {props.children}
            </main>
        </>
    )
}

export default Layout;