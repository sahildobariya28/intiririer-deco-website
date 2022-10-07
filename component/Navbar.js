import React from 'react'
import Link from "next/link"
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  return (
    <>
    
    <header className="2xl:mt-[50px] sm:mt-[0px] ab-main-navbar sm:bg-white lg:bg-transparent lg:mt-[50px] bg-white">
      <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="flex sm:justify-between">
            <Link href="/">
              <a className="py-[15px] sm:py-3 bg-white" href="">
                <img className="logo-img 2xl:mx-auto sm:mx-0 lg:mx-auto" src="/logo-main.png" alt="" />
                </a>
                </Link>
              <div className="lg:hidden self-center">
                    <button className="navbar-burger flex items-center text-black">
                        <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
              <div className="menu-main lg:block hidden">
                  <div className="py-4 lg:py-3 bg-[#231f20]">
                      <div className="row items-center">
                          <div className="basis-6/12 px-[15px]">
                              <div className="flex pl-4 items-center">
                                  <div>
                                  <i className="fa-sharp fa-solid fa-location-dot text-xl text-white"></i>
                                  </div>
                                  <div className="text-base text-white pl-4 lg:text-sm">
                                  Ahmedabad, Gujarat - 382481
                                  </div>
                              </div>
                          </div>
                          <div className="basis-6/12 px-[15px]">
                              <div className="row items-center">
                                  <div className="basis-6/12">
                                    <div className="flex items-center justify-center">
                                        <div>
                                        <i className="fa-solid fa-phone text-xl text-white"></i> 
                                        </div>
                                        <div className="text-base text-white pl-4 lg:text-sm">
                                        +91 9104466884 / 85
                                        </div>
                                    </div>
                                  </div>
                                  <div className="basis-6/12">
                                    <div className="flex justify-end mr-[35px]">
                                            <div className="top-social">
                                            <Link href="">
                                              <a className="social-icon" href=""><i className="fa-brands fa-facebook-f"></i></a>
                                            </Link>
                                            </div>
                                            <div className="top-social">
                                            <Link href="">
                                              <a className="social-icon" href=""><i className="fa-brands fa-instagram"></i></a>
                                            </Link>
                                            </div>
                                            <div className="top-social">
                                            <Link href="">
                                              <a className="social-icon" href=""><i className="fa-brands fa-youtube"></i></a>
                                            </Link>
                                            </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="bg-[#e0ac26] w-full py-4 lg:py-3">
                    <div className="2XL:flex justify-between items-center hidden lg:flex  lg:items-center">
                    <div>
                      <Link href="/">
                        <a className="pl-4 text-lg text-white hover:text-black" href="">Home</a>
                      </Link>
                      <Link href="/about">
                        <a className="pl-16 lg:pl-10 text-lg text-white hover:text-black" href="">About Us</a>
                      </Link>
                      <Link href="/catalog">
                        <a className="pl-16 lg:pl-10 text-lg text-white hover:text-black" href="">Catalogues</a>
                      </Link>
                      <Link href="/contact">
                        <a className="pl-16 lg:pl-10 text-lg text-white hover:text-black" href="">Contact Us</a>
                      </Link>
                      </div>
                      <div>
                      <Link href="">
                          <a className="get-btn bg-[#c79b2a] text-lg text-white font-normal" href="">Get a quote</a>
                      </Link>
                      </div>
                    </div>
                  </div>
              </div>  
          </div>
      </div>
    </header>


    <div className="navbar-menu relative z-50 hidden">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 z-[999999999] flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#fdfbf4] border-r overflow-y-auto">
            <div className="flex items-center mb-8 justify-end">
                <button className="navbar-close">
					<svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
            </div>
            <div>
                <ul>
                    <li className="mb-1">
                    <Link href="/">
                        <a className="block py-3 text-base font-semibold text-gray-400 hover:text-black rounded" href="">Home</a>
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link href="/about">
                        <a className="block py-3 text-base font-semibold text-gray-400 hover:text-black rounded" href="">About Us</a>
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link href="/catalog">
                        <a className="block py-3 text-base font-semibold text-gray-400 hover:text-black rounded" href="">Catalogues</a>
                    </Link>
                    </li>
                    <li className="mb-1">
                    <Link href="/contact">
                        <a className="block py-3 text-base font-semibold text-gray-400 hover:text-black rounded" href="">Contact Us</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div> 


    <div className="ab-sticky-navbar">
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="2xl:py-3 xl:py-3 lg:py-3 md:py-4 sm:py-3 py-3 bg-white">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="flex justify-between items-center">
          <Link href="/">
            <a href="" className="brand-2 w-nav-brand">
              <img src="/sticky.png" loading="lazy" alt="" className="sticky-img"/>
              </a>
            </Link>
              <nav role="navigation" className="2xl:flex xl:flex lg:flex relative float-right items-center hidden">
                <div data-hover="true" data-delay="0" className="">
                  <div className="">
                    <div className="">
                      </div>
                      </div>
                        </div>
                        <Link href="/">
                        <a href="" aria-current="page" className="nav-link link-h text-lg font-normal pl-[66px] lg:pl-[35px] pr-[20px]">Home</a>
                        </Link>
                        <Link href="/about">
                        <a href="" className="nav-link link-a text-lg font-normal pl-[66px] lg:pl-[35px] pr-[20px]">About Us</a>
                        </Link>
                        <Link href="/catalog">
                        <a href="" className="nav-link link-c text-lg font-normal pl-[66px] lg:pl-[35px] pr-[20px]">Catalogues</a>
                        </Link>
                        <Link href="/contact">
                        <a href="" className="nav-link text-lg font-normal pl-[66px] pr-[20px] lg:pl-[35px] link-s">Contact Us</a>
                        </Link>
                        <Link href="#email-form">
                        <a href="" className="get-new">Get a quote</a>
                        </Link>
                        </nav>
                        <div className="lg:hidden self-center">
                    <button className="navbar-burger flex items-center text-black">
                        <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                    </div>
                          </div>
                          </div>
                          </div>
    </div>
    
    </>
  )
}

export default Navbar;