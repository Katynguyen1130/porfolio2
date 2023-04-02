import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { images } from "@/assets/images";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import useMousePosition from "./../customhooks/use-mouse-position";
import useWindowSize from "./../customhooks/use-window-size";

function Hero() {
  const { x, y } = useMousePosition();
  const size = useWindowSize();
  return (
    <div className="main-padding section-mt  pt-12 items-center grid grig-cols-1 lg:grid-cols-2 w-full overflow-hidden ">
      <div className=" py-10 max-w-5xl">
        <div className="mb-5 xl:mb-10">
          {" "}
          <p className="text-xl lg:text-[40px] xl:text-[60px]  font-audio text-violet dark:text-red text-center lg:text-right">
            {" "}
            Hi, I'm Katy
          </p>{" "}
        </div>
        <div
          style={{
            transform: `translate3d(
                    ${(x / size?.width || 1) * 5 - 2.5}%, 
                    ${(y / size?.height || 1) * 2 + 2}%, 
                    0px)`,
          }}
        >
          <h1 className="font-audio text-3xl pb-10 xl:pb-20 leading-none lg:text-[80px] xl:text-[100px] text-center lg:text-right tracking-wide select-none  ">
            Frontend <br />
            Developer
          </h1>
        </div>
        <p className="font-monterat text-md lg:tex-xl   text-center lg:text-right  ">
          Get to know me more? (❁´◡`❁)
        </p>
        <div className="flex flex-row gap-x-5 text-center justify-end lg:text-right">
          <p className="text-center lg:text-right">Find me at 👉</p>
          <a href="https://www.linkedin.com/in/katy-nguyen-431594121/" target="blank">
            <svg
              width="22"
              height="22"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_68)">
                <path
                  d="M44.4469 0H3.54375C1.58437 0 0 1.54688 0 3.45938V44.5312C0 46.4437 1.58437 48 3.54375 48H44.4469C46.4062 48 48 46.4438 48 44.5406V3.45938C48 1.54688 46.4062 0 44.4469 0ZM14.2406 40.9031H7.11563V17.9906H14.2406V40.9031ZM10.6781 14.8688C8.39062 14.8688 6.54375 13.0219 6.54375 10.7437C6.54375 8.46562 8.39062 6.61875 10.6781 6.61875C12.9563 6.61875 14.8031 8.46562 14.8031 10.7437C14.8031 13.0125 12.9563 14.8688 10.6781 14.8688ZM40.9031 40.9031H33.7875V29.7656C33.7875 27.1125 33.7406 23.6906 30.0844 23.6906C26.3812 23.6906 25.8187 26.5875 25.8187 29.5781V40.9031H18.7125V17.9906H25.5375V21.1219H25.6312C26.5781 19.3219 28.9031 17.4188 32.3625 17.4188C39.5719 17.4188 40.9031 22.1625 40.9031 28.3313V40.9031Z"
                  fill="white"
                  className="fill-violet dark:fill-neonGreen"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_68">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a href="https://www.facebook.com/nguyen.nhumai.7/" target="blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_17_61)">
                <path
                  d="M48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 35.9789 8.77641 45.908 20.25 47.7084V30.9375H14.1562V24H20.25V18.7125C20.25 12.6975 23.8331 9.375 29.3152 9.375C31.9402 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6613C28.68 15.75 27.75 17.6002 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7084C39.2236 45.908 48 35.9789 48 24Z"
                  fill="white"
                  className="fill-violet dark:fill-neonGreen"
                />
              </g>
              <defs>
                <clipPath id="clip0_17_61">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
      {/* sliders */}
      <div className=" mx-auto h-full  flex flex-col  items-center max-w-3xl">
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about01}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Basic Infor</h4>
                <h2 className="text-lg font-audio font-light">
                  Kitten, 18+10*n <br />
                  {"1 <= float n <=9"}
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about02}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Location</h4>
                <h2 className="text-lg font-audio font-light">Singapore</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about03}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Love?</h4>
                <h2 className="text-lg font-audio font-light">Animals, Plants, Foods</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about04}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Background</h4>
                <h2 className="text-lg font-audio font-light">Investment, Economics</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about05}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">CS Student?</h4>
                <h2 className="text-lg font-audio font-light">No, self taught</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about06}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Languages</h4>
                <h2 className="text-lg font-audio font-light">Vietnamese, English, Chinese </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about07}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Design?</h4>
                <h2 className="text-lg font-audio font-light">Yes, but for fun</h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about08}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">Who I am?</h4>
                <h2 className="text-lg font-audio font-light">
                  Mother of Dragons <br /> Oops! I meant Cats
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" px-5 py-5  flex flex-col items-center overflow-hidden justify-between h-full">
              <div className=" w-full rounded-t-xl overflow-hidden ">
                <Image
                  src={images.about09}
                  alt="about"
                  className="w-full object-cover rouned-t-xl"
                />
              </div>
              <div className="text-center  bg-darkGray/50  w-full py-5 rounded-b-xl  ">
                {/* <div className="absolute top-0 w-20 h-20 bg-orange"></div> */}
                <h4 className="text-base font-monterat font-light">It's me</h4>
                <h2 className="text-lg font-audio font-light">Katy Nguyen</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
