import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import wave01 from "../assets/images/wave01.gif";
import { images } from "@/assets/images";

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [book, setBook] = useState(false);
  const [next, setNext] = useState(false);
  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;

    // Add classes to the div element
    if (ref.current) {
      ref.current.classList.add("w-mod-js");
      if (isTouchDevice) {
        ref.current.classList.add("w-mod-touch");
      }
    }
  }, []);
  console.log("ref", ref.current);
  return (
    <div className="mx-auto px-2 section-mt">
      <div className="text-center header-text dark:text-yellow ">Read my stories?</div>
      <div className="text-center my-5">
        <button
          onClick={() => {
            setBook(true);
          }}
          className={`font-audio mx-5 cursor:pointer px-5 rounded-md ${
            book && "dark:text-yellow text-violet"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => {
            setBook(false);
          }}
          className={`font-audio mx-5 cursor:pointer px-5 `}
        >
          No
        </button>
      </div>
      <div ref={ref} className={`hidden lg:!block ${!book && "h-0"} `}>
        {
          <div className={`transition-all ease-in-out  ${!book && "scale-0 opacity-0"}`}>
            <div className="scene">
              <div className="book-wrap">
                <div className="left-side">
                  <div className="book-cover-left"></div>
                  <div className="layer1">
                    <div className="page-left"></div>
                  </div>
                  <div className="layer2">
                    <div className="page-left"></div>
                  </div>
                  <div className="layer3">
                    <div className="page-left"></div>
                  </div>
                  <div className="layer4">
                    <div className="page-left"></div>
                  </div>
                  <div className="layer-text">
                    <div className="page-left-2">
                      <div className="corner"></div>
                      <div className="corner2"></div>
                      <div className="corner-fold"></div>
                      <div className="page-text w-richtext">
                        <h3>
                          <strong>The Start</strong>
                        </h3>
                        <h6>
                          BY 
                          <a
                            href="https://www.linkedin.com/in/katy-nguyen-431594121/"
                            target="_blank"
                          >
                            Katy Nguyen
                          </a>
                        </h6>
                        <p>‍</p>
                        <p>It was an autumn night, I couldn't sleep </p>
                        <p>
                          Browsing facebook newfeed, I saw a friend of my mentioning CS50 course.
                        </p>
                        <p>Curiousity got me, I checked that course out.</p>
                        <p>Printf("Hello World"), the very first step which got me here</p>
                        <p>Curiousity killed the cat</p>
                        <p>Katy's new journey started with curiousity</p>
                        <div className="w-[150px] h-[100px] xl:w-[200px] xl:h-[150px] xxl:w-[300px] xxl:h-[200px] mx-auto overflow-hidden">
                          <Image src={images.curiousity} alt="hello world" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center"></div>
                <div className="right-side">
                  <div className="book-cover-right"></div>
                  <div className="layer1">
                    <div className="page-right"></div>
                  </div>
                  <div className="layer2 right">
                    <div className="page-right"></div>
                  </div>
                  <div className="layer3 right">
                    <div className="page-right"></div>
                  </div>
                  <div className="layer4 right">
                    <div className="page-right"></div>
                  </div>
                  <div className="layer-text right">
                    <div className="page-right-2">
                      <div className="page-text w-richtext">
                        <h3>
                          <strong>Don't limit yourself! </strong>
                        </h3>
                        <h6>
                          BY 
                          <a
                            href="https://www.linkedin.com/in/katy-nguyen-431594121/"
                            target="_blank"
                          >
                            Katy The Kitten
                          </a>
                        </h6>
                        <p>‍</p>
                        <p>
                          I used to think that I was the kind of person who would hate sitting in
                          one place all day.
                        </p>
                        <p>
                          I also thought that I could not pay attention to small details required
                          for such meticulous work.
                        </p>
                        <p>‍</p>
                        <p>
                          But as it turned out, what I thought I was defined who I was. Consistency
                          is key, a single step can lead to a long and wonderful journey.
                        </p>
                        <p>‍</p>
                        <p>
                          Being an active person does not mean physically being here and there; it
                          means doing all that one can to achieve what they want.
                        </p>
                        <p>‍</p>
                        <p>
                          Having skills in Business, Sales, Management, Scrum Agile, and
                          Programming, along with being who I am, makes me a unique person!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      <div className={`lg:hidden ${!book && "h-0"} `}>
        {book && (
          <div className="flex flex-col items-center">
            <div className="paper rounded-lg overflow-hidden  !text-darkGray px-10 md:px-40 py-20 ">
              <div className="font-monterat font-semibold text-darkGray/70">
                <h3 className="text-lg  !text-darkGray">
                  <strong>The Start</strong>
                </h3>
                <h6>
                  By 
                  <a href="https://www.linkedin.com/in/katy-nguyen-431594121/" target="_blank">
                    Katy Nguyen
                  </a>
                </h6>
                <p>‍</p>
                <p>It was an autumn night, I couldn't sleep </p>
                <p>Browsing facebook newfeed, I saw a friend of my mentioning CS50 course.</p>
                <p>Curiousity got me, I checked that course out.</p>
                <p>Printf("Hello World"), the very first step which got me here</p>
                <p>Curiousity killed the cat</p>
                <p>Katy's new journey started with curiousity</p>
                <div className="w-[300px] h-[250px] hidden md:!block mx-auto">
                  <Image
                    src={images.curiousity}
                    alt="hello world"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="my-10">
              {!next && (
                <button
                  onClick={() => {
                    setNext(true);
                  }}
                  className={`font-audio mx-5 cursor:pointer px-5 rounded-md ${book && "border "}`}
                >
                  Read Next?
                </button>
              )}
            </div>
            {next && (
              <div className="paper rounded-lg overflow-hidden  !text-darkGray px-5 md:px-40 py-10 md:py-20 ">
                <div className="font-monterat font-semibold text-darkGray/70">
                  <h3>
                    <strong>Don't limit yourself! </strong>
                  </h3>
                  <h6>
                    By 
                    <a href="https://www.linkedin.com/in/katy-nguyen-431594121/" target="_blank">
                      Katy The Kitten
                    </a>
                  </h6>

                  <p>
                    I used to think that I was the kind of person who would hate sitting in one
                    place all day.
                  </p>
                  <p>
                    I also thought that I could not pay attention to small details required for such
                    meticulous work.
                  </p>

                  <p>
                    But as it turned out, what I thought I was defined who I was. Consistency is
                    key, a single step can lead to a long and wonderful journey.
                  </p>

                  <p>
                    Being an active person does not mean physically being here and there; it means
                    doing all that one can to achieve what they want.
                  </p>

                  <p>
                    Having skills in Business, Sales, Management, Scrum Agile, and Programming,
                    along with being who I am, makes me a unique person!
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
