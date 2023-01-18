import Banner from "../components/banner";
import Header from "../components/header";
import Products from "../components/products";
import BannerProduct from "../components/bannerProduct";
import Companies from "../components/companies";
import Footer from "../components/footer";

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <Products />
      <BannerProduct />
      <Companies />
      <Footer />
    </>
  );
}

export default Home;
