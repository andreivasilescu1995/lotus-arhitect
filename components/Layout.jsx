import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, pageProps }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
