import {
  Armchair,
  Banknote,
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top mx-h-[340px] w-full border-t border-b border-[#e1e3e5] pt-[40px] pb-[40px]">
        <div className="lg:container mx-auto">
          <div className="grid grid-cols-4 gap-x-8">
            <div>
              <div className="logo-wrapper mb-6">
                <Link
                  to="/"
                  className="text-3xl text-black font-inter font-medium capitalize flex items-center gap-2"
                >
                  <Armchair size="3rem" color="#029fae" />
                  Comforty
                </Link>
              </div>

              <p className="text-base text-[#272343] font-inter font-normal mb-4 max-w-[260px] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div className="footer-wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Category
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal">
                    Char
                  </Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal">
                  <Link>Desk</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal">
                  <Link>Sofa</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal">
                  <Link>Cabinet</Link>
                </li>
              </ul>
            </div>

            <div className="footer-wrapper">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase">
                Support
              </h3>
              <ul className="space-y-2 mt-4">
                <li>
                  <Link className="text-base text-[#272343] font-inter font-normal">
                    FAQs
                  </Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal">
                  <Link>Tearms & Condition</Link>
                </li>
                <li className="text-base text-[#272343] font-inter font-normal">
                  <Link>Privacy Policy</Link>
                </li>
              </ul>
            </div>

            <div className="newsletter">
              <h3 className="text-xl text-[#9a9caa] font-inter font-medium uppercase pb-2">
                Get in touch
              </h3>

              <div className="footer-social flex items-center gap-4 mt-3">
                <Link className="w-10 h-10 p-2 rounded-full border-[#007580] inline-block border-[1px] hover:scale-110 transition duration-300">
                  <Facebook size="1.5rem" color="#007580" />
                </Link>
                <Link className="w-10 h-10 p-2 rounded-full border-[#007580] inline-block border-[1px] hover:scale-110 transition duration-300">
                  <Twitter size="1.5rem" color="#007580" />
                </Link>
                <Link className="w-10 h-10 p-2 rounded-full border-[#007580] inline-block border-[1px] hover:scale-110 transition duration-300">
                  <Linkedin size="1.5rem" color="#007580" />
                </Link>
                <Link className="w-10 h-10 p-2 rounded-full border-[#007580] inline-block border-[1px] hover:scale-110 transition duration-300">
                  <Instagram size="1.5rem" color="#007580" />
                </Link>
              </div>

              <form
                action="#"
                className="max-w-[400px] w-full flex items-center gap-1 mt-6"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-[260px] w-full h-[40px] border-[#e1e3e5] border-[1px] px-2 rounded-lg"
                />
                <button
                  type="submit"
                  className="text-base text-white font-semibold capitalize w-[120px] h-[40px] bg-[#007580] rounded-lg cursor-pointer hover:bg-[#005f66] transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom w-full h-[55px] flex items-center justify-center ">
        <div className="lg:container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-base text-[#9a9caa] font-inter font-narmal">
                @ 2025 Comforty. All rights reserved
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1 text-base text-[#9a9caa] font-inter font-narmal">
                Credit Card
                <CreditCard size="2rem" />
              </p>
              <p className="flex items-center gap-1 text-base text-[#9a9caa] font-inter font-narmal">
                Bank Note
                <Banknote size="2.3rem" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
