const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 min-w-[350px] sm:w-[150px] sm:min-w-[150px] w-full rounded-[20px] bg-white shadow-3xl px-6 py-8 transform transition-transform duration-300 ease-in hover:scale-105">
      <div className="w-11 h-11 flex justify-center items-center bg-green-600 rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl sm:text-xl leading-normal md:leading-6 font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal sm:text-sm  md:leading-5 text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
