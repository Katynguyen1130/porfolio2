import React from "react";
import Marquee from "react-fast-marquee";

function Footer() {
  return (
    <div className="flex flex-row  mt-[500px] w-screen overflow-hidden pb-5 ">
      <div className="flex flex-col w-[180px] lg:w-[300px] items-end  text-darkGray dark:text-offWhite border-violet dark:border-yellow  border-t-[3px] border-r-[3px] ">
        <a href="https://github.com/Katynguyen1130" target="blank">
          <p className="mr-2 font-audio text-xs lg:text-base mt-1 cursor-pointer border-b-[2px] border-transparent hover:border-violet dark:hover:border-yellow transition duration-300 ease-in-out">
            Kat's Github
          </p>
        </a>
        <a href="https://www.linkedin.com/in/katy-nguyen-431594121/" target="blank">
          <p className="mr-2 font-audio text-xs lg:text-base mt-1 cursor-pointer border-b-[2px] border-transparent hover:border-violet dark:hover:border-yellow transition duration-300 ease-in-out">
            Kat's Linkedin
          </p>
        </a>
      </div>
      <div className="w-full border-b-[3px] border-violet bg-green  dark:border-yellow overflow-hidden ">
        <Marquee direction="left" speed={80} className="h-full bg-green-500" gradient={false}>
          <div className="font-lg bg-violet text-darkGray dark:bg-yellow dark:text-darkGray py-2 ">
            ✌️ (❁´◡`❁)
            😍🍕╰(*°▽°*)╯😻🍔ᓚᘏᗢᓚᘏᗢ😺😹(*/ω＼*)🙀😿ψ(｀∇´)ψ🐈‍⬛😾（*＾-＾*）🍟🌭[]~(￣▽￣)~*🎇🎏🎀ㄟ(≧◇≦)ㄏ🪝🐛🙀😿＼(((￣(￣(￣▽￣)￣)￣)))／🚕🛹🛴🥨🥐🥪🌮🍗
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Footer;
