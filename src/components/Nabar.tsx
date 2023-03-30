import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "../contexts/app.context";
import { images } from "@/assets/images";
import { useRouter } from "next/router";

function Nabar() {
  const { theme, toggleTheme } = useAppContext();
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const location = router.asPath;
  console.log(location);
  return (
    <div className="flex flex-row justify-between items-center main-margin relative ">
      <Link href="/">
        <div className="h-12">
          {theme === "dark" ? (
            <Image src={images.logoDark} alt="logo" height={46} className="object-cover" />
          ) : (
            <Image src={images.logolight} alt="logo" height={46} className="object-cover" />
          )}
        </div>
      </Link>
      {/* large screen menu */}
      <div className="hidden lg:!block">
        <div className=" flex flex-row gap-x-5 xl:gap-x-10">
          <Link href="/" className={`link-text ${location === "/" && "active"}`}>
            Home
          </Link>
          <Link href="/#about" className={`link-text ${location === "/#about" && "active"}`}>
            About
          </Link>
          <Link href="/projects" className={`link-text ${location === "/project" && "active"}`}>
            Projects
          </Link>
          <Link href="/work" className={`link-text ${location === "/work" && "active"}`}>
            Work log
          </Link>
          <Link href="/blog" className={`link-text ${location === "/blog" && "active"}`}>
            Blogs
          </Link>
          <Link href="/#contact" className={`link-text ${location === "/#contact" && "active"}`}>
            Contacts
          </Link>
          {theme === "dark" ? (
            <button
              onClick={() => {
                toggleTheme("light");
                localStorage.setItem("theme", "light");
              }}
              className="link-text button-base"
            >
              🌛Light onn!
            </button>
          ) : (
            <button
              onClick={() => {
                toggleTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
              className="link-text button-base"
            >
              🌞 Light off?
            </button>
          )}
        </div>
      </div>

      {/* hamburger menu */}
      <div className="xl:hidden">
        {!menu ? (
          <div
            className="transition py-5 px-5 "
            onClick={() => {
              setMenu(true);
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 250 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="10"
                x2="240"
                y2="10"
                stroke-width="20"
                stroke-linecap="round"
                stroke={`${theme === "dark" ? "yellow" : "#8080FF"}`}
                className="fill-violet dark:fill-yellow"
              />
              <line
                x1="10"
                y1="80"
                x2="240"
                y2="80"
                stroke-width="20"
                stroke-linecap="round"
                stroke={`${theme === "dark" ? "yellow" : "#8080FF"}`}
                className="fill-violet dark:fill-yellow"
              />
              <line
                x1="10"
                y1="150"
                x2="240"
                y2="150"
                stroke-width="20"
                stroke-linecap="round"
                stroke={`${theme === "dark" ? "yellow" : "#8080FF"}`}
                className="fill-violet dark:fill-yellow"
              />
            </svg>
          </div>
        ) : (
          <div
            className="py-5 px-5"
            onClick={() => {
              setMenu(false);
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 198 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M188.633 115.628C194.072 116.587 197.752 121.794 196.255 127.11C190.39 147.936 177.894 166.396 160.529 179.6C140.499 194.831 115.463 201.951 90.4154 199.54C65.3678 197.128 42.1502 185.362 25.3943 166.588C8.63837 147.815 -0.423933 123.414 0.0152305 98.2548C0.454394 73.0951 10.3627 49.0259 27.7636 30.8487C45.1645 12.6715 68.7786 1.72271 93.8951 0.18652C119.012 -1.34967 143.784 6.63968 163.271 22.5607C180.164 36.3634 192.008 55.2478 197.143 76.2654C198.453 81.6305 194.593 86.7058 189.124 87.4744V87.4744C183.655 88.2431 178.66 84.4062 177.215 79.0756C172.87 63.0395 163.61 48.6651 150.616 38.0486C135.027 25.3117 115.209 18.9203 95.1161 20.1492C75.0229 21.3782 56.1316 30.1372 42.2109 44.679C28.2902 59.2207 20.3635 78.4761 20.0122 98.6038C19.6609 118.732 26.9107 138.252 40.3154 153.271C53.7201 168.289 72.2942 177.702 92.3323 179.632C112.37 181.561 132.399 175.865 148.424 163.68C161.78 153.524 171.536 139.481 176.438 123.606C178.068 118.33 183.194 114.669 188.633 115.628V115.628Z"
                fill="black"
                className="fill-violet dark:fill-yellow"
              />
              <line
                x1="138.511"
                y1="56.1421"
                x2="54.1421"
                y2="140.511"
                stroke={`${theme === "dark" ? "yellow" : "#8080FF"}`}
                stroke-width="20"
                stroke-linecap="round"
                className="fill-violet dark:fill-yellow"
              />
              <line
                x1="54.1421"
                y1="58"
                x2="138.514"
                y2="142.372"
                stroke={`${theme === "dark" ? "yellow" : "#8080FF"}`}
                stroke-width="20"
                stroke-linecap="round"
                className="fill-violet dark:fill-yellow"
              />
            </svg>
          </div>
        )}
      </div>
      {/* small screen menu */}

      <div
        className={` absolute  z-10  border  top-20 right-0 px-5 mx:px-10 pb-5 rounded-b-xl transition-transform transform duration-300 ${
          !menu && "translate-x-[120%]"
        } `}
      >
        <div className=" flex flex-col gap-y-5 md:gap-y-10 lg:hidden bg-white/50 dark:bg-darkGray/50">
          <Link href="/" className={`link-text ${location === "/" && "active"}`}>
            Home
          </Link>
          <Link href="/#about" className={`link-text ${location === "/#about" && "active"}`}>
            About
          </Link>
          <Link href="/projects" className={`link-text ${location === "/project" && "active"}`}>
            Projects
          </Link>
          <Link href="/work" className={`link-text ${location === "/work" && "active"}`}>
            Work log
          </Link>
          <Link href="/blog" className={`link-text ${location === "/blog" && "active"}`}>
            Blogs
          </Link>
          <Link href="/#contact" className={`link-text ${location === "/#contact" && "active"}`}>
            Contacts
          </Link>
          {theme === "dark" ? (
            <button
              onClick={() => {
                toggleTheme("light");
                localStorage.setItem("theme", "light");
              }}
              className="link-text button-base"
            >
              🌛Light onn!
            </button>
          ) : (
            <button
              onClick={() => {
                toggleTheme("dark");
                localStorage.setItem("theme", "dark");
              }}
              className="link-text button-base"
            >
              🌞 Light off?
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nabar;
