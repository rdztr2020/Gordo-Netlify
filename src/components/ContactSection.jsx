const ContactSection = () => {
  return (
    <section className="container mx-auto py16" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        
        
        <p className="text-center text-2xl tracking-tighter lg:text-4xl p-8 text-white">
          <button id="text1" className="bg-blue-600 rounded-lg p-6 hover:scale-105 hover:bg-blue-700">
            <a href="tel:+16075100100">Phone</a>
          </button>
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2 text-white">
          (607) 510-0100
        </p>

        <p className="text-center text-2xl tracking-tighter lg:text-4xl p-8 text-white">
          <button id="text2" className="bg-blue-600 rounded-lg p-6 hover:scale-105 hover:bg-blue-700">
            <a href="mailto: slee12463@gmail.com">Email</a>
          </button>
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2 text-white">
          Gordo Mike@GordoMikes
        </p>

        <p className="text-center  text-white text-2xl tracking-tighter lg:text-4xl p-6">
        <button id="text3" className="bg-blue-600 rounded-lg p-8 hover:scale-105 hover:bg-blue-700">
            <a href="https://www.google.com/maps/place/29735+NY-10,+Walton,+NY+13856/@42.1544303,-75.0907944,16z/data=!4m6!3m5!1s0x89db791c1918ca8f:0x773c8ad49ac947d1!8m2!3d42.1544303!4d-75.0907944!16s%2Fg%2F11rkcd0mzy">Maps</a>
          </button>
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2 text-white">
          29735 NY-10 Walton NY 13856
        </p>

      </div>
    </section>
  );
};

export default ContactSection;
