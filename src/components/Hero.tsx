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
    <div className="main-padding mt-24 flex flex-col lg:flex-row gap-y-20 w-full bg01 dark:bg-darkGray overflow-hidden">
      <div className=" flex flex-col lg:justify-center lg:w-[35%] ">
        <div className="mb-5 xl:mb-10">
          {" "}
          <p className="large-text   font-audio text-violet dark:text-yellow text-center ">
            {" "}
            Hi, I'm Katy
          </p>{" "}
        </div>
        <div
          style={{
            transform: `translate3d(
                    ${(x / (size.width + 1)) * 5 - 2.5}%, 
                    ${(y / (size.width + 1)) * 2 + 2}%, 
                    0px)`,
          }}
          className="pb-5 xl:pb-10"
        >
          <h1 className="leading-none  header-text font-audio text-center  tracking-wide select-none  ">
            Frontend Developer{" "}
          </h1>
          <p className=" font-audio  text-center ">
            and, <span className="text-red dark:text-pink large-text font-audio">Scrum Master</span>
          </p>
        </div>
        <p className="font-monterat text-md lg:tex-xl   text-center  ">
          Get to know me more? (❁´◡`❁)
        </p>
        <div className="flex flex-row gap-x-5 text-center justify-center  ">
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
                  className="fill-violet dark:fill-yellow"
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
                  className="fill-violet dark:fill-yellow"
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
      {/* hero image */}
      <div className="flex flex-col justify-end items-center lg:w-[60%] relative">
        <div className="font-audio large-text ">Find the cat</div>
        <div className=" w-full ">
          <Image alt="hero" src={images.hero} className="w-full object-cover " />
        </div>
        <div className=" absolute w-[30%] top-40 left-40 opacity-0 hover:opacity-100 transition duration-300">
          <Image alt="cat" src={images.cat} className=" object-cover " />
        </div>
        <div className=" absolute w-[30%] top-10 left-10  vibrate-2  ">
          <Image alt="cloud1" src={images.cloud01} className="w-full object-cover " />
        </div>
        <div className=" absolute w-[30%] top-10 rotate-145 -right-10 wobble-hor-bottom ">
          <Image alt="cloud2" src={images.cloud01} className="w-full object-cover " />
        </div>
        <div className=" absolute w-[30%] top-10 left-40 jello-horizontal">
          <Image alt="cloud2" src={images.wifi} className="w-full object-cover " />
        </div>
      </div>
    </div>
  );
}

export default Hero;
