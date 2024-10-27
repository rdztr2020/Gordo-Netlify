

import gmbbqsauce from "../assets/mikebbq.jpg"

const Bbqsauce = () => {
  return (
    
    <section className="m-auto mt-10 mb-5 max-w-fit">
      <figure className="md:flex bg-black rounded-xl p-8 md:p-0">
        <img
          className=" w-24 h-24 md:w-64 md:h-auto rounded-xl mx-auto lg:w-80"
          src={gmbbqsauce}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-md font-bold">
              “Gordo Mikes BBQ SAUCE”
            </p>
            <p className=" text-red-500 text-md  text-center font-medium">
              “Sweet and Heat”
            </p>
            <br />
            <p className="text-lg text-center font-bold">
             🔥 8 Dollars a bottle 🔥
            </p>
            <br />
            <p className="text-lg text-center font-bold">
              Call or Text for Availability
            </p>
            <p className="text-lg text-center font-bold"><a href="tel:+16075100100" className="hover:text-sky-700 text-sky-300" >
              (607) 510-0100</a>
            </p>
            
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-red-600 text-center text-2xl font-bold">Gordo Mike</div>
            <div className="text-white text-center">
              Owner and Chef
            </div>
          </figcaption>
        </div>
      </figure>
    </section>
    
  );
};

export default Bbqsauce;
