import React from 'react'
import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Logo from "../images/logo.svg"

function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* <!-- Image --> */}
          <img src={Logo} alt="" className="scale-50" />
          {/* <!-- Container for Menus & Social --> */}
          <div
            className="flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue"
          >
            {/* <!-- Menus --> */}
            <div
              className="flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0"
            >
              {/* <!-- Menu 1 --> */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div><a href="#" className="hover:text-strongCyan">FAQs</a></div>
                <div>
                  <a href="#" className="hover:text-strongCyan">Contact Us</a>
                </div>
              </div>
              {/* <!-- Menu 2 --> */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">Privacy Policy</a>
                </div>
                <div>
                  <a href="#" className="hover:text-strongCyan">Press Kit</a>
                </div>
              </div>
              {/* <!-- Menu 3 --> */}
              <div className="flex flex-col space-y-4 text-center md:text-left">
                <div>
                  <a href="#" className="hover:text-strongCyan">Install Guide</a>
                </div>
              </div>
            </div>

            {/* <!-- Social Icons --> */}
            <div className="flex justify-between w-32 py-1">
              <a href="#"
                ><img
                  src={Facebook}
                  alt=""
                  className="duration-200 ficon"
              /></a>
              <a href="#"
                ><img
                  src={Twitter}
                  alt=""
                  className="duration-200 ficon"
              /></a>
              <a href="#"
                ><img
                  src={Instagram}
                  alt=""
                  className="duration-200 ficon"
              /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer