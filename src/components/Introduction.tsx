import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { images } from "@/assets/images";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { AppContext } from "next/app";
import { useContext } from "react";
import { useAppContext } from "@/contexts/app.context";

function Introduction() {
  const { theme } = useAppContext();
  return (
    <div className="section-py relative overflow-hidden">
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
      <div className="w-full h-full absolute -z-10 top-0 left-0">
        <svg
          width="1601"
          height="861"
          viewBox="0 0 1601 861"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className=""
        >
          <path
            d="M2.00011 108.5L163.66 320.405C208.554 379.254 299.602 370.628 332.647 304.395L399.259 170.881C432.931 103.389 382.611 24.3341 307.211 26.2699L299.143 26.4771C217.568 28.5714 172.709 122.22 222.204 187.098L445.308 479.545C502.997 555.165 432.492 661.025 340.479 636.939L125.672 580.711C89.5976 571.268 58.4515 607.459 73.164 641.724V641.724C88.4898 677.417 138.876 678.023 155.055 642.708L190.668 564.979C208.642 525.748 193.444 479.291 155.759 458.267L115.29 435.691C59.4457 404.537 47.243 329.183 89.7364 281.397V281.397C120.73 246.544 171.993 237.417 212.878 259.862L708.668 532.038C759.055 559.699 822.332 539.29 847.063 487.403L1023.64 116.924C1056.5 47.9789 1151.39 39.8316 1195.53 102.167L1337 302V302C1330.43 318.665 1353.05 330.999 1363.5 316.446L1480.61 153.291C1500.76 125.212 1544.62 134.056 1552.32 167.751L1570.31 246.451C1577.84 279.416 1562.84 313.418 1533.42 330.084L1137.95 554.098C1057.99 599.389 964.41 521.919 993.977 434.912L1024.15 346.13C1045.43 283.495 1120.58 258.418 1175.21 295.716L1410 456L1229.09 632.285C1190.8 669.593 1225.11 733.76 1277.4 722.642V722.642C1286.97 720.606 1296.92 721.245 1306.16 724.488L1478.5 785L1431.66 664.995C1402.98 591.53 1466.66 515.331 1544.05 530.502L1592.5 540L940.023 848.427C912.519 861.428 880.591 861.202 853.274 847.812L371.488 611.657C314.511 583.729 297.617 510.482 336.605 460.42L552.916 182.669C581.849 145.517 632.781 133.585 675.206 154.019L867.178 246.482C941.272 282.17 1014.08 195.5 966.147 128.674V128.674C928.464 76.1397 966.011 2.99997 1030.66 2.99997L1279.5 2.99997"
            stroke={theme === "dark" ? "#490CA6" : "#FF7BD6"}
            stroke-opacity="0.5"
            stroke-width="5"
            className=" path "
          />
        </svg>
      </div>
    </div>
  );
}

export default Introduction;
