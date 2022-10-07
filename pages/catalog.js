import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../component/Navbar'
import Footer from  '../component/Footer'
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


        <script src='/sc.js'></script>

      </Head>
      <script src="/jquery-1.11.0.min.js"></script>
      <script src="/jquery-migrate-1.2.1.min.js"></script>
      <script src="/slick.min.js"></script>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet"></link>


      <Navbar />

     <section className="catalog-bg">
          <div className="over-bg">
          </div>
          <h2 className="relative text-white z-[9] font-bold 2xl:text-[50px] 2xl:leading-[65px] text-center text-[38px] leading-[48px]">Catalogues</h2>
     </section>
    

    <section className="2xl:py-[100px]  py-[60px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
            <div className="">
               <h3 className="2xl:text-3xl font-medium text-[#e0ac26] text-[26px] leading-8">Catalouge 1</h3>
               <div className="2xl:mt-[50px] mt-[30px]">
                  <div className="row">
                      <div className="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mb-8">
                        <div className="catalog-card 2xl:p-9 p-5 bg-white">
                            <Link href="dummy.pdf" target="_blank">
                            <a className="relative" href="">
                                <img className="w-full" src="/cat-1.png" alt="" />
                                <div className="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                            </Link>
                        </div>
                        <div className="2xl:mt-8 mt-5">
                            <h4 className="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 1</h4>
                            <p className="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div className="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mb-8">
                      <div className="catalog-card 2xl:p-9 p-5 bg-white">
                        <Link href="dummy.pdf" target="_blank">
                            <a className="relative" href="">
                                <img className="w-full" src="/cat-2.png" alt="" />
                                <div className="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </Link>
                        </div>
                        <div className="2xl:mt-8 mt-5">
                            <h4 className="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 2</h4>
                            <p className="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div className="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mb-8">
                      <div className="catalog-card 2xl:p-9 p-5 bg-white">
                        <Link href="dummy.pdf" target="_blank">
                            <a className="relative" href="">
                                <img className="w-full" src="/cat-3.png" alt="" />
                                <div className="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </Link>
                        </div>
                        <div className="2xl:mt-8 mt-5">
                            <h4 className="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 3</h4>
                            <p className="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
    </section>
    

    <section className="2xl:pb-[100px] pb-[70px]">
        <div className="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
            <div className="">
               <h3 className="2xl:text-3xl font-medium text-[#e0ac26] text-[26px] leading-8">Catalouge 2</h3>
               <div className="2xl:mt-[50px] mt-[30px]">
                  <div className="row">
                      <div className="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] 2xl:mt-8 mt-8 md:mt-0">
                        <div className="catalog-card 2xl:p-9 p-5 bg-white">
                        <Link href="dummy.pdf" target="_blank">
                            <a className="relative" href="">
                                <img className="w-full" src="/cat-4.png" alt="" />
                                <div className="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </Link>
                        </div>
                        <div className="2xl:mt-8 mt-5">
                            <h4 className="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 4</h4>
                            <p className="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div className="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mt-8 md:mt-0">
                      <div className="catalog-card 2xl:p-9 p-5 bg-white">
                      <Link href="dummy.pdf" target="_blank">
                            <a className="relative" href="">
                                <img className="w-full" src="/cat-5.png" alt="" />
                                <div className="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </Link>
                        </div>
                        <div className="2xl:mt-8 mt-5">
                            <h4 className="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 5</h4>
                            <p className="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
                      </div>
                      <div className="2xl:basis-4/12 md:basis-4/12 sm:basis-6/12 px-[15px] mt-8 md:mt-0">
                      <div className="catalog-card 2xl:p-9 p-5 bg-white">
                        <Link href="dummy.pdf" target="_blank">
                            <a className="relative" href="">
                                <img className="w-full" src="/cat-6.png" alt="" />
                                <div className="overlay"><img src="/download.png" alt="" /></div>
                            </a>
                        </Link>
                        </div>
                        <div className="2xl:mt-8 mt-5">
                            <h4 className="2xl:text-2xl text-lg text-[#e0ac26] font-medium 2xl:mb-2 xl:mb-2 mb-[5px]">Item 6</h4>
                            <p className="text-lg font-normal">Amet minim mollit nont.</p>
                        </div>
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
  )
}

export default catalog