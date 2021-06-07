import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="layout-wrapper">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;