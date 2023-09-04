import Header from "../header";

const Layout = ({ children }) => {
    return (
        <div className="h-full bg-mfa-gray">
            <main className="container mx-auto max-w-7xl lg:py-8">
                <Header />
            </main>
            <main className="container mx-auto bg-white max-w-7xl lg:p-8">
                {children}
            </main>
        </div>);
}

export default Layout;
