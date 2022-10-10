import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Footer from  '../component/Footer'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link';


const index = () => {
  const router = useRouter();
  return (
    <>
    
<Head>
        <title>Home Page</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Free Web tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>


        <script src='/sc.js'></script>

      </Head>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossOrigin="anonymous" referrerPolicy="no-referrer"/>

      <script src="/jquery-1.11.0.min.js"></script>
      <script src="/jquery-migrate-1.2.1.min.js"></script>
      <script src="/slick.min.js"></script>





      
      {/* <header className="2xl:mt-[50px] sm:mt-[0px] ab-main-navbar sm:bg-white lg:bg-transparent lg:mt-[50px] bg-white">
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
                        <a href="" className="pl-4 pr-5 text-lg text-white hover:text-black">Home</a>
                      </Link>
                      <Link href="/about">
                        <a href="" className={router.pathname == "/about" ? "active" : "2xl:pl-16 pr-5 lg:pl-10 text-lg text-white hover:text-black" }>About Us</a>
                      </Link>
                      <Link href="/catalog">
                        <a href="" className={router.pathname == "/catalog" ? "active" : "2xl:pl-16 pr-5 lg:pl-10 text-lg text-white hover:text-black"}>Catalogues</a>
                      </Link>
                      <Link href="/contact">
                        <a href="" className={router.pathname == "/contact" ? "active" : "2xl:pl-16 pr-5 lg:pl-10 text-lg text-white hover:text-black"}>Contact Us</a>
                      </Link>
                      </div>
                      <div>
                      <Link href="#get">
                          <a href="" className="get-btn bg-[#c79b2a] text-lg text-white font-normal">Get a quote</a>
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
                      <Link href="#get">
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
    </div> */}
    
    <Navbar />


      <section className="hero-main relative">
        <div className="">
            <div className="reviews">
                <div className="text-center slide-1">
                  <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
                    <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
                        <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">WELCOME TO HOME INTERIOR</h2>
                        <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!</h1>
                         <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                    </div>
                    </div>
                </div>
                <div className="text-center slide-2">
                  <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
                <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
                        <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">WELCOME TO HOME INTERIOR</h2>
                        <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!</h1>
                         <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                    </div>
                </div>
                </div>
                <div className="text-center slide-3">
                  <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
                <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
                        <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">WELCOME TO HOME INTERIOR</h2>
                        <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!</h1>
                         <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                    </div>
                </div>
                </div>
                <div className="text-center slide-4">
                  <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
                <div className="hero-content 2xl:max-w-[59%] xl:max-w-[65%] lg:max-w-[87%] sm:max-w-[70%] mx-auto max-w-full">
                        <h2 className="lg:text-2xl text-white font-bold text-lg sm:text-xl">WELCOME TO HOME INTERIOR</h2>
                        <h1 className="2xl:text-6xl font-bold text-white my-5 text-xl sm:text-4xl md:text-5xl md:leading-[56px] lg:text-[52px]">THE <span className="text-[#e0ac26]">FUTURIST</span> DOOR FOR YOU!</h1>
                        <p className="lg:text-lg lg:leading-8 text-white font-normal text-sm sm:text-base leading-7 sm:leading-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>


  <section className="2xl:py-[100px] py-[60px] sm:py-[80px] lg:py-[100px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div className="">
                <h2 className="2xl::text-[50px] 2xl:leading-[65px] font-bold text-[#383838] text-center text-[34px] leading-[34px] sm:text-[42px] sm:leading-[42px] lg:text-[38px] lg:leading-10 xl:text-[42px]">Who We Are</h2>
                <div className="who-main pt-10">
                   <div className="row items-center">
                      <div className="lg:basis-6/12 px-[15px] basis-full md:basis-6/12">
                        <div className="text-center">
                        <img className="mx-auto 2xl:w-[70%] xl:w-[70%] w-[100%] sm:w-[60%] md:w-[100%] lg:w-[80%]" src="/about-img.png" alt="" />
                        </div>
                      </div>
                      <div className="lg:basis-6/12 px-[15px] basis-full md:basis-6/12">
                          <div className="who-right">
                              <h2 className="2xl:text-[22px] font-medium 2xl:leading-10 xl:text-[22px] xl:leading-8 text-[#e0ac26] 2xl:mb-8 mb-6 mt-7 text-[18px] leading-7 md:mt-0 lg:text-lg lg:leading-7 lg:mb-8">Lorem Ipsum has been the industry standard galley of type and scrambled it to make type specimen</h2>
                              <p className="2xl:text-lg xl:text-lg font-normal text-base sm:text-lg lg:text-base">Lorem Ipsum has been the industry standard dummy text ever since the 150s, when unknown printer took a galley of type and scrambled it to make type specimen It has survived not only five centuries Lorem Ipsum has been the industry standard text ever since the 1500s, when unknown printer took a 
                              galley of type and scrambled it to make a type specimen book. It has survived not only scram to five centuries<br/><br/>industry standard dummy text ever since the 150s, when unknown printer took a galley of type and scrambled it to</p>
                          </div>
                      </div>
                   </div>
                </div>
          </div>
        </div>
  </section>


  <section className="bg-[#272727] lg:py-[100px] py-[60px] sm:py-[80px]">
    <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
      <div> 
          <h2 className="2xl:text-[50px] 2xl:leading-[65px] font-bold text-white text-center text-[34px] leading-[34px] sm:text-[42px] sm:leading-[42px] lg:text-[38px] lg:leading-[40px] xl:text-[42px]">What We Do</h2>
          <div className="2xl:text-3xl 2xl:leading-10 text-[#e0ac26] font-medium text-center text-xl leading-7 sm:text-2xl sm:leading-8 lg:text-xl lg:leading-8">Our Services</div>
      </div>
      <div className="pt-14">
          <div className="row">
              <div className="lg:basis-4/12 px-[15px] basis-full sm:basis-6/12">
                  <div className="what-we-card sm:mb-8">
                    <div className="relative overflow-hidden rounded-t-[10px]">
                      <img className="what-we-img" src="/service-1.jpeg" alt="" />
                    </div>
                    <div className="lg:p-[30px] p-5 relative rounded-b-[10px] bg-white border-b-4 border-[#e0ac26]">
                        <div className="what-title-block py-[10px]">
                            <h3 className="2xl:text-3xl xl:text-3xl font-medium text-[#e0ac26] 2xl:my-[10px] text-center my-[0px] text-xl sm:text-xl md:text-2xl md:my-[5px] lg:text-2xl lg:my-[5px]">Door & Window</h3>
                        </div>
                        <p className="lg:mt-10 mt-7 lg:mb-7 mb-6 font-normal text-base leading-7 sm:text-lg sm:leading-8 lg:text-base">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever...</p>
                    </div>
                  </div>
              </div>
              <div className="lg:basis-4/12 px-[15px] basis-full sm:basis-6/12">
              <div className="what-we-card sm:mb-8">
                    <div className="relative overflow-hidden rounded-t-[10px]">
                      <img className="what-we-img" src="/service-2.jpeg" alt="" />
                    </div>
                    <div className="lg:p-[30px] p-5 relative rounded-b-[10px] bg-white border-b-4 border-[#e0ac26]">
                        <div className="what-title-block py-[10px]">
                            <h3 className="2xl:text-3xl xl:text-3xl font-medium text-[#e0ac26] my-[0px] 2xl:my-[10px] text-center text-xl sm:text-xl md:text-2xl md:my-[5px] lg:text-2xl lg:my-[5px]">Door Service</h3>
                        </div>
                        <p className="lg:mt-10 mt-7 lg:mb-7 mb-6 font-normal text-base leading-7 sm:text-lg sm:leading-8 lg:text-base">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever...</p>
                    </div>
                  </div>
              </div>
              <div className="lg:basis-4/12 px-[15px] basis-full sm:basis-6/12">
              <div  className="what-we-card sm:mb-8">
                    <div className="relative overflow-hidden rounded-t-[10px]">
                      <img className="what-we-img" src="/service-3.jpeg" alt="" />
                    </div>
                    <div className="lg:p-[30px] p-5 relative rounded-b-[10px] bg-white border-b-4 border-[#e0ac26]">
                        <div className="what-title-block py-[10px]">
                            <h3 className="2xl:text-3xl xl:text-3xl font-medium text-[#e0ac26] my-[0px] 2xl:my-[10px] text-center text-xl sm:text-xl md:text-2xl md:my-[5px] lg:text-2xl lg:my-[5px]">Planning & Projects</h3>
                        </div>
                        <p className="lg:mt-10 mt-7 lg:mb-7 mb-6 font-normal text-base leading-7 sm:text-lg sm:leading-8 lg:text-base">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever...</p>
                    </div>
                  </div>
              </div>
              <div className="lg:basis-4/12 px-[15px] basis-full sm:basis-6/12">
              <div className="2xl:mt-8 what-we-card">
                    <div className="relative overflow-hidden rounded-t-[10px]">
                      <img className="what-we-img" src="/service-4.jpeg" alt="" />
                    </div>
                    <div className="lg:p-[30px] p-5 relative rounded-b-[10px] bg-white border-b-4 border-[#e0ac26]">
                        <div className="what-title-block py-[10px]">
                            <h3 className="2xl:text-3xl xl:text-3xl font-medium text-[#e0ac26] my-[0px] 2xl:my-[10px] text-center text-xl sm:text-xl md:text-2xl md:my-[5px] lg:text-2xl lg:my-[5px]">Door & Window</h3>
                        </div>
                        <p className="lg:mt-10 mt-7 lg:mb-7 mb-6 font-normal text-base leading-7 sm:text-lg sm:leading-8 lg:text-base">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever...</p>
                    </div>
                  </div>
              </div>
              <div className="lg:basis-4/12 px-[15px] basis-full sm:basis-6/12">
              <div className="2xl:mt-8 what-we-card">
                    <div className="relative overflow-hidden rounded-t-[10px]">
                      <img className="what-we-img" src="/service-5.jpeg" alt="" />
                    </div>
                    <div className="lg:p-[30px] p-5 relative rounded-b-[10px] bg-white border-b-4 border-[#e0ac26]">
                        <div className="what-title-block py-[10px]">
                            <h3 className="2xl:text-3xl xl:text-3xl font-medium text-[#e0ac26] my-[0px] 2xl:my-[10px] text-center text-xl sm:text-xl md:text-2xl md:my-[5px] lg:text-2xl lg:my-[5px]">Door Service</h3>
                        </div>
                        <p className="lg:mt-10 mt-7 lg:mb-7 mb-6 font-normal text-base leading-7 sm:text-lg sm:leading-8 lg:text-base">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever...</p>
                    </div>
                  </div>
              </div>
              <div className="lg:basis-4/12 px-[15px] basis-full sm:basis-6/12">
              <div className="2xl:mt-8 what-we-card">
                    <div className="relative overflow-hidden">
                      <img className="what-we-img" src="/service-6.jpeg" alt="" />
                    </div>
                    <div className="lg:p-[30px] p-5 relative rounded-b-[10px] bg-white border-b-4 border-[#e0ac26]">
                        <div className="what-title-block py-[10px]">
                            <h3 className="2xl:text-3xl xl:text-3xl font-medium text-[#e0ac26] 2xl:my-[10px] :my-[0px] text-center text-xl sm:text-xl md:text-2xl md:my-[5px] lg:text-2xl lg:my-[5px]">Planning & Projects</h3>
                        </div>
                        <p className="lg:mt-10 mt-7 lg:mb-7 mb-6 font-normal text-base leading-7 sm:text-lg sm:leading-8 lg:text-base">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ever...</p>
                    </div>  
                  </div>
              </div>
          </div>
      </div>
    </div>
  </section>


  
  <section className="lg:py-[100px] py-[60px] sm:py-[80px]">
    <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
      <div className="row items-center">
          <div className="lg:basis-6/12 px-[15px] basis-full">
                <h2 className="lg:text-[38px] text-[20px] font-bold lg:leading-10 leading-7 text-black mb-3 sm:text-[28px]">Explore Premium Windows</h2>
                <ul className="lg:mt-8 mt-7">
                  <li className="py-1 flex">   
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur</p>
                  </li>
                  <li className="py-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</p>
                  </li>
                  <li className="py-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </li>
                  <li className="py-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</p>
                  </li>
                  <li className="pt-[25px] pb-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur</p>
                  </li>
                  <li className="py-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg  text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</p>
                  </li>
                  <li className="py-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg  text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>
                  </li>
                  <li className="py-1 flex">
                    <a className="lg:text-lg text-base sm:text-lg text-[#e0ac26]"><i className="fa-solid fa-check"></i></a>
                    <p className="lg:text-lg  text-base sm:text-lg font-normal pl-[10px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</p>
                  </li>
                </ul>
          </div>
          <div className="lg:basis-6/12 px-[15px] basis-full">
                <div className="counter-right">
                    <div className="row">
                        <div className="lg:basis-6/12 px-[15px] basis-6/12">
                            <div className="counter-card mb-[30px] bg-[#f2f2f2] lg:py-[70px] py-[40px] sm:py-[50px]">  
                                <h2 className="count-text number1 lg:text-6xl text-4xl sm:text-5xl font-bold text-center text-[#383838] mb-3">300</h2>
                                <div className="count-pera lg:text-[22px] text-[13px] sm:text-[18px] sm:leading-7 lg:leading-8 leading-6 text-[#383838] text-center md:text-[20px] md:leading-7">Project Completed</div>
                            </div>
                        </div>
                        <div className="lg:basis-6/12 px-[15px] basis-6/12">
                        <div className="counter-card mb-[30px] bg-[#f2f2f2] lg:py-[70px] py-[40px] sm:py-[50px]">  
                                <h2 className="count-text number2 lg:text-6xl text-4xl sm:text-5xl font-bold text-center text-[#383838] mb-3">206</h2>
                                <div className="count-pera lg:text-[22px] text-[13px] sm:text-[18px] sm:leading-7 lg:leading-8 leading-6 text-[#383838] text-center md:text-[20px] md:leading-7">Doors Per Day</div>
                            </div>
                        </div>
                        <div className="lg:basis-6/12 px-[15px] basis-6/12">
                        <div className="counter-card lg:mb-[30px] mb-0 bg-[#f2f2f2] lg:py-[70px] py-[40px] sm:py-[50px]">  
                                <h2 className="count-text number3 lg:text-6xl text-4xl sm:text-5xl font-bold text-center text-[#383838] mb-3">200</h2>
                                <div className="count-pera lg:text-[22px] text-[13px] sm:text-[18px] sm:leading-7 lg:leading-8 leading-6 text-[#383838] text-center md:text-[20px] md:leading-7">Satisfied Customer</div>
                            </div>
                        </div>
                        <div className="lg:basis-6/12 px-[15px] basis-6/12">
                        <div className="counter-card lg:mb-[30px] mb-0 bg-[#f2f2f2] lg:py-[70px] py-[40px] sm:py-[50px]">  
                                <h2 className="count-text number4 lg:text-6xl text-4xl sm:text-5xl font-bold text-center text-[#383838] mb-3">15</h2>
                                <div className="count-pera lg:text-[22px] text-[13px] sm:text-[18px] sm:leading-7 lg:leading-8 leading-6 text-[#383838] text-center md:text-[20px] md:leading-7">Door</div>
                            </div>
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
                    <h3 className="lg:text-[40px] text-[30px] leading-[34px] font-medium text-white mb-3 sm:text-[36px] sm:leading-[40px]">Send Message</h3>
                    <p className="lg:text-lg text-base sm:text-lg text-[#bbb] font-normal 2xl:mr-20 mr-0 mb-3 lg:mr-0">Lorem ipsum dolor sit amet, conse adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div className="form-block pt-11 mb-4">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get">
                    <input type="text" className="text-field w-input" maxLength="256" name="main-2" data-name="main 2" placeholder="Name*" id="main" required=""/>
                    <div className="form-side flex">
                      <div className="w-1/2 mr-10">
                        <input type="email" className="text-field w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Email*" id="email-2" required=""/>
                        </div>
                        <div className="w-1/2">
                          <input type="tel" className="text-field w-input" maxLength="256" name="email-3" data-name="Email 3" placeholder="Phone*" id="email-3" required=""/>
                          </div>
                          </div>
                          <input type="text" className="text-field w-input" maxLength="256" name="name-2" data-name="Name 2" placeholder="Subject*" id="name-2" required=""/>
                          <label className="massge-text">Message*</label>
                          <textarea id="field-2" name="field-2" maxLength="5000" data-name="Field 2" placeholder="" required="" className="text-small-earea w-input"></textarea>
                          <input type="submit" value="Send Messge" data-wait="Please wait..." className="submit-btn w-button"/>
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
  );
};

export default index;
