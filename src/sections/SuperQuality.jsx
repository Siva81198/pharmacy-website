import { superQualityImage } from "../assets/images";
import { Button } from "../components";
import { motion } from "framer-motion";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <motion.div
        className="flex flex-1 flex-col"
        initial={{ opacity: 0, x: -200 }} // Initial state off-screen from left
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
        transition={{ duration: 2, type: "spring", stiffness: 30 }} // Customize timing and easing
      >
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-green-600"> Super </span>
          <span className="text-green-600">Quality </span> Products
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Offering a wide range of high-quality healthcare products, our
          pharmacy is dedicated to providing you with trusted medicines,
          wellness essentials, and expert care, all designed to enhance your
          health and well-being.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          With a commitment to excellence, we ensure that every product you
          purchase meets the highest standards for your satisfaction and peace
          of mind.
        </p>

        <div className="mt-11">
          <Button label="Visit us" />
        </div>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center items-center"
        initial={{ opacity: 0, x: 200 }} // Initial state off-screen from right
        animate={{ opacity: 1, x: 0 }} // Animate to full opacity and centered
        transition={{ duration: 1, type: "spring", stiffness: 60 }} // Customize timing and easing
      >
        <img
          src={superQualityImage}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain border-2 border-green-600 rounded-xl shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
