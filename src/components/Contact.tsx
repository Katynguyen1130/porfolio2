import { Button } from "@mui/material";
import React from "react";
import Image from "next/image";
import CONNECT from "../assets/images/CONNECT.png";
import useMousePosition from "./../customhooks/use-mouse-position";
import useWindowSize from "./../customhooks/use-window-size";

function Contact() {
  const { x, y } = useMousePosition();
  const size = useWindowSize();

  return (
    <div id="contact" className="flex flex-col lg:flex-row items-center section-px section-py">
      <div className="   main-margin flex flex-col items-center h-full justify-center ">
        <div className="font-audio header-text mb-5 lg:mb-16 lg:max-w-3xl text-center lg:leading-none">
          {" "}
          👉 Let's do something great together
        </div>

        <div className="body-text lg:mt-2">
          <svg
            className="inline-block mr-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.075 5.3325C0.226227 4.66986 0.597983 4.07822 1.12938 3.65446C1.66078 3.23071 2.32033 2.99995 3 3H21C21.6797 2.99995 22.3392 3.23071 22.8706 3.65446C23.402 4.07822 23.7738 4.66986 23.925 5.3325L12 12.621L0.075 5.3325ZM0 7.0455V17.7015L8.7045 12.3645L0 7.0455ZM10.1415 13.245L0.2865 19.2855C0.52999 19.7989 0.91429 20.2326 1.39467 20.5362C1.87505 20.8397 2.43176 21.0005 3 21H21C21.5681 21.0001 22.1246 20.8389 22.6048 20.5351C23.0849 20.2313 23.4688 19.7975 23.712 19.284L13.857 13.2435L12 14.379L10.1415 13.2435V13.245ZM15.2955 12.366L24 17.7015V7.0455L15.2955 12.3645V12.366Z"
              fill="#A91079"
              className="fill-darkGray dark:fill-white"
            />
          </svg>
          nhumai.ktqd@gmail.com
        </div>

        <div className="body-text lg:mt-2">
          <svg
            className="inline-block mr-4"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_3_50)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.82747 0.766507C3.08994 0.50444 3.4051 0.301144 3.75207 0.170092C4.09904 0.0390392 4.46991 -0.0167773 4.84008 0.00634104C5.21026 0.0294594 5.5713 0.130985 5.89927 0.304189C6.22724 0.477393 6.51466 0.718321 6.74247 1.01101L9.43497 4.47001C9.92847 5.10451 10.1025 5.93101 9.90747 6.71101L9.08697 9.99601C9.04455 10.1662 9.04684 10.3444 9.09363 10.5134C9.14041 10.6824 9.23009 10.8364 9.35397 10.9605L13.0395 14.646C13.1637 14.7701 13.318 14.86 13.4873 14.9068C13.6566 14.9536 13.8351 14.9557 14.0055 14.913L17.289 14.0925C17.6739 13.9963 18.0757 13.9888 18.4639 14.0706C18.8521 14.1525 19.2167 14.3215 19.53 14.565L22.989 17.256C24.2325 18.2235 24.3465 20.061 23.2335 21.1725L21.6825 22.7235C20.5725 23.8335 18.9135 24.321 17.367 23.7765C13.4087 22.3838 9.81488 20.1178 6.85197 17.1465C3.88091 14.184 1.61489 10.5907 0.221974 6.63301C-0.321026 5.08801 0.166474 3.42751 1.27647 2.31751L2.82747 0.766507Z"
                fill="#A91079"
                className="fill-darkGray dark:fill-white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3_50">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          +65 8683 2769
        </div>
        <div className="body-text lg:mt-2">
          <svg
            className="inline-block mr-4"
            width="24"
            height="28"
            viewBox="0 0 24 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 14C12.825 14 13.5315 13.7256 14.1195 13.1768C14.7065 12.6289 15 11.97 15 11.2C15 10.43 14.7065 9.7706 14.1195 9.2218C13.5315 8.67393 12.825 8.4 12 8.4C11.175 8.4 10.469 8.67393 9.882 9.2218C9.294 9.7706 9 10.43 9 11.2C9 11.97 9.294 12.6289 9.882 13.1768C10.469 13.7256 11.175 14 12 14ZM12 28C7.975 24.8033 4.969 21.8339 2.982 19.0918C0.994 16.3506 0 13.8133 0 11.48C0 7.98 1.2065 5.19167 3.6195 3.115C6.0315 1.03833 8.825 0 12 0C15.175 0 17.9685 1.03833 20.3805 3.115C22.7935 5.19167 24 7.98 24 11.48C24 13.8133 23.0065 16.3506 21.0195 19.0918C19.0315 21.8339 16.025 24.8033 12 28Z"
              fill="#A91079"
              className="fill-darkGray dark:fill-white inline-block"
            />
          </svg>
          Telok Blangah, Sinagpore
        </div>

        <a href="mailto:nhumai.ktqd@gmail.com" className="no-underline">
          <div className="body-text font-audio py-5 px-12 rounded-xl bg-violet hover:bg-pink dark:bg-yellow text-white dark:text-darkGray dark:hover:bg-neonGreen my-10 lg:my-16">
            Email Me
          </div>
        </a>
      </div>
      <div>
        <div
          className="mt-12 lg:mt-0"
          style={{
            transform: `translate3d(
                    ${(x / (size.width + 1)) * 5 - 2.5}%, 
                    ${(y / (size.width + 1)) * 2 + 2}%, 
                    0px)`,
          }}
        >
          <Image src={CONNECT} alt="connet" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
