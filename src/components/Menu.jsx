import { CUISINES } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:1,
    }
  }
}

const ItemVariants = {
  hidden:{opacity:0,y:20},
  show:{
    opacity:1,
    y:0,
    transition:{
      duration:0.8,
    }
  }
}

const Expertise = () => {
  return (
    <section id="menu" className="">
      <h2 className="my-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Menu
      </h2>
      <motion.div
      initial="hidden"
      whileInView="show"
      variants={containerVariants} 
      className="container mx-auto px-4">
        {CUISINES.map((cuisine, index) => (
          <motion.div
            key={index}
            className="flex items-center border-b-4 border-dotted 
            border-neutral-700/40 py-2"
            variants={ItemVariants}
          >
            {/*<div className="flex-shrink-0 pr-8 text-2xl">{cuisine.number}</div>*/}
            <div className="w-1/3 flex-shrink-0">
              <img src={cuisine.image} alt="cuisine.title" className="h-auto rounded-3xl" />
            </div>
            <div className="pl-8">
              <h3 className="text-xl text-center uppercase tracking-tighter text-rose-300">
                {cuisine.title}
              </h3>
              <p className="mt-4 text-sm text-center tracking-tighter lg:text-lg md:text-md">
                {cuisine.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Expertise;
