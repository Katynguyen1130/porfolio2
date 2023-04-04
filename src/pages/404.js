import Link from "next/link";

export default function FourOhFour() {
  return (
    <div className="flex flex-col items-center">
      <div className=" text-[30px] text-center font-bold mt-[60px] font-monterat text-darkGray  dark:text-yellow mx-auto">
        <p className="text-center">Oops! This site is under construction! </p>
      </div>
      <Link href="/">
        <p>Go back home</p>
      </Link>
    </div>
  );
}
