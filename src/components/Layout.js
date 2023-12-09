import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='w-full h-0.5 bg-white  bg-gradient-to-r from-darkgold via-gold to-darkgold'>

</div>
      <meta name='theme-color' content='#18181B' />
      <div>{children}</div>
      <div className='w-full h-0.5 bg-white  bg-gradient-to-r from-darkgold via-gold to-darkgold'>

</div>
      <Footer />
    </>
  );
};

export default Layout;