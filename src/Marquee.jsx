import { motion } from "framer-motion";

export const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.000001"
      data-scroll-section
      className="bg-[#004d43] rounded-tl-xl overflow-hidden rounded-tr-xl w-full py-10 md:py-20"
    >
      <div className="flex whitespace-nowrap border-t-[1px] border-b-[1px] border-[#218577]">
        {[...Array(2)].map((_, i) => (
          <motion.h1
            key={i}
            initial={{ x: "0" }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5, delay: 1 }}
            className="text-6xl md:text-[19rem] px-5 leading-tight py-5 font-neu font-bold -my-8 md:-my-16 uppercase tracking-tighter"
          >
            we are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
};
