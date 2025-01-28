import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {

  return (
    <section id='products' className='max-container max-sm:mt-2'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-green-600'> Categories </span>of Products
        </h2>
        <p className='lg:max-w-full mt-2 font-montserrat text-slate-gray'>
          Explore premium healthcare solutions crafted for quality and care. Discover a world of wellness, reliability, and value.
        </p>
      </div>

      <div className='mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 max-w-fit mx-auto'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
