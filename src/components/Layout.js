import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className='w-full h-0.5 bg-white  bg-gradient-to-r from-darkgold via-gold to-darkgold sticky top-20 z-30'>

</div>
      <main className="flex-1">
        {children}
        </main>
      
      <div className='w-full h-0.5 bg-white  bg-gradient-to-r from-darkgold via-gold to-darkgold'>

</div>
      <Footer />
    </div>
  );
};

export default Layout;