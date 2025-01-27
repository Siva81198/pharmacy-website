import { Nav } from "./components";
import Carousel from "./components/Carousel";
import {
  CustomerReviews,
  Footer,
  PopularProducts,
  Services,
  SpecialOffer,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='padding mt-12'>
        <Carousel />
      </section>
      <section className='bg-slate-50 p-6'>
        <PopularProducts />
      </section>
      <section className='padding mt-12'>
        <SuperQuality />
      </section>
      <section className='padding-x py-10 bg-slate-50'>
        <Services />
      </section>
      <section className='padding'>
        <SpecialOffer />
      </section>
      <section className='bg-pale-blue padding'>
        <CustomerReviews />
      </section>
      <section className=' bg-black padding-x pt-10 pb-10'>
        <Footer />
      </section>
    </main>
  );
};

export default App;
