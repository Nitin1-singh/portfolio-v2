import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";

export function HeroSection() {
  return (
    <section id="home" className="bg-hero flex flex-col justify-around items-center bg-slate-200 max-sm:h-[600px] h-screen sm:pt-[8rem] max-lg:h-[650px]">
      <div className="flex flex-col gap-10 justify-center items-center max-sm:mt-36">
        <div>
          <h1 className="max-sm:text-4xl max-lg:text-center max-sm:text-center font-bold text-7xl">HEY, I{'\''}M NITIN SINGH NEGI</h1>
        </div>
        <div className="w-3/5 max-lg:w-3/4 max-sm:w-full max-sm:px-7 text-center">
          <h1 className="max-sm:text-[1rem] max-sm:px-2 max-sm:text-center text-xl  text-[#333]">A Result-Oriented Full Stack Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</h1>
        </div>
        <div>
          <Button as={Link} className="flex items-center w-[200px] h-[50px] text-lg font-semibold" radius="sm" color="secondary" href="#project" >PROJECTS</Button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center max-sm:pt-10 max-sm:pb-5">
        <span className="relative w-[25px] h-[40px] rounded-full border-[#333] border-2">
          <span className="absolute left-2 mouse top-1 w-[5px] h-[5px] rounded-full bg-black" />
        </span>
      </div>
    </section >
  )
}