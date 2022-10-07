import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==" crossorigin="anonymous" referrerpolicy="no-referrer"
    />

    <script src='/sc.js'></script>

      </Head>
      <script src="/jquery-1.11.0.min.js"></script>
      <script src="/jquery-migrate-1.2.1.min.js"></script>
      <script src="/slick.min.js"></script>


      <header class="2xl:mt-[50px] sm:mt-[0px] ab-main-navbar sm:bg-white lg:bg-transparent lg:mt-[50px] bg-white">
      <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div class="flex sm:justify-between">
              <a class="py-[15px] sm:py-3 bg-white" href="">
                <img class="logo-img 2xl:mx-auto sm:mx-0 lg:mx-auto" src="/logo-main.png" alt="" />
                </a>
              <div className="lg:hidden self-center">
                    <button className="navbar-burger flex items-center text-black">
                        <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
              <div class="menu-main lg:block sm:hidden hidden">
                  <div class="py-4 lg:py-3 bg-[#231f20]">
                      <div class="row items-center">
                          <div class="basis-6/12 px-[15px]">
                              <div class="flex pl-4 items-center">
                                  <div>
                                  <i class="fa-sharp fa-solid fa-location-dot text-xl text-white"></i>
                                  </div>
                                  <div class="text-base text-white pl-4 lg:text-sm">
                                  Ahmedabad, Gujarat - 382481
                                  </div>
                              </div>
                          </div>
                          <div class="basis-6/12 px-[15px]">
                              <div class="row items-center">
                                  <div class="basis-6/12">
                                    <div class="flex items-center justify-center">
                                        <div>
                                        <i class="fa-solid fa-phone text-xl text-white"></i> 
                                        </div>
                                        <div class="text-base text-white pl-4 lg:text-sm">
                                        +91 9104466884 / 85
                                        </div>
                                    </div>
                                  </div>
                                  <div class="basis-6/12">
                                    <div class="flex justify-end mr-[35px]">
                                            <div class="top-social">
                                              <a class="social-icon" href=""><i class="fa-brands fa-facebook-f"></i></a>
                                            </div>
                                            <div class="top-social">
                                              <a class="social-icon" href=""><i class="fa-brands fa-instagram"></i></a>
                                            </div>
                                            <div class="top-social">
                                              <a class="social-icon" href=""><i class="fa-brands fa-youtube"></i></a>
                                            </div>
                                    </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="bg-[#e0ac26] w-full py-4 lg:py-3">
                    <div class="2XL:flex justify-between items-center hidden lg:flex  lg:items-center">
                    <div>
                        <a class="pl-4 text-lg text-white hover:text-black" href="/">Home</a>
                        <a class="pl-16 lg:pl-10 text-lg text-white hover:text-black" href="/about">About Us</a>
                        <a class="pl-16 lg:pl-10 text-lg text-white hover:text-black" href="/catalog">Catalogues</a>
                        <a class="pl-16 lg:pl-10 text-lg text-white hover:text-black" href="/contact">Contact Us</a>
                      </div>
                      <div>
                          <a class="get-btn bg-[#c79b2a] text-lg text-white font-normal" href="">Get a quote</a>
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
                    <ul className="dropdown inline-block relative">
                        <li className="mb-1">
                        <Link href="">
                            <a className="text-base font-semibold text-[#6b747b] hover:text-black block py-3">
                            Services
                                {/* <i className="fa-solid fa-caret-down"></i> */}
                            </a>
                            </Link>
                        </li>
                        <ul className="dropdown-menu static hidden text-gray-700 pt-1 w-40 left-6">
                            <li><Link href="/audit"><a className="rounded-t bg-[#f1f9fc] text-sm font-semibold text-[#6b747b] hover:text-[#013E62]  py-2 px-4 block " href="">Audit & Assurance</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/accounting"><a className="bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">Accounting & Payroll</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/corporate"><a className="rounded-b bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">Corporate Law</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/directtax"><a className="rounded-b bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">Direct Tax</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/indirect"><a className="rounded-b bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">Indirect Tax</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/management"><a className="rounded-b bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">Management and Advisory</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/projectfunding"><a className="rounded-b bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">Project Funding</a></Link></li>
                            <hr className="mx-2"/>
                            <li><Link href="/ngosocieties"><a className="rounded-b bg-[#f1f9fc] text-[#6b747b] text-sm font-semibold hover:text-[#013E62] py-2 px-4 block " href="">NGO Societies and Trust</a></Link></li>
                        </ul>
                        <li className="mb-1">
                        <Link href="/contect">
                        <a className="block py-3 text-base font-semibold text-gray-400 hover:text-[#013E62] rounded" href="">Contect</a>
                        </Link>
                    </li>
                    </ul>
                </ul>
            </div>
        </nav>
    </div> 


    <div class="ab-sticky-navbar">
      <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="2xl:py-3 xl:py-3 lg:py-3 md:py-4 sm:py-3 py-3 bg-white">
        <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div class="flex justify-between items-center">
            <a href="/" class="brand-2 w-nav-brand">
              <img src="/sticky.png" loading="lazy" alt="" class="sticky-img"/>
              </a>
              <nav role="navigation" class="2xl:flex xl:flex lg:flex relative float-right items-center hidden">
                <div data-hover="true" data-delay="0" class="">
                  <div class="">
                    <div class="">
                      </div>
                      </div>
                        </div>
                        <a href="/" aria-current="page" class="nav-link link-h text-lg font-normal pl-[66px] lg:pl-[35px] pr-[20px]">Home</a>
                        <a href="/about" class="nav-link link-a text-lg font-normal pl-[66px] lg:pl-[35px] pr-[20px]">About Us</a>
                        <a href="/catalog" class="nav-link link-c text-lg font-normal pl-[66px] lg:pl-[35px] pr-[20px]">Catalogues</a>
                        <a href="/contact" class="nav-link text-lg font-normal pl-[66px] pr-[20px] lg:pl-[35px] link-s">Contact Us</a>
                        <a href="#email-form" class="get-new">Get a quote</a>
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




     <section class="contact-bg">
          <div class="over-bg">
          </div>
          <h2 class="relative text-white font-bold 2xl:text-[50px] 2xl:leading-[65px] text-center text-[38px] leading-[48px]">Contact Us</h2>
     </section>

    

    <section class="2xl:py-[100px] py-[60px]">
        <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
            <div class="map-main">
                <div class="row">
                  <div class="lg:basis-9/12 px-[15px] md:basis-9/12 sm:basis-full basis-full">
                        <div class="map-left 2xl:p-[60px] p-[20px] sm:p-[30px] md:p-[30px] lg:p-[60px]">
                            <div class="flex 2xl:mb-8 mb-5 sm:mb-6 md:mb-8">
                                <div><i class="fa-solid fa-phone 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i></div>
                                <div class="2xl:text-xl text-base lg:text-xl text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium">+91 9104466884<br/>+91 9104466885</div>
                            </div>
                            <div class="flex 2xl:mb-8 mb-5 sm:mb-6 md:mb-8">
                                <div><i class="fa-solid fa-envelope 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i></div>
                                <div class="2xl:text-xl text-base lg:text-xl text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium">info@interiodeco.in</div>
                            </div>
                            <div class="flex 2xl:mb-8 mb-5 sm:mb-6 md:mb-8">
                                <div><i class="fa-solid fa-globe 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i></div>
                                <div class="2xl:text-xl text-base lg:text-xl text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium">www.interiodeco.in</div>
                            </div>
                            <div class="flex">
                                <div><i class="fa-sharp fa-solid fa-location-dot 2xl:text-2xl lg:text-2xl text-lg sm:text-xl text-black"></i></div>
                                <div class="2xl:text-xl text-base lg:text-xl 2xl:leading-8 leading-7 lg:leading-8 text-black 2xl:ml-10 ml-4 sm:ml-5 md:ml-6 font-medium 2xl:max-w-[50%] md:max-w-[58%] max-w-full">47/A, Meldi Industrial Estate, Nr Gota Railway Crossing, Gota,Ahmedabad, Gujarat - 382481</div>
                            </div>
                        </div>
                  </div>
                  <div class="lg:basis-3/12 px-[15px] md:basis-3/12 basis-full">
                  <div class="map-main-right">
                    <div class="map-main-inner">
                    <img class="w-full h-full" src="/map.png" alt="" />
                    </div> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    </section>

  
    <section class="bg-[#272727] lg:py-[100px] py-[60px] sm:py-[80px]">
    <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
      <div class="request-form">
          <div class="row justify-center">
              <div class="lg:basis-6/12 px-[15px] basis-full">
                <div>
                    <h3 class="lg:text-[40px] text-[30px] leading-[34px] font-medium text-white mb-3 sm:text-[36px] sm:leading-[40px]">Send Message</h3>
                    <p class="lg:text-lg text-base sm:text-lg text-[#bbb] font-normal 2xl:mr-20 mr-0 mb-3 lg:mr-0">Lorem ipsum dolor sit amet, conse adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
                <div class="form-block pt-11 mb-4">
                  <form id="email-form" name="email-form" data-name="Email Form" method="get">
                    <input type="text" class="text-field w-input" maxlength="256" name="main-2" data-name="main 2" placeholder="Name*" id="main" required=""/>
                    <div class="form-side flex">
                      <div class="w-1/2 mr-10">
                        <input type="email" class="text-field w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Email*" id="email-2" required=""/>
                        </div>
                        <div class="w-1/2">
                          <input type="tel" class="text-field w-input" maxlength="256" name="email-3" data-name="Email 3" placeholder="Phone*" id="email-3" required=""/>
                          </div>
                          </div>
                          <input type="text" class="text-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="Subject*" id="name-2" required=""/>
                          <label for="field-2" class="massge-text">Message*</label>
                          <textarea id="field-2" name="field-2" maxlength="5000" data-name="Field 2" placeholder="" required="" class="text-small-earea w-input"></textarea>
                          <input type="submit" value="Send Messge" data-wait="Please wait..." class="submit-btn w-button"/>
                          </form>
                              </div>
                              </div>
                            </div>
                        </div>
                    </div>
  </section>



  <footer class="py-[60px] sm:py-[80px]">
      <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div class="">
                <div class="row items-center">
                    <div class="2xl:basis-3/12 lg:basis-3/12 px-[15px] basis-full sm:basis-6/12">
                        <img className="foot-logo" src="/foot-img.png" alt="" />
                        <div class="mt-9">
                            <div class="flex">
                              <div class="social-link"><i class="fa-brands fa-facebook-f"></i></div>
                              <div class="social-link"><i class="fa-brands fa-instagram"></i></div>
                              <div class="social-link m-right"><i class="fa-brands fa-youtube"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="2xl:basis-3/12 lg:basis-3/12 px-[15px] basis-full sm:basis-6/12">
                        <ul class="lg:pl-12  sm:pl-16 pt-8 sm:pt-8 pl-0">
                          <li>
                            <Link href="/">
                            <a class="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]" href="">Home</a>
                            </Link>
                          </li>
                          <li>
                          <Link href="/about">
                            <a class="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]" href="">About Us</a>
                          </Link>
                          </li>
                          <li>
                          <Link href="/catalog">
                            <a class="lg:mb-[32px] mb-[20px] text-black text-lg block font-normal hover:text-[#e0ac26]" href="">Catalog</a>
                            </Link>
                          </li>
                          <li>
                          <Link href="/contact">
                            <a class="text-black text-lg block font-normal hover:text-[#e0ac26]" href="">Contact Us</a>
                            </Link>
                          </li>
                        </ul>
                    </div>
                    <div class="2xl:basis-6/12 lg:basis-6/12 px-[15px] basis-full">
                        <div class="foot-card lg:p-10 p-6 sm:p-8 bg-white mt-8">
                            <div class="row">
                                <div class="lg:basis-6/12 px-[15px] basis-full sm:basis-6/12">
                                    <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-solid fa-phone lg:text-2xl text-lg sm:text-2xl"></i>
                                        </div>
                                        <div class="lg:text-lg text-base sm:text-lg pl-4">
                                          +91 9104466884
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-8">
                                      <div>
                                        <i class="fa-solid fa-envelope lg:text-2xl text-lg sm:text-2xl"></i>
                                        </div>
                                        <div class="lg:text-lg text-base pl-4 sm:text-lg">
                                          +91 9104466884
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:basis-6/12 px-[15px] basis-full sm:basis-6/12">
                                <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-solid fa-phone lg:text-2xl text-lg sm:text-2xl"></i>
                                        </div>
                                        <div class="lg:text-lg text-base pl-4 sm:text-lg">
                                          +91 9104466884
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-sharp fa-solid fa-globe lg:text-2xl text-lg sm:text-2xl"></i>
                                        </div>
                                        <div class="lg:text-lg text-base pl-4 sm:text-lg">
                                          +91 9104466884
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:basis-full px-[15px] basis-full">
                                <div class="flex lg:items-center items-start">
                                        <div> 
                                        <i class="fa-sharp fa-solid fa-location-dot lg:text-2xl text-lg sm:text-2xl"></i>
                                        </div>
                                        <div class="lg:text-lg text-base pl-4 sm:text-lg">
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


  <div class="copy-right py-[10px]">
        <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
            <div class="flex justify-between">
              <p class="lg:text-base text-xs sm:text-sm font-normal">ⓒ Copyright 2022. All right reserved</p>
              <p class="lg:text-base text-xs sm:text-sm font-normal">Cookie Policy</p>
            </div>
        </div>
  </div>

    </>
  )
}

export default contact