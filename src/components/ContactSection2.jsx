const ContactSection2 = () => {
  return (
    <section className="container mx-auto py16" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-6 text-white">
          Address
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2"><a  className="hover:text-sky-700 text-sky-300 "href="https://www.google.com/maps/place/29735+NY-10,+Walton,+NY+13856/@42.1544303,-75.0907944,16z/data=!4m6!3m5!1s0x89db791c1918ca8f:0x773c8ad49ac947d1!8m2!3d42.1544303!4d-75.0907944!16s%2Fg%2F11rkcd0mzy">
        29735 NY-10<br/>
        Walton NY<br/>
        13856<br/>
        </a>
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pt-4 pb-6 text-white">
          Phone
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2"><a href="tel:+16075100100" className="hover:text-sky-700 text-sky-300">(607) 510-0100</a></p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pt-4 pb-6 text-white">
          Email
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2"><a href="mailto: slee12463@gmail.com" className="hover:text-sky-700 text-sky-300">gordomike@gordomikes</a></p>
      </div>
    </section>
  );
};

export default ContactSection2;
