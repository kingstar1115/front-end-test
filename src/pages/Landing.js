import React, { useState } from "react";
import Nabvar from "../components/header";
import { InputTextStyle } from "../components/inputTextStyle";
import ReactStars from "react-rating-star-with-type";
import about_1 from "../assets/img/about-1.png";
import about_1_1 from "../assets/img/about-1-1.png";
import about_1_2 from "../assets/img/about-1-2.png";
import bg_sec_1 from "../assets/img/sec-1.png";
function IntroSection() {
  const trustedNumber = 50;
  const [star, setStar] = useState(2);

  const onChange = (nextValue) => {
    setStar(nextValue);
  };
  return (
    <>
      <div
        className={`pt-[242px] pb-32 flex justify-between items-start flex-col lg:flex-row]`}
      >
        <div className="flex flex-col items-center lg:block">
          {/* <img src={about_1_2} className="float-right" /> */}
          <div className="lg:pl-[350px] ">
            <h1 className="text-[75px] text-white font-jost">
              The Smartest
              <br />
              Move You'll Ever
              <br />
              Make
            </h1>
            <p className="text-[20px] text-white font-jost w-[700px]">
              MoveBudii all take the stress out of an already stressfull
              situation using cutting edge technology to facilitiate life
              changes upon moving to your new location
            </p>
            <InputTextStyle text="Enter Your Email" />
            <p className="text-white text-[18px] lead-[30px] font-sans">
              Trusted by {trustedNumber}k+ users
            </p>
            <div className="flex">
              <ReactStars
                onClick={onChange}
                value={star}
                activeColors={["#6DDCFF"]}
              />
              <p className="text-white pl-[10px]">
                {star}/5 <span className="text-gray-400">({14}k reviews)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SlideSection() {
  return (
    <>
      <div
        className={` pb-32 flex justify-between items-center flex-col lg:flex-row]`}
      >
        <div className="flex lg:flex-row items-center justify-center pt-[35px] gap-[54px] align-middle">
          <div className="relative">
            <div className="lead text-white text-[150px] lead-[] font-black font-kumbh w-1/2">
              MOVEUDI
            </div>
            <div className="absolute bottom-0 right-[32px] text-white font-jost font-weight-700 text-[42px] lead-[53px]">
              Partnered with America’s
              <br />
              favorite providers
            </div>
          </div>
          <div className="w-1/3 text-[18px] lead-[36px] text-white">
            Everything you need for your new home provided by hundreds of the
            nation's most trusted brands.Everything you need for yo
          </div>
        </div>
      </div>
    </>
  );
}

function LandingPage() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000C2F",
          backgroundImage: `url("/sec-1.png")`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
        className={`mx-auto`}
      >
        <IntroSection />
      </div>
      <div
        style={{
          backgroundImage: `url("/sec-2.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "-216px",
        }}
        className={`mx-auto relative`}
      >
        <div className=" pt-[192px]">
          <Nabvar />
        </div>

        <SlideSection />
      </div>
    </>
  );
}

export default LandingPage;
