import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="w-3/4 flex flex-row max-sm:flex-col max-sm:gap-10 pt-10 pb-10 mx-auto justify-between border-b-1 border-[#333]">
        <div className="w-1/2 max-sm:w-full">
          <h1 className="font-semibold text-2xl">NITIN SINGH NEGI</h1>
          <p className="text-sm pt-3">A Full Stack  Web Developer building the Frontend and Backend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className="w-1/4 flex flex-col max-sm:w-full">
          <p className="font-semibold text-2xl">Social</p>
          <div className="flex flex-row gap-5 mt-3">
            <Link href="#">
              <Image className="col-blue" src="./github.svg" alt="github-image" width={30} height={30} />
            </Link>
            <Link href="#">
              <Image className="col-blue" src="./linkedin.png" alt="linkedin-image" width={30} height={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-3/4 pt-10 pb-10 mx-auto max-sm:text-center">
        <p className="text-xs">&copy;</p><span className="text-xs ps-1">Copyright 2024. Made by</span><span className="ps-1 text-xs">
          <Link className="text-xs underline underline-offset-4" href="#">
            NITIN SINGH NEGI
          </Link>
        </span>
      </div>
    </footer>
  )
}