import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';

const catalog = () => {
  const router = useRouter();
  return (
    <>

    
<Head>
        <title>Catalogues</title>
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




     <section class="catalog-bg">
          <div class="over-bg">
          </div>
          <h2 class="relative text-white z-[999] font-bold 2xl:text-[50px] 2xl:leading-[65px] text-center text-[38px] leading-[48px]">Catalogues</h2>
     </section>
    

    <section class="2xl:py-[100px]  py-[60px]">
        <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
            <div class="">
               <h3 class="2xl:text-3xl font-medium text-[#e0ac26] text-[26px] leading-8">Catalouge 1</h3>
               <div class="2xl:mt-[50px] mt-[30px]">
                  <div class="row">
                      <div class="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mb-8">
                        <div class="catalog-card 2xl:p-9 p-5 bg-white">
                            <a class="relative" href="dummy.pdf">
                                <img class="w-full" src="/cat-1.png" alt="" />
                                <div class="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </div>
                        <div class="2xl:mt-8 mt-5">
                            <h4 class="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 1</h4>
                            <p class="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div class="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mb-8">
                      <div class="catalog-card 2xl:p-9 p-5 bg-white">
                            <a class="relative" href="dummy.pdf">
                                <img class="w-full" src="/cat-2.png" alt="" />
                                <div class="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </div>
                        <div class="2xl:mt-8 mt-5">
                            <h4 class="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 2</h4>
                            <p class="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div class="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mb-8">
                      <div class="catalog-card 2xl:p-9 p-5 bg-white">
                            <a class="relative" href="dummy.pdf">
                                <img class="w-full" src="/cat-3.png" alt="" />
                                <div class="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </div>
                        <div class="2xl:mt-8 mt-5">
                            <h4 class="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 3</h4>
                            <p class="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    </section>
    

    <section class="2xl:pb-[100px] pb-[70px]">
        <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
            <div class="">
               <h3 class="2xl:text-3xl font-medium text-[#e0ac26] text-[26px] leading-8">Catalouge 2</h3>
               <div class="2xl:mt-[50px] mt-[30px]">
                  <div class="row">
                      <div class="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] 2xl:mt-8 mt-8 md:mt-0">
                        <div class="catalog-card 2xl:p-9 p-5 bg-white">
                            <a class="relative" href="dummy.pdf">
                                <img class="w-full" src="/cat-4.png" alt="" />
                                <div class="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </div>
                        <div class="2xl:mt-8 mt-5">
                            <h4 class="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 4</h4>
                            <p class="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div class="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mt-8 md:mt-0">
                      <div class="catalog-card 2xl:p-9 p-5 bg-white">
                            <a class="relative" href="dummy.pdf">
                                <img class="w-full" src="/cat-5.png" alt="" />
                                <div class="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </div>
                        <div class="2xl:mt-8 mt-5">
                            <h4 class="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 5</h4>
                            <p class="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div class="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mt-8 md:mt-0">
                      <div class="catalog-card 2xl:p-9 p-5 bg-white">
                            <a class="relative" href="dummy.pdf">
                                <img class="w-full" src="/cat-6.png" alt="" />
                                <div class="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </div>
                        <div class="2xl:mt-8 mt-5">
                            <h4 class="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 6</h4>
                            <p class="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
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

export default catalog