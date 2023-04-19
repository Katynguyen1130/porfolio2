import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { images } from "@/assets/images";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

function Introduction() {
  return (
    <div className="section-py">
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

export default Introduction;
