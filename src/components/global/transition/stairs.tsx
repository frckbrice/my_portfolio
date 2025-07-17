'use client';
// import lib
import { motion, animate } from 'framer-motion';

// variants
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
};

// calculate the reversed index for stagered delay
const reverseIndex = (index: number) => {
  const totalStage = 6; // number of step
  return totalStage - index - 1;
};

/** render 6 motions divs, each representing a step in the stairs.
 *  each div will have the same animation defined by the stair animation 
 * object. The delay for each div is calculated dynamically based on its reversed
 *  index creating a staggered effect with decreasing delay for each subsequent step. 

 */
export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          animate="animate"
          initial="initial"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
}
