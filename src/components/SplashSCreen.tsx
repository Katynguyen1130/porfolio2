import anime from "animejs";
import { useState, useEffect } from "react";

interface Props {
  finishLoading: () => void;
}

export default function SplashScreen({ finishLoading }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    let ml4 = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 1.5,
      durationIn: 800,
      durationOut: 600,
      delay: 500,
    };

    loader
      .add({
        targets: ".ml4 .letters-1",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-1",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        duration: ml4.durationIn,
      })
      .add({
        targets: ".ml4 .letters-2",
        opacity: 0,
        scale: ml4.scaleOut,
        duration: ml4.durationOut,
        easing: "easeInExpo",
        delay: ml4.delay,
      })

      .add({
        targets: ".ml4",
        opacity: 0,
        duration: 500,
        delay: 500,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen bg-darkGray w-screen flex flex-col justify-center items-center px-10">
      <div className="bg-darkGray relative w-full xl:w-[1200px] h-[250px] ml4 font-audio  font-extrabold">
        <h1 className="absolute opacity-0 letters-1  text-[50px] md:text-[100px] lg:text-[120px] xl:text-[150px] font-outline-4 text-transparent ">
          {" "}
          HI, IT'S KATY
        </h1>
        <h1 className="absolute pt-20  block opacity-0 letters-2 text-[30px] md:text-[50px] lg:text-[80px] xl:text-[100px] font-outline-2 text-transparent">
          {"          "} ....... Nice to meet you!{" "}
        </h1>
      </div>
    </div>
  );
}
