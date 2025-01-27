import { starIcon } from "../assets/images";

const PopularProductCard = ({ imgURL, name, price, review }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full transform transition-transform duration-300 ease-in-out hover:scale-105">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img
          src={starIcon}
          alt="rating icon"
          width={28}
          height={26}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          {review}
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-green-600 text-lg leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
