import { motion } from "framer-motion";
import oval from "../assets/illustrations/oval.png";

const HoveringOval = ({ position , delay }) => {
  return (
    <motion.div
      animate={{
        x: [0, -20, 0, 20, 0],
        y: [0, -70, 0, -70, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: delay || 0 }}
      className={`absolute ${position} w-20 z-20`}
    >
      <img className="" src={oval} alt="" />
    </motion.div>
  );
};

export default HoveringOval;
