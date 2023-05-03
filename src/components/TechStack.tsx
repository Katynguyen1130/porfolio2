import React from "react";
import Image from "next/image";
import { tech } from "@/assets/images/tech";

function TechStack() {
  return (
    <div className="main-margin section-mt flex flex-col items-center ">
      <div className="header-text dark:text-yellow font-audio text-center">Tech Stacks </div>
      <div className="grid grid-cols-2 gap-10 bg-white/70 dark:bg-darkGray/70 rounded-3xl py-10 px-5">
        <div className="text-center my-auto  large-text ">UI/UX design</div>
        <div>
          <div className="w-14 h-104 md:w-20 md:h-20 ">
            <Image src={tech.figma} alt="figma" />
          </div>
        </div>
        <div className="text-center my-auto  large-text">Front End</div>
        <div className="flex flex-row flex-wrap ">
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.react} alt="figma" className="w-full h-full" />
          </div>
          <div className=" w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.sass} alt="figma" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.redux} alt="figma" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.next} alt="figma" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.three} alt="figma" />
          </div>
        </div>
        {/* <div className="text-center my-auto  large-text ">Back End</div>
        <div className="flex flex-row flex-wrap">
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.node} alt="figma" className="w-full h-full" />
          </div>
        </div> */}
        <div className="text-center my-auto  large-text ">Mobile</div>
        <div className="flex flex-row flex-wrap">
          <div className=" h-14  md:h-20">
            <Image src={tech.native} alt="figma" className="w-full h-full" />
          </div>
        </div>
        <div className="text-center my-auto  large-text ">Language</div>
        <div className="flex flex-row flex-wrap">
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.javascript} alt="figma" className="w-full h-full" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.typescript} alt="figma" className="w-full h-full" />
          </div>
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.python} alt="figma" className="w-full h-full" />
          </div>
        </div>
        <div className="text-center my-auto  large-text ">Scrum Master</div>
        <div className="flex flex-row flex-wrap">
          <div className="w-14 h-14 md:w-20 md:h-20">
            <Image src={tech.scrum} alt="figma" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
