import React from "react";
import { motion } from "framer-motion";

const Events = () => {
  return (
    <div className="mt-10">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl text-center font-semibold text-gray-600"
      >
        There Are No Events Yet{" "}
      </motion.h1>
    </div>
  );
};

export default Events;
