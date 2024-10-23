import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
const Footer = () => {
  return (
    <>
    <main className="flex  flex-items gap-12 items-center justify-center mt-8 mb-10">
      <div>
        <a href="https://www.facebook.com/groups/414186977978889">
          <img src={facebook} alt="facebook" className="h-12 w-12 hover:opacity-50" />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/gordomikesbbq/">
          <img src={instagram} alt="instagram" className="h-12 w-12 hover:opacity-50" />
        </a>
      </div>
      <div>
        <a href="https://x.com/">
          <img src={twitter} alt="twitter" className="h-12 w-12 hover:opacity-50" />
        </a>
      </div>
    </main>
    <div>
    
        <p className="mt-8 mb-8 text-center tracking-tighter text-orange-300 text-lg">
          &copy; THE🤓NERD 2024
          <br />
          All rights reserved.
        </p>
      </div>
    
    </>
  );
};

export default Footer;
