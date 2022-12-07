import React from "react";
// img start
import Logo from "./images/logo.svg"
import Compyuter from "./images/image-computer.png"
import Devices from "./images/image-devices.png"
import Google from "./images/logo-google.png"
import Microsoft from "./images/logo-ibm.png"
import LogoHp from "./images/logo-hp.png"
import Graphics from "./images/logo-vector-graphics.png"
import Button from "./components/Button";

// img end 
import WorkCardList from "./components/WorkCardList";
import Footer from "./components/Footer";


function App() {
  return (
    <div classNameName="App">
         {/* <!-- Hero Section --> */}
    <section id="hero">
      <div className="section-container mb-40 pt-16">
        <img src={Logo} alt="salom" className="mx-auto my-16" />

        <h3>A history of everything you copy</h3>

        <p className="section-content mb-10 text-2xl">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>

        {/* <!-- Button Container --> */}
        <div className="button-container">
          <Button >
             Download for iOS
          </Button>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>

    {/* <!-- Snippets Section --> */}
    <section id="snippets">
      <div className="section-container my-20">
        <h3>Keep track of your snippets</h3>
        <p className="section-content mb-24 text-xl">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>
    </section>

    {/* <!-- Features Section --> */}
    <section id="features">
      <div className="section-container my-20">
        <div className="relative flex flex-col md:flex-row md:space-x-32">
          {/* <!-- Image --> */}
          <div className="md:w-1/2">
            <img
              src={Compyuter}
              alt=""
              className="md:absolute top-0 right-[50%]"
            />
          </div>

          {/* <!-- Items Container --> */}
          <div
            className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16"
          >
            {/* <!-- Item 1 --> */}
            <div>
              <h5>Quick Search</h5>
              <p className="max-w-md text-grayishBlue">
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </div>
            {/* <!-- Item 2 --> */}
            <div>
              <h5>iCloud Sync</h5>
              <p className="max-w-md text-grayishBlue">
                Instantly saves and syncs snippets across all your devices.
              </p>
            </div>
            {/* <!-- Item 3 --> */}
            <div>
              <h5>Completely History</h5>
              <p className="max-w-md text-grayishBlue">
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Access Anywhere Section --> */}
    <section id="access">
      <div className="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p className="section-content mb-24 text-xl">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>

        <img src={Devices} alt="" className="mx-auto" />
      </div>
    </section>

    {/* <!-- Supercharge Section --> */}
    <section id="supercharge">
      <div className="section-container my-20">
        <h3>Supercharge your workflow</h3>
        <p className="section-content mb-16 text-xl">
          We've got the tools to boost your productivity.
        </p>
        {/* <!-- Items Container --> */}
        <WorkCardList/>
      </div>
    </section>

    {/* <!-- References Section --> */}
    <section id="references">
      <div
        className="flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0"
      >
        <img src={Google} alt="" />
        <img src={LogoHp} alt="" />
        <img src={Microsoft} alt="" />
        <img src={LogoHp} alt="" />
        <img src={Graphics} alt="" />
      </div>
    </section>

    {/* <!-- Bottom CTA Section --> */}
    <section id="bottom">
      <div className="section-container my-20">
        <h3>Clipboard for iOS and MacOS</h3>
        <p className="section-content mb-10 text-xl">
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you're ready to start adding to your clipboard.
        </p>

        {/* <!-- Button Container --> */}
        <div className="button-container">
        <Button >
             Download for iOS
          </Button>
          <a
            href="#"
            className="p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80"
          >
            Download for Mac
          </a>
        </div>
      </div>
    </section>

    <Footer/>
    </div>
  );
}

export default App;
