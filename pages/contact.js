import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Footer from "../component/Footer";
import { useRouter } from "next/router";
import Link from "next/link";

const contact = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <section className="contact-bg">
        <div className="over-bg"></div>
        <h2 className="relative text-white font-bold 2xl:text-[50px] 2xl:leading-[65px] text-center text-[38px] leading-[48px]">
          Contact Us
        </h2>
      </section>

      <section className="2xl:py-[100px] py-[60px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="map-main">
            <div className="row">
              <div className="lg:basis-9/12 px-[15px] md:basis-9/12 sm:basis-full basis-full">
                <div className="map-left 2xl:p-[60px] p-[20px] sm:p-[30px] md:p-[30px] lg:p-[60px]">
                  <div className="flex 2xl:mb-8 mb-5 sm:mb-6 md:mb-8">
                    <div>
                      <i className="fa-solid fa-phone 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i>
                    </div>
                    <div className="2xl:text-xl text-base lg:text-xl text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium">
                      +91 9104466884
                      <br />
                      +91 9104466885
                    </div>
                  </div>
                  <div className="flex 2xl:mb-8 mb-5 sm:mb-6 md:mb-8">
                    <div>
                      <i className="fa-solid fa-envelope 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i>
                    </div>
                    <div className="2xl:text-xl text-base lg:text-xl text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium">
                      info@interiodeco.in
                    </div>
                  </div>
                  <div className="flex 2xl:mb-8 mb-5 sm:mb-6 md:mb-8">
                    <div>
                      <i className="fa-solid fa-globe 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i>
                    </div>
                    <div className="2xl:text-xl text-base lg:text-xl text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium">
                      www.interiodeco.in
                    </div>
                  </div>
                  <div className="flex">
                    <div>
                      <i className="fa-sharp fa-solid fa-location-dot 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i>
                    </div>
                    <div className="2xl:text-xl text-base lg:text-xl 2xl:leading-8 leading-7 lg:leading-8 text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium 2xl:max-w-[50%] md:max-w-[58%] max-w-full">
                      47/A, Meldi Industrial Estate, Nr Gota Railway Crossing,
                      Gota,Ahmedabad, Gujarat - 382481
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:basis-3/12 px-[15px] md:basis-3/12 basis-full">
                <div className="map-main-right">
                  <div className="map-main-inner">
                    <img className="w-full h-full" src="/map.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#272727] lg:py-[100px] py-[60px] sm:py-[80px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="request-form">
            <div className="row justify-center">
              <div className="lg:basis-6/12 px-[15px] basis-full">
                <div id="get">
                  <h3 className="lg:text-[40px] text-[30px] leading-[34px] font-medium text-white mb-3 sm:text-[36px] sm:leading-[40px]">
                    Send Message
                  </h3>
                  <p className="lg:text-lg text-base sm:text-lg text-[#bbb] font-normal 2xl:mr-20 mr-0 mb-3 lg:mr-0">
                    Lorem ipsum dolor sit amet, conse adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
                <div className="form-block pt-11 mb-4">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                  >
                    <input
                      type="text"
                      className="text-field w-input"
                      maxLength="256"
                      name="main-2"
                      data-name="main 2"
                      placeholder="Name*"
                      id="main"
                      required=""
                    />
                    <div className="form-side flex">
                      <div className="w-1/2 mr-10">
                        <input
                          type="email"
                          className="text-field w-input"
                          maxLength="256"
                          name="email-2"
                          data-name="Email 2"
                          placeholder="Email*"
                          id="email-2"
                          required=""
                        />
                      </div>
                      <div className="w-1/2">
                        <input
                          type="tel"
                          className="text-field w-input"
                          maxLength="256"
                          name="email-3"
                          data-name="Email 3"
                          placeholder="Phone*"
                          id="email-3"
                          required=""
                        />
                      </div>
                    </div>
                    <input
                      type="text"
                      className="text-field w-input"
                      maxLength="256"
                      name="name-2"
                      data-name="Name 2"
                      placeholder="Subject*"
                      id="name-2"
                      required=""
                    />
                    <label className="massge-text">Message*</label>
                    <textarea
                      id="field-2"
                      name="field-2"
                      maxLength="5000"
                      data-name="Field 2"
                      placeholder=""
                      required=""
                      className="text-small-earea w-input"
                    ></textarea>
                    <input
                      type="submit"
                      value="Send Messge"
                      data-wait="Please wait..."
                      className="submit-btn w-button"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-[60px] sm:py-[80px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="">
            <div className="row items-center">
              <div className="2xl:basis-3/12 lg:basis-3/12 px-[15px] basis-full sm:basis-6/12">
                <img className="foot-logo" src="/foot-img.png" alt="" />
                <div className="mt-9">
                  <div className="flex">
                    <div className="social-link">
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="social-link">
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                    <div className="social-link m-right">
                      <i className="fa-brands fa-youtube"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:basis-3/12 lg:basis-3/12 px-[15px] basis-full sm:basis-6/12">
                <ul className="lg:pl-12  sm:pl-16 pt-8 sm:pt-8 pl-0">
                  <li>
                    <Link href="/">
                      <a
                        className="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]"
                        href=""
                      >
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a
                        className="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]"
                        href=""
                      >
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/catalog">
                      <a
                        className="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]"
                        href=""
                      >
                        Catalog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a
                        className="text-black text-lg block font-normal hover:text-[#e0ac26]"
                        href=""
                      >
                        Contact Us
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="2xl:basis-6/12 lg:basis-6/12 px-[15px] basis-full">
                <div className="foot-card lg:p-10 p-6 sm:p-8 bg-white mt-8">
                  <div className="row">
                    <div className="lg:basis-6/12 px-[15px] basis-full sm:basis-6/12">
                      <div className="flex items-center mb-8">
                        <div>
                          <i className="fa-solid fa-phone lg:text-2xl text-lg sm:text-2xl"></i>
                        </div>
                        <div className="lg:text-lg text-base sm:text-lg pl-4">
                          +91 9104466884
                        </div>
                      </div>
                      <div className="flex items-center mb-8">
                        <div>
                          <i className="fa-solid fa-envelope lg:text-2xl text-lg sm:text-2xl"></i>
                        </div>
                        <div className="lg:text-lg text-base pl-4 sm:text-lg">
                          +91 9104466884
                        </div>
                      </div>
                    </div>
                    <div className="lg:basis-6/12 px-[15px] basis-full sm:basis-6/12">
                      <div className="flex items-center mb-8">
                        <div>
                          <i className="fa-solid fa-phone lg:text-2xl text-lg sm:text-2xl"></i>
                        </div>
                        <div className="lg:text-lg text-base pl-4 sm:text-lg">
                          +91 9104466884
                        </div>
                      </div>
                      <div className="flex items-center mb-8">
                        <div>
                          <i className="fa-sharp fa-solid fa-globe lg:text-2xl text-lg sm:text-2xl"></i>
                        </div>
                        <div className="lg:text-lg text-base pl-4 sm:text-lg">
                          +91 9104466884
                        </div>
                      </div>
                    </div>
                    <div className="lg:basis-full px-[15px] basis-full">
                      <div className="flex lg:items-center items-start">
                        <div>
                          <i className="fa-sharp fa-solid fa-location-dot lg:text-2xl text-lg sm:text-2xl"></i>
                        </div>
                        <div className="lg:text-lg text-base pl-4 sm:text-lg">
                          Ahmedabad, Gujarat - 382481
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right py-[10px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="flex justify-between">
            <p className="lg:text-base text-xs sm:text-sm font-normal">
              ⓒ Copyright 2022. All right reserved
            </p>
            <p className="lg:text-base text-xs sm:text-sm font-normal">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
