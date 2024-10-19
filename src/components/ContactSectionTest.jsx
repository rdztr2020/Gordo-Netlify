const ContactSection2 = () => {
  return (
    <section className="container mx-auto py16" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Contact Us</h2>
      <div className="text-neutral-400">
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-6 text-white">
          Address
        </p>
        <a href="https://www.google.com/maps/place/29735+NY-10,+Walton,+NY+13856/@42.1544303,-75.0907944,16z/data=!4m6!3m5!1s0x89db791c1918ca8f:0x773c8ad49ac947d1!8m2!3d42.1544303!4d-75.0907944!16s%2Fg%2F11rkcd0mzy"><p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2">
          29735 NY-10
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2">
          Walton NY
        </p>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2">
          13856
        </p></a>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pt-4 pb-6 text-white">
          Phone
        </p>
        <a href="tel:+6075100100"><p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2">(607) 510-0100</p></a>
        <p className="text-center text-2xl tracking-tighter lg:text-4xl pt-4 pb-6 text-white">
          Email
        </p>
        <a href="mailto: slee12463@gmail.com"><p className="text-center text-2xl tracking-tighter lg:text-4xl pb-2">gordomike@gordomikes</p></a>
      </div>
    </section>
  );
};

export default ContactSection2;
