import { REVIEW } from "../constants"
import xaviour from "../assets/xaviour.jpeg"
import customer1 from "../assets/gordobbqsauce.jpg"
import customer2 from "../assets/ribstray.jpg"
import customer3 from "../assets/gordomikegreen.jpg"
import customer4 from "../assets/foodtray.jpg"
import { motion } from "framer-motion"

const containerVariants = {
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren:0.8,
    }
  }
}

const ItemVariants = {
  hidden:{opacity:0,y:20},
  show:{
    opacity:1,y:0,
    transition:{
      duration:0.8,
    }
  }
}

const Reviews = () => {
  return (
    <section className='container mx-auto mb-8 mt-12' id='reviews'>
      <motion.div 
      initial="hidden" 
      whileInView="show"
      variants={containerVariants}
      viewport={{once:true}}
      className='flex flex-col'>
        <motion.p 
        variants={ItemVariants}
        className='text-center  mb-10 text-2xl font-light leading-normal tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]'>
          {REVIEW.content}
        </motion.p>
        <motion.div 
        variants={ItemVariants}
        className="flex items-center justify-center gap-6">
          <img src={xaviour} width={80} height={80} alt={REVIEW.name} className="rounded-full border"/>
          <div className="tracking-tighter">
            {REVIEW.name}
            <p className="text-sm">{REVIEW.profession}</p>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
      initial="hidden" 
      whileInView="show" 
      viewport={{once:true}} 
      className="mt-14 flex flex-row items-center justify-center gap-2 md:flex-row ">
        {[customer1,customer2,customer3,customer4].map((customer,index)=>(
          <motion.img 
          variants={ItemVariants}
          key={index} src={customer} alt="customer" className="h-[100px] md:h-[200px] lg:h-[300px] w-[300px] rounded-br-3xl rounded-tl-3xl object-cover"/>
             ))}
      </motion.div>
    </section>
  )
}

export default Reviews