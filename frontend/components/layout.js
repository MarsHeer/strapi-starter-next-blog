import Navbar from "./Essentials/Navbar";

const Layout = ({ children, categories, seo }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default Layout;
