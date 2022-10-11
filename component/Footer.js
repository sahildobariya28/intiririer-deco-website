import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  return (
  <>
    
  <footer className="py-[60px] sm:py-[80px]">
      <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="">
                <div className="row items-center">
                    <div className="2xl:basis-3/12 lg:basis-3/12 px-[15px] basis-full sm:basis-6/12">
                        <img className="foot-logo" src="/foot-img.png" alt="" />
                        <div className="mt-9">
                            <div className="flex">
                              <div className="social-link"><i className="fa-brands fa-facebook-f"></i></div>
                              <div className="social-link"><i className="fa-brands fa-instagram"></i></div>
                              <div className="social-link m-right"><i className="fa-brands fa-youtube"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:basis-3/12 lg:basis-3/12 px-[15px] basis-full sm:basis-6/12">
                        <ul className="lg:pl-12  sm:pl-16 pt-8 sm:pt-8 pl-0">
                          <li>
                        <Link href="/">
                            <a className="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]" href="">Home</a>
                        </Link>
                          </li>
                          <li>
                        <Link href="/about">
                            <a className="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]" href="">About Us</a>
                        </Link>
                          </li>
                          <li>
                        <Link href="/catalog">
                            <a className="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]" href="">Catalog</a>
                        </Link>
                          </li>
                          <li>
                        <Link href="/contact">
                            <a className="text-black text-lg block font-normal hover:text-[#e0ac26]" href="">Contact Us</a>
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
              <p className="lg:text-base text-xs sm:text-sm font-normal">ⓒ Copyright 2022. All right reserved</p>
              <p className="lg:text-base text-xs sm:text-sm font-normal">Cookie Policy</p>
            </div>
        </div>
  </div>
    
  </>
  )
}

export default Footer;
