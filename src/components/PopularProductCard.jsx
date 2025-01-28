import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { starIcon } from "../assets/images";
import useMediaQuery from "../hooks/useMediaQuery.js";

const PopularProductCard = ({ imgURL, name, price, review }) => {
  
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  // Use useMediaQuery to check for screen width
  const isMobile = useMediaQuery("(max-width: 500px)");

  return (
    <motion.div
      ref={ref}
      style={{
        scale: !isMobile ? 1 : scaleProgress,
        opacity: !isMobile ? 1 : opacityProgress,
        transition: !isMobile ? "none" : "scale 0.3s ease-out, opacity 0.3s ease-out",
      }}
      className="flex flex-1 flex-col w-full max-sm:w-full"
    >
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
      <h3 className="mt-2 text-xl sm:text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-green-600 text-lg leading-normal">
        {price}
      </p>
    </motion.div>
  );
};

export default PopularProductCard;
