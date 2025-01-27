import { arrowRight } from "../assets/icons";
import { offerLogo } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-20 max-container">
      <div className="flex-1">
        <img
          src={offerLogo}
          alt="Shoe Promotion"
          width={573}
          height={587}
          className="object-contain w-[573px] rounded-3xl animate-scale-up-down"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-green-600">Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a wellness journey that transforms your health experience
          with unmatched offerings. From premium products to incredible savings,
          we provide exceptional value that makes us your trusted choice.
        </p>
        <p className="mt-6 info-text">
          Explore a world of health solutions tailored to meet your unique
          needs, exceeding every expectation. Your path to well-being with us is
          truly extraordinary.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Vist now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
