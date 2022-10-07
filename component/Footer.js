import Link from "next/link"

const Footer = () => {
  return (
    <>
              <footer class="py-[60px]">
      <div class="xl:px-[15px] sm:px-[15px] px-[15px] md:container mx-auto">
          <div class="">
                <div class="row items-center">
                    <div class="basis-3/12 px-[15px]">
                        <img src="/foot-img.png" alt="" />
                        <div class="mt-9">
                            <div class="flex">
                              <div class="social-link"><i class="fa-brands fa-facebook-f"></i></div>
                              <div class="social-link"><i class="fa-brands fa-instagram"></i></div>
                              <div class="social-link"><i class="fa-brands fa-youtube"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="basis-3/12 px-[15px]">
                        <ul class="pl-20">
                          <li>
                            <a class="mb-[32px] text-black text-lg block font-normal" href="">Home</a>
                          </li>
                          <li>
                            <a class="mb-[32px] text-black text-lg block font-normal" href="/about">About Us</a>
                          </li>
                          <li>
                            <a class="mb-[32px] text-black text-lg block font-normal" href="">Catalog</a>
                          </li>
                          <li>
                            <a class="text-black text-lg block font-normal" href="">Contact Us</a>
                          </li>
                        </ul>
                    </div>
                    <div class="basis-6/12 px-[15px]">
                        <div class="foot-card p-10 bg-white">
                            <div class="row">
                                <div class="basis-6/12 px-[15px]">
                                    <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-solid fa-phone text-2xl"></i>
                                        </div>
                                        <div class="text-lg pl-4">
                                          +91 9104466884
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-solid fa-envelope text-2xl"></i>
                                        </div>
                                        <div class="text-lg pl-4">
                                          +91 9104466884
                                        </div>
                                    </div>
                                </div>
                                <div class="basis-6/12 px-[15px]">
                                <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-solid fa-phone text-2xl"></i>
                                        </div>
                                        <div class="text-lg pl-4">
                                          +91 9104466884
                                        </div>
                                    </div>
                                    <div class="flex items-center mb-8">
                                        <div>
                                        <i class="fa-sharp fa-solid fa-globe text-2xl"></i>
                                        </div>
                                        <div class="text-lg pl-4">
                                          +91 9104466884
                                        </div>
                                    </div>
                                </div>
                                <div class="basis-full px-[15px]">
                                <div class="flex items-center">
                                        <div> 
                                        <i class="fa-sharp fa-solid fa-location-dot text-2xl"></i>
                                        </div>
                                        <div class="text-lg pl-4">
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
              <p class="text-base font-normal">ⓒ Copyright 2022. All right reserved</p>
              <p class="text-base font-normal">Cookie Policy</p>
            </div>
        </div>
  </div>
    </>
  );
};

export default Footer;